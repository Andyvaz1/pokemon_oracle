"use client";
import {
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
    Avatar,
} from "@nextui-org/react";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

import { useEffect, useState } from "react";

export default function Home() {
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `/api/pokemon?region=all&type=all`
            );
            setAllPokemons(
                data.data.map((pokemon: any) => {
                    let pokeList = {
                        name: pokemon.name,
                        image: pokemon.image,
                    };
                    return pokeList;
                })
            );
        }
        fetchData();
    }, []);

    return (
        <div className="bg-black h-screen">
            <div className="flex justify-center">
                <Autocomplete
                    defaultItems={allPokemons}
                    startContent={
                        <IoIosSearch size={50} className="text-white" />
                    }
                    placeholder="Search Pokémon"
                    className="max-w-xs  my-8 border-purple-600"
                    size="lg"
                    variant="bordered"
                    isLoading={allPokemons.length ? false : true}
                    aria-label="Search Pokémon"
                >
                    {allPokemons.map((pokemon: any) => (
                        <AutocompleteItem
                            className="text-white"
                            startContent={
                                <Avatar
                                    alt={pokemon.name}
                                    className="flex-shrink-0"
                                    size="sm"
                                    src={pokemon.image}
                                />
                            }
                            key={pokemon.name}
                            textValue={pokemon.name}
                        >
                            {pokemon.name}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
        </div>
    );
}
