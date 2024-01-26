import { typeImg, typeImgList } from "@/utils/dictionaries";
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Link,
    Skeleton,
} from "@nextui-org/react";
import { Pokemon } from "@prisma/client";

interface CardPokemonProps {
    // key: // string | number;
    pokemon: any;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
    return (
        <Link href={pokemon?.number ? `/${pokemon.number}` : `/${pokemon.id}`}>
            <Card
                shadow="md"
                isHoverable
                className="backdrop-blur-md bg-slate-900/40 hover:bg-slate-900/60   "
                isPressable
                onPress={() => console.log(pokemon.types)}
            >
                <CardHeader className=" flex justify-center min-h-fit">
                    <Skeleton isLoaded={pokemon}>
                        <h2 className="text-slate-500 text-3xl ">
                            {pokemon.number
                                ? pokemon.name
                                : pokemon.name.charAt(0).toUpperCase() +
                                  pokemon.name.slice(1)}
                        </h2>
                    </Skeleton>
                </CardHeader>
                <CardBody className="  max-h-[160px]  lg:max-h-[280px]  md:max-h-[280px] overflow-visible p-2">
                    <Skeleton
                        isLoaded={
                            pokemon.image ??
                            pokemon.sprites.other["official-artwork"]
                                .front_default
                        }
                        className="rounded-lg h-[280px] min-w-[240px]"
                    >
                        <Image
                            src={
                                pokemon.image ??
                                pokemon.sprites.other["official-artwork"]
                                    .front_default
                            }
                            alt={pokemon.name}
                            radius="lg"
                            width="100%"
                        />
                    </Skeleton>
                </CardBody>
                <CardFooter className="flex justify-center">
                    {pokemon.number
                        ? pokemon.types.map((type: { name: string }) => {
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
                        : pokemon.types.map((t: any) => {
                              return (
                                  <Avatar
                                      alt={t.type.name}
                                      key={t.type.name}
                                      src={typeImg[t.type.name]}
                                      isBordered
                                      color="default"
                                      className="mx-2 w-20 h-20 text-large"
                                  />
                              );
                          })}
                </CardFooter>
            </Card>
        </Link>
    );
};

export default CardPokemon;
