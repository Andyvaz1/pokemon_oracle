import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { urlPokemon } from "@/utils/variables";
import { regions, typeImgList } from "@/utils/dictionaries";
import { filterType } from "@/utils/filters";
import prisma from "../../../../prisma/prismaClient";

const pokemonHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Body and Params destructuring and variables declaration
    const { key } = req.query;
    const { type, region, userId, newPokemonData } = req.body;

    // Method validation
    switch (req.method) {
        case "GET":
            // Body validation
            if (!req.body.region)
                return res
                    .status(400)
                    .json({ errorMessage: "Region is required" });
            if (!regions[req.body.region])
                return res.status(400).json({ errorMessage: "Region Invalid" });
            if (!req.body.type)
                return res
                    .status(400)
                    .json({ errorMessage: "Type is required" });
            if (!typeImgList.find((t) => t.name === req.body.type))
                return res
                    .status(400)
                    .json({ errorMessage: "Type is Invalid" });
            try {
                // const dbPokemon = await prisma.pokemon.findMany({
                //     where: { userId: userId },
                //     include: { types: true },
                // });
                const { offSet, limit } = regions[region];
                const apiRequest = await axios(
                    `${urlPokemon}?limit=${limit}&offset=${offSet}`
                );
                const apiPokemon = await Promise.all(
                    apiRequest.data.results.map(async (pokemon: any) => {
                        const info = await axios.get(pokemon.url);
                        return {
                            number: info.data.id,
                            name: info.data.name,
                            hp: info.data.stats[0].base_stat,
                            attack: info.data.stats[1].base_stat,
                            defence: info.data.stats[2].base_stat,
                            speed: info.data.stats[5].base_stat,
                            types: info.data.types.map((t: any) => {
                                return { name: t.type.name };
                            }),
                            image: info.data.sprites.other["official-artwork"]
                                .front_default,
                        };
                    })
                );
                // await apiRequest.data.results.map(
                //     (pokemon: any) => {}
                // );
                const filteredPokemon = filterType(type, apiPokemon);

                res.status(200).json({
                    count: filteredPokemon.length,
                    data: filteredPokemon,
                });
            } catch (error) {
                res.send(error);
            }
            break;

        case "POST":
            if (key !== process.env.KEY) {
                res.status(401).json({ errorMessage: "Not Authorized" });
            } else if (!newPokemonData) {
                return res
                    .status(400)
                    .json({ errorMessage: "Pokemon data is required" });
            } else {
                try {
                    const newPokemon = await prisma.pokemon.create({
                        data: {
                            name: newPokemonData.name,
                            hp: newPokemonData.hp,
                            attack: newPokemonData.attack,
                            defence: newPokemonData.defence,
                            speed: newPokemonData.speed,
                            weight: newPokemonData.weight,
                            height: newPokemonData.height,
                            image: newPokemonData.image,
                            types: {
                                connect: newPokemonData.types,
                            },
                            userId: userId,
                        },
                    });

                    res.status(200).json({
                        message: "Pokemon created succesfuly!",
                        pokemonData: newPokemon,
                    });
                } catch (error) {
                    res.send(error);
                }
            }

        default:
            res.status(405).json({
                errorMessage:
                    "That request method is not allowed in this route. Allowed methods: GET and POST",
            });
    }
};

export default pokemonHandler;
