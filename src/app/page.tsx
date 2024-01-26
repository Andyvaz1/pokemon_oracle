"use client";

import { use, useEffect, useState } from "react";
import SearchBar from "@/components/home/SearchBar";
import axios from "axios";
import CardPokemon from "@/components/card/CardPokemon";
import CardSkeleton from "@/components/card/CardSkeleton";
import Pagination from "@/components/home/Pagination";
import { useSearchParams } from "next/navigation";
import SelectFilters from "@/components/home/SelectFilters";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

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
    const [selectedRegion, setSelectedRegion] = useState("kanto");
    const [selectedType, setSelectedType] = useState("all");

    const params = useSearchParams();
    const searchParams = params?.get("search");
    const typeParams = params?.get("type");
    const regionParams = params?.get("region");

    // async function fetchDataTwo() {
    //     async function fetchData() {
    //         const { data } = await axios.get(
    //             `/api/pokemon?region=kanto&type=all`
    //         );
    //         setDisplayedPokemon(data.data);
    //     }
    //     fetchData();
    // }
    useEffect(() => {
        if (searchParams) {
            setSelectedPokemon(searchParams as string);
        }
        if (regionParams && typeParams) {
            setSelectedRegion(typeParams as string);
            setSelectedType(regionParams as string);
        }
    }, [searchParams, typeParams, regionParams]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `/api/pokemon?region=${selectedRegion}&type=${selectedType}`
            );
            setDisplayedPokemon(data.data);

            setPage(1);
        }
        if (!searchParams && !typeParams && !regionParams) fetchData();
    }, [selectedRegion, selectedType, searchParams, typeParams, regionParams]);

    useEffect(() => {
        async function fetchDataOne() {
            if (selectedPokemon === "") {
                return console.log("no hay pokemon seleccionado");
            } else if (
                selectedPokemon === null &&
                !searchParams &&
                !typeParams &&
                !regionParams
            ) {
                const { data } = await axios.get(
                    `/api/pokemon?region=${selectedRegion}&type=${selectedType}`
                );
                console.log("aca");
                setDisplayedPokemon(data.data);
            } else {
                const { data } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.toLowerCase()}`
                );
                setDisplayedPokemon([{ ...data, key: 1 }]);
                setPage(1);
            }
        }
        fetchDataOne();
    }, [
        selectedPokemon,
        selectedRegion,
        selectedType,
        searchParams,
        typeParams,
        regionParams,
    ]);
    console.log(displayedPokemon);
    return (
        <div className="bg-black min-h-screen md:mx-40">
            <SearchBar
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
            />
            <SelectFilters
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                disabled={
                    selectedPokemon == "" || selectedPokemon == null
                        ? false
                        : true
                }
            />
            <Pagination
                page={page}
                setPage={setPage}
                pokemon={displayedPokemon}
            />

            <div className="grid grid-cols-1  md:grid-cols-2 gap-12  lg:grid-cols-4 gap-18 ">
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
