"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DetailCard from "@/components/card/detailCard";
import { DetailedPokemon } from "@/types/types";
import axios from "axios";

export default function PokemonDetail({
    params,
}: {
    params: {
        pokemon_id: number;
        type: string;
        region: string;
        search: string;
    };
}) {
    const router = useRouter();
    const { pokemon_id } = params;
    const urlParams = useSearchParams();
    const navParams = urlParams?.get("nav");

    const [pokemon, setPokemon] = useState<DetailedPokemon | null>(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`/api/pokemon/${pokemon_id}`);
            setPokemon(data.data);
        }
        fetchData();
        return () => setPokemon(null);
    }, [pokemon_id]);

    const handleBack = () => {
        router.push(`/`);
    };

    return (
        <>
            <DetailCard pokemon={pokemon} navParams={navParams} />
        </>
    );
}
