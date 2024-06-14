import { Form } from "@/types/types";
import { typeColors, typeImg } from "@/utils/dictionaries";
import { capitalizeFirstLetter } from "@/utils/filters";
import { Avatar } from "@nextui-org/react";

import Image from "next/image";

import { GiBroadsword, GiHealthNormal } from "react-icons/gi";
import { GrShield } from "react-icons/gr";
import { IoSpeedometerOutline } from "react-icons/io5";

interface CardConfirmProps {
    // key: // string | number;
    formData: Form;
}

const CardConfirm: React.FC<CardConfirmProps> = ({ formData }) => {
    return (
        <div className="relative ">
            <div
                style={{
                    background: `linear-gradient(90deg, ${
                        typeColors[`${formData?.types[0]}`]
                    } 25%,  ${
                        // formData?.types.length === 1
                        //     ? typeColors[`${formData?.types[0]}`]
                        //     :
                        typeColors.transparent
                    } 50%, ${
                        formData?.types.length === 1
                            ? typeColors[`${formData?.types[0]}`]
                            : typeColors[`${formData?.types[1]}`]
                    } 75% )`,
                }}
                className={`absolute -inset-1 rounded-3xl  `}
            ></div>
            <div
                className={`relative flex border border-slate-500 text-slate-400 rounded-3xl bg-slate-900 h-fit w-fit min-w-[70vw] sm:min-w-[50vw] justify-center `}
            >
                <div className="relative">
                    <p className="my-2 text-lg md:text-4xl">{formData.name}</p>
                    <div className="flex justify-center gap-2 md:gap-8">
                        {formData.types.map((type: string) => {
                            return (
                                <div key={type} className="flex flex-col">
                                    <Avatar
                                        key={type}
                                        src={typeImg[type]}
                                        isBordered
                                        color="default"
                                        className="my-4 mx-2 "
                                        size="md"
                                    />
                                    <p>{capitalizeFirstLetter(type)}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col md:flex-row m-4 justify-center items-center  md:grid md:grid-cols-2 md:m-8 ">
                        <div className="flex justify-center">
                            <Image
                                alt={formData.name}
                                src={formData.image}
                                width={200}
                                height={200}
                                className="min-h-[200px] min-w-[200px] sm:min-h-[250px] sm:min-w-[250px] md:min-h-[300px] md:min-w-[300px]  rounded-md"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2 m-2 font-semibold text-[14px] sm:text-lg md:flex md:flex-col md:text-6xl  flex  ">
                            <div className="flex justify-start sm:gap-2 text-green-500 items-center mb-2">
                                <GiHealthNormal className="mr-1" />
                                <p>{` Hp: ${formData.hp}`}</p>
                            </div>

                            <div className="flex justify-start   sm:gap-2 text-red-500 items-center mb-2">
                                <GiBroadsword className="mr-1" />
                                <p>{` Attack: ${formData.attack}`}</p>
                            </div>
                            <div className="flex justify-start   sm:gap-2 text-blue-500 items-center mb-2">
                                <GrShield className="mr-1" />
                                <p>{`Def: ${formData.defence}`}</p>
                            </div>
                            <div className="flex justify-start   sm:gap-2 text-yellow-500 items-center mb-2">
                                <IoSpeedometerOutline className="mr-1" />
                                <p>{`Speed: ${formData.hp}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardConfirm;
