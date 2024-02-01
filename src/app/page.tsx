"use client";

import { use, useEffect, useState } from "react";
import SearchBar from "@/components/home/SearchBar";
import axios from "axios";
import CardPokemon from "@/components/card/CardPokemon";

import Pagination from "@/components/home/Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import SelectFilters from "@/components/home/SelectFilters";

import sekeletons from "@/components/skeletons";
import path from "path";

interface Pokesolo {
    name: String;
    image: String;
    types: String[];
}

export default function Home() {
    // URL search params
    const params = useSearchParams();
    const searchParams = params?.get("search");
    const typeParams = params?.get("type");
    const regionParams = params?.get("region");
    const pageParams = params?.get("page");

    // State declaration

    const [displayedPokemon, setDisplayedPokemon] = useState<Pokesolo[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState(searchParams ?? "");
    const [selectedRegion, setSelectedRegion] = useState(
        regionParams ?? "kanto"
    );
    const [selectedType, setSelectedType] = useState(typeParams ?? "all");
    const [page, setPage] = useState(pageParams ? parseInt(pageParams) : 1);

    // Hooks
    useEffect(() => {
        setSelectedPokemon(searchParams || "");
        setSelectedRegion(regionParams || "kanto");
        setSelectedType(typeParams || "all");
        setPage(page || 1);
    }, [searchParams, regionParams, typeParams, page]);

    // useEffect(() => {
    //     if (searchParams) {
    //         setSelectedPokemon(searchParams as string);
    //     } else {
    //         setSelectedPokemon("");
    //     }
    // }, [searchParams]);

    useEffect(() => {
        async function fetchDataOne() {
            if (!searchParams || searchParams === "undefined") {
                const { data } = await axios.get(
                    `/api/pokemon?region=${selectedRegion}&type=${selectedType}`
                );

                setDisplayedPokemon(data.data);
                setPage(pageParams ? parseInt(pageParams) : 1);
                console.log(
                    `Busca todos los pokemon region : ${selectedRegion} type: ${selectedType}`
                );
            }
            if (selectedPokemon.length > 0 && selectedPokemon != "undefined") {
                const { data } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.toLowerCase()}`
                );
                setDisplayedPokemon([{ ...data, key: 1 }]);
                console.log(`Busca 1 pokemon : ${selectedPokemon}`);
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
        pageParams,
        params,
        page,
    ]);

    // Logs
    console.log(
        " Pokemon" + selectedPokemon,
        " region:" + selectedRegion,
        " type: " + selectedType,
        "page:" + page
    );

    return (
        <div className="bg-black min-h-screen md:mx-40">
            <SearchBar
                selectedType={selectedType}
                selectedRegion={selectedRegion}
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
                pageParams={pageParams}
                page={page}
            />
            <SelectFilters
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                setPage={setPage}
                disabled={
                    selectedPokemon?.length > 0 && selectedPokemon != null
                        ? true
                        : false
                }
            />
            <Pagination
                page={page}
                setPage={setPage}
                pokemon={displayedPokemon}
                selectedRegion={selectedRegion}
                selectedType={selectedType}
                setDisplayedPokemon={setDisplayedPokemon}
                pageParams={pageParams}
            />

            <div className="grid grid-cols-1  md:grid-cols-2 gap-12  lg:grid-cols-4 gap-18 ">
                {displayedPokemon?.length !== 0
                    ? displayedPokemon
                          ?.map((pokemon: any) => {
                              return (
                                  <CardPokemon
                                      key={pokemon?.name ?? 1}
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
                selectedRegion={selectedRegion}
                selectedType={selectedType}
                setDisplayedPokemon={setDisplayedPokemon}
            />
        </div>
    );
}
