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

    return (
        // <Link
        //     href={
        //         pokemon?.number
        //             ? `/${pokemon.number}/?search=${selectedPokemon}&type=${selectedType}&region=${selectedRegion}`
        //             : `/${pokemon.id}/?search=${selectedPokemon}&type=${selectedType}&region=${selectedRegion}`
        //     }
        // >
        //transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300

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
                            <h2 className="text-slate-500 text-[30px] md:text-[30px]  ">
                                {pokemon.number
                                    ? `#${pokemon.number} ` + pokemon.name
                                    : `#${pokemon.id} ` +
                                      pokemon.name?.charAt(0).toUpperCase() +
                                      pokemon.name?.slice(1)}
                            </h2>
                        </Skeleton>
                    </CardHeader>{" "}
                    <CardBody className="flex justify-center   min-h-fit min-w-max lg:max-h-[280px] lg:min-h-[218] lg: md:max-h-[400px] md:min-h-[280px] overflow-visible p-2">
                        <div className="flex justify-center max-w-[100%] ">
                            <Image
                                src={
                                    pokemon.image ??
                                    pokemon.sprites?.other["official-artwork"]
                                        .front_default
                                }
                                alt={pokemon.name}
                                sizes="100%"
                                width={220}
                                height={220}
                                loading="eager"
                            />
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
