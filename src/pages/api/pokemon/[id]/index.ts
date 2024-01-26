import { NextApiRequest, NextApiResponse } from "next";
import { urlPokemon } from "@/utils/variables";
import axios from "axios";

const pokemonByIdHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { id } = req.query;

    try {
        const apiPokemon = await axios(`${urlPokemon}/${id}`);
        const pokemonDetail = {
            number: apiPokemon.data.id,
            name:
                apiPokemon.data.name.charAt(0).toUpperCase() +
                apiPokemon.data.name.slice(1),
            hp: apiPokemon.data.stats[0].base_stat,
            attack: apiPokemon.data.stats[1].base_stat,
            defence: apiPokemon.data.stats[2].base_stat,
            speed: apiPokemon.data.stats[5].base_stat,
            types: apiPokemon.data.types.map((t: any) => {
                return { name: t.type.name };
            }),
            image: apiPokemon.data.sprites.other["official-artwork"]
                .front_default,
        };

        res.status(200).json({
            data: pokemonDetail,
        });
    } catch (error) {
        res.send(error);
    }
};

export default pokemonByIdHandler;
