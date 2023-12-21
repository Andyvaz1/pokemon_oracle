import { typeImg, typeImgList } from "@/utils/dictionaries";
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Skeleton,
} from "@nextui-org/react";
import { Pokemon } from "@prisma/client";

interface CardPokemonProps {
    // key: // string | number;
    pokemon: any;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
    return (
        <Card
            shadow="md"
            isHoverable
            className="backdrop-blur-md bg-slate-900/40 hover:bg-slate-900/60"
            isPressable
            onPress={() => console.log(pokemon.types)}
        >
            <CardHeader className=" flex justify-center">
                <Skeleton isLoaded={pokemon}>
                    <h2 className="text-white text-3xl">{pokemon.name}</h2>
                </Skeleton>
            </CardHeader>
            <CardBody className=" min-h-[340px] lg:min-h-[240px]  md:min-h-auto overflow-visible p-2">
                <Skeleton isLoaded={pokemon}>
                    <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        radius="lg"
                        width="100%"
                    />
                </Skeleton>
            </CardBody>
            <CardFooter className="flex justify-center">
                {pokemon.types.map((type: { name: string }) => {
                    return (
                        <Avatar
                            alt={type.name}
                            key={type.name}
                            src={typeImg[type.name]}
                            className="mx-2 w-20 h-20 text-large"
                        />
                    );
                })}
            </CardFooter>
        </Card>
    );
};

export default CardPokemon;
