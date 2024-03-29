"use client";
import { typeImg, typeImgList } from "@/utils/dictionaries";
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Link,
    Skeleton,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CardSkeleton from "./CardSkeleton";
import Image from "next/image";
import { Suspense, useState } from "react";

interface CardPokemonProps {
    // key: // string | number;
    pokemon: any;
    selectedType?: string;
    selectedRegion?: string;
    selectedPokemon?: string;
    params?: boolean;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon, params }) => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {!pokemon ? (
                <CardSkeleton />
            ) : (
                <Card
                    shadow="md"
                    isHoverable
                    className=" min-h-fit min-w-fit  backdrop-blur-md bg-slate-900/40 hover:bg-slate-900/50 hover:scale-105  "
                    isPressable
                    onPress={() => {
                        router.push(
                            pokemon?.number
                                ? `/${pokemon.number}${
                                      params ? `?nav=${params}` : ""
                                  }`
                                : `/${pokemon.id}${
                                      params ? `?nav=${params}` : ""
                                  }`
                        );
                    }}
                >
                    <CardHeader className=" flex justify-center min-h-[20%] min-w-[100%]">
                        <Skeleton isLoaded={pokemon}>
                            <h2 className="text-slate-500 min-[380px]:text-[25px] min-[380px]:p-0 md:text-[30px] p-2  ">
                                {pokemon.number
                                    ? `#${pokemon.number} ` + pokemon.name
                                    : `#${pokemon.id} ` +
                                      pokemon.name?.charAt(0).toUpperCase() +
                                      pokemon.name?.slice(1)}
                            </h2>
                        </Skeleton>
                    </CardHeader>{" "}
                    <CardBody className="flex justify-center   min-h-fit min-w-max lg:max-h-[280px] lg:min-h-[218] lg: md:max-h-[400px]  md:min-h-[280px] overflow-visible p-2">
                        <div className="flex justify-center max-w-[100%] ">
                            {/* <Suspense
                                fallback={
                                    <Skeleton className="w-[220px] h-[220px]" />
                                }
                            > */}
                            {!loaded && (
                                <Skeleton className="w-[180px] h-[180px] rounded-lg sm:w-[260px] sm:h-[260px] sm:max-w-[260px] sm:max-h-[260px]" />
                            )}
                            <Image
                                src={
                                    pokemon.image ??
                                    pokemon.sprites?.other["official-artwork"]
                                        .front_default
                                }
                                alt={pokemon.name}
                                sizes="100%"
                                width={260}
                                height={260}
                                priority
                                className={`${
                                    (!loaded && "hidden") ||
                                    "max-w-[180px] max-h-[180px] sm:max-w-[260px] sm:max-h-[260px] "
                                }  `}
                                loading="eager"
                                onLoad={() => {
                                    setLoaded(true);
                                }}
                            />

                            {/* </Suspense> */}
                        </div>
                    </CardBody>
                    <CardFooter className="flex justify-center ">
                        {pokemon.number
                            ? pokemon.types?.map((type: { name: string }) => {
                                  return (
                                      <Avatar
                                          alt={type.name}
                                          key={type.name}
                                          src={typeImg[type.name]}
                                          isBordered
                                          color="default"
                                          className="my-4 mx-2"
                                          size="lg"
                                      />
                                  );
                              })
                            : pokemon.types?.map((t: any) => {
                                  return (
                                      <Avatar
                                          alt={t.type.name}
                                          key={t.type.name}
                                          src={typeImg[t.type.name]}
                                          isBordered
                                          color="default"
                                          className="my-4 mx-2"
                                          size="lg"
                                      />
                                  );
                              })}
                    </CardFooter>
                </Card>
            )}
        </>

        // </Link>
    );
};

export default CardPokemon;
