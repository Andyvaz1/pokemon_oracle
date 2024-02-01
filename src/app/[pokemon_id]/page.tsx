"use client";
import { DetailedPokemon } from "@/types/types";
import { typeImg } from "@/utils/dictionaries";
import { Avatar, Button, Image, Skeleton } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiBroadsword } from "react-icons/gi";
import { GrShield } from "react-icons/gr";
import { GiHealthNormal } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";

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
    const searchParams = urlParams?.get("search");
    const typeParams = urlParams?.get("type");
    const regionParams = urlParams?.get("region");
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
        <div className="grid place-content-center align-items-center  min-h-[90vh]">
            <Button
                className="position-absolute top-0 left-0 "
                onClick={() => {
                    router.push(
                        `/?region=${regionParams}&type=${typeParams}` +
                            `${searchParams ? `&search=${searchParams}` : " "}`
                    );
                }}
            ></Button>
            <Button
                className="position-absolute top-0 left-0 "
                onClick={() => {
                    router.back();
                }}
            ></Button>

            <div className="grid place-content-center align-items-center  ">
                <Skeleton
                    isLoaded={pokemon !== null}
                    className=" m-6 h-[60px] rounded-lg font-thin text-xl text-slate-500 "
                >
                    <h1 className="flex justify-center ">
                        #{pokemon?.number} - {pokemon?.name}
                    </h1>
                </Skeleton>

                <div className="flex m-4 h-[60px]  justify-center ">
                    {pokemon !== null ? (
                        pokemon?.types.map((type: { name: string }) => {
                            return (
                                <Avatar
                                    alt={type.name}
                                    key={type.name}
                                    src={typeImg[type.name]}
                                    isBordered
                                    color="default"
                                    className="mx-2 w-20 h-20 text-large"
                                />
                            );
                        })
                    ) : (
                        <Skeleton
                            isLoaded={pokemon !== null}
                            className="rounded-full w-20 h-20  "
                        />
                    )}
                </div>
                <div className="flex justify-center align-items-center">
                    <Skeleton
                        isLoaded={pokemon !== null}
                        className="min-w-[380px] min-h-[380px] m-[20px] rounded-lg"
                    >
                        <div className="flex justify-center">
                            <Image
                                className="border-red-600 border-6 "
                                src={pokemon?.image}
                                alt={pokemon?.name}
                                radius="lg"
                                width="400"
                            />
                        </div>
                    </Skeleton>
                    <div className="grid place-content-center align-items-center border-yellow-600 border-6 text-3xl  max-h-[50px] mt-[25%]">
                        <Skeleton
                            isLoaded={pokemon !== null}
                            className="rounded-full h-min mx-2 my-4 "
                        >
                            <div className="flex justify-start text-green-500 items-center">
                                <GiHealthNormal />
                                <h2 className="mx-2  rounded-none ">
                                    Hp {pokemon?.hp}
                                </h2>
                            </div>
                        </Skeleton>
                        <Skeleton
                            isLoaded={pokemon !== null}
                            className="rounded-full h-min mx-2 my-4"
                        >
                            <div className="flex justify-start  text-red-500 items-center">
                                <GiBroadsword />
                                <h2 className="mx-2 rounded-none">
                                    Attack {pokemon?.attack}
                                </h2>
                            </div>
                        </Skeleton>
                        <Skeleton
                            isLoaded={pokemon !== null}
                            className="rounded-full h-min mx-2 my-4"
                        >
                            <div className="flex justify-start  text-blue-500 items-center">
                                <GrShield />
                                <h2 className="mx-2">
                                    Defence {pokemon?.defence}
                                </h2>
                            </div>
                        </Skeleton>
                        <Skeleton
                            isLoaded={pokemon !== null}
                            className="rounded-full h-min mx-2 my-4"
                        >
                            <div className="flex justify-start  text-yellow-500 items-center">
                                <IoSpeedometerOutline />
                                <h2 className="mx-2 ">
                                    Speed {pokemon?.speed}
                                </h2>
                            </div>
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}
