import { DetailedPokemon } from "@/types/types";
import { typeImg } from "@/utils/dictionaries";
import { Avatar, Button, Image, Skeleton } from "@nextui-org/react";
import { GiBroadsword } from "react-icons/gi";
import { GrShield } from "react-icons/gr";
import { GiHealthNormal } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { capitalizeFirstLetter } from "@/utils/filters";

export default function DetailCard({
    pokemon,
    navParams,
}: {
    pokemon: DetailedPokemon | null;
    navParams: string | null | undefined;
}) {
    const router = useRouter();

    return (
        <div className="min-h-max border-2 border-slate-900 rounded-lg m-6 backdrop-blur-md bg-slate-900/40 ">
            <div className="flex flex-row justify-stretch items-center ">
                <div className="flex-1 basis-1/4 flex justify-center">
                    <Button
                        color="secondary"
                        size="lg"
                        className=" h-[30px]  mx-2 "
                        onClick={() => {
                            if (navParams) {
                                router.back();
                            } else {
                                router.push(`/`);
                            }
                        }}
                        isIconOnly
                    >
                        <IoArrowBack className="text-2xl sm:text-3xl" />
                    </Button>
                </div>
                <div className="  text-strart  min-w-fit basis-1/2 flex justify-center">
                    <Skeleton
                        isLoaded={pokemon !== null}
                        className="flex justify-center text-nowrap mx-2 my-6 min-h-[30px] min-w-[60%] rounded-lg font-thin "
                    >
                        <p className="max-[300px]:text-[12px] max-[390px]:text-[14px] text-xl xl:text-4xl">
                            #{pokemon?.number} - {pokemon?.name}
                        </p>
                    </Skeleton>
                </div>
                <div className="shrink basis-1/4 h-[30px]">
                    <span></span>
                </div>
            </div>
            <div className="flex flex-row  justify-center m-2 ">
                {pokemon !== null ? (
                    pokemon?.types.map((type: { name: string }) => {
                        return (
                            <div
                                key={type.name}
                                className="flex flex-col items-center "
                            >
                                <Avatar
                                    size="md"
                                    alt={type.name}
                                    key={type.name}
                                    src={typeImg[type.name]}
                                    isBordered
                                    color="default"
                                    className="mx-4  text-large sm:mx-6 sm:h-14 sm:w-14"
                                />
                                <span className="max-[300px]:text-[10px] max-[390px]:text-[12px] text-md xl:text-2xl my-2">
                                    {capitalizeFirstLetter(type.name)}
                                </span>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center ">
                        <Skeleton className="rounded-full mx-4  text-large h-[42px] w-[42px] sm:mx-6 sm:h-[58px] sm:w-[58px]" />
                        <Skeleton
                            key="loaderType"
                            className="  my-2 rounded-md  max-[300px]:h-[10px] max-[390px]:h-[12px] h-[16px] w-[60px] xl:h-[24px]"
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:align-items-center">
                <Skeleton
                    isLoaded={pokemon !== null}
                    className="min-w-[220px] min-h-[220px] sm:min-h-[320px] m-[20px] rounded-lg"
                >
                    <div className="flex justify-center">
                        <Image
                            className="border-red-600 border-6 "
                            src={pokemon?.image}
                            alt={pokemon?.name}
                            radius="lg"
                            width="320"
                            height="320"
                        />
                    </div>
                </Skeleton>
                <div className="grid place-content-center align-items-center border-yellow-600 border-6 text-2xl sm:text-3xl">
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
                            <h2 className="mx-2">Defence {pokemon?.defence}</h2>
                        </div>
                    </Skeleton>
                    <Skeleton
                        isLoaded={pokemon !== null}
                        className="rounded-full h-min mx-2 my-4"
                    >
                        <div className="flex justify-start  text-yellow-500 items-center">
                            <IoSpeedometerOutline />
                            <h2 className="mx-2 ">Speed {pokemon?.speed}</h2>
                        </div>
                    </Skeleton>
                </div>
            </div>
        </div>
    );
}
