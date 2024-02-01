import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { urlPokemon } from "@/utils/variables";
import { regions, typeImgList } from "@/utils/dictionaries";
import { filterType } from "@/utils/filters";
import prisma from "../../../../prisma/prismaClient";
import { image } from "@nextui-org/react";

const pruebaHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Method validation
    switch (req.method) {
        case "GET":
            try {
                // const dbPokemon = await prisma.pokemon.findMany({
                //     where: { userId: userId },
                //     include: { types: true },
                // });

                const apiRequest = await axios(
                    `${urlPokemon}?limit=898&offset=0`
                );

                const apiPokemon = apiRequest.data.results.map(
                    (pokemon: any) => {
                        return {
                            number: pokemon.url.split("/")[6],
                            name:
                                pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1),
                        };
                    }
                );
                // const apiPokemon = await Promise.all(
                //     apiRequest.data.results.map(async (pokemon: any) => {
                //         const info = await axios.get(pokemon.url);
                //         return {
                //             number: info.data.id,
                //             name:
                //                 pokemon.name.charAt(0).toUpperCase() +
                //                 pokemon.name.slice(1),

                //             image: info.data.sprites.front_default,
                //         };
                //     })
                // );

                res.status(200).json({
                    count: apiPokemon.length,
                    data: apiPokemon,
                });
            } catch (error) {
                res.send(error);
            }
            break;

        default:
            res.status(405).json({
                errorMessage:
                    "That request method is not allowed in this route. Allowed methods: GET and POST",
            });
    }
};
export default pruebaHandler;
