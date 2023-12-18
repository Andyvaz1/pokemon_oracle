import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { urlPokemon } from "@/utils/variables";
import { regions, typeImgList } from "@/utils/dictionaries";
import { filterType } from "@/utils/filters";
import prisma from "../../../../prisma/prismaClient";

const pruebaHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Body and Params destructuring and variables declaration
    const { key, type, region } = req.query;
    const { userId, newPokemonData } = req.body;

    // Method validation
    switch (req.method) {
        case "GET":
            try {
                // const dbPokemon = await prisma.pokemon.findMany({
                //     where: { userId: userId },
                //     include: { types: true },
                // });
                const { offSet, limit } = regions[region as string];
                const apiRequest = await axios(
                    `${urlPokemon}?limit=898&offset=0`
                );
                const apiPokemon = apiRequest.data.results.map(
                    (pokemon: any) => {
                        return {
                            number: pokemon.id,
                            name: pokemon.name,
                        };
                    }
                );

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
