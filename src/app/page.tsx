"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/home/SearchBar";
import axios from "axios";
import CardPokemon from "@/components/card/CardPokemon";
import CardSkeleton from "@/components/card/CardSkeleton";
import Pagination from "@/components/home/Pagination";
import { Pokemon } from "@prisma/client";

const sekeletons = [
    <CardSkeleton key={1} />,
    <CardSkeleton key={2} />,
    <CardSkeleton key={3} />,
    <CardSkeleton key={4} />,
    <CardSkeleton key={5} />,
    <CardSkeleton key={6} />,
    <CardSkeleton key={7} />,
    <CardSkeleton key={8} />,
    <CardSkeleton key={9} />,
    <CardSkeleton key={10} />,
    <CardSkeleton key={11} />,
    <CardSkeleton key={12} />,
];
interface Pokesolo {
    name: String;
    image: String;
    types: String[];
}

export default function Home() {
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [displayedPokemon, setDisplayedPokemon] = useState<Pokesolo[]>([]);
    const [page, setPage] = useState(1);

    async function fetchDataTwo() {
        async function fetchData() {
            const { data } = await axios.get(
                `/api/pokemon?region=johto&type=all`
            );
            setDisplayedPokemon(data.data);
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `/api/pokemon?region=johto&type=all`
            );
            setDisplayedPokemon(data.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchDataOne() {
            if (selectedPokemon === "") {
                return console.log("no hay pokemon seleccionado");
            } else if (selectedPokemon === null) {
                fetchDataTwo();
            } else {
                const { data } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.toLowerCase()}`
                );
                setDisplayedPokemon([{ ...data, key: 1 }]);
            }
        }
        fetchDataOne();
    }, [selectedPokemon]);

    return (
        <div className="bg-black min-h-screen">
            <SearchBar
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
            />
            <Pagination
                page={page}
                setPage={setPage}
                pokemon={displayedPokemon}
            />
            <div className="grid grid-cols-1 mx-10 md:grid-cols-2 gap-4 lg:grid-cols-4 gap-4">
                {displayedPokemon?.length !== 0
                    ? displayedPokemon
                          ?.map((pokemon: any) => {
                              return (
                                  <CardPokemon
                                      key={pokemon.name}
                                      pokemon={pokemon}
                                  />
                              );
                          })
                          .slice((page - 1) * 12, (page - 1) * 12 + 12)
                    : sekeletons}
            </div>
            <Pagination
                page={page}
                setPage={setPage}
                pokemon={displayedPokemon}
            />
        </div>
    );
}
