import { Button, Card, CardBody, CardFooter, image } from "@nextui-org/react";
import React, { Dispatch, useState } from "react";
import { FiUpload } from "react-icons/fi";
import ImageInput from "./imageImput";
import { Form } from "@/types/types";

interface ImageUploaderProps {
    imgOption: string;
    setImgOption: Dispatch<string>;
    activeStep: number;
    setActiveStep: any;
    steps: number;
    formData: Form;
    setFormData: Dispatch<Form>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    imgOption,
    setImgOption,
    activeStep,
    setActiveStep,
    steps,
    formData,
    setFormData,
}) => {
    const handleNext = () => {
        setActiveStep((prevStep: number) => prevStep + 1);
    };
    return (
        <div className="text-center flex flex-col my-0  justify-center  ">
            {imgOption === "none" ? (
                <>
                    <p className="font-semibold items-center text-xl sm:text-xl md:text-2xl text-slate-500 m-4">
                        Choose an option:
                    </p>
                    <div className="flex flex-col items-center sm:flex-row justify-center gap-12 text-lg ">
                        <Card
                            radius="lg"
                            className="font-semibold   text-slate-500 border-2 font-semibold text-slate-500 hover:text-white border-slate-900 rounded-lg  bg-slate-900/40  transition duration-700 
            hover:bg-purple-900 
            hover:duration-700 ease-in-out hover:scale-105  
            bg-cover bg-center   w-[80vw] h-[30vh] sm:w-[30vw] sm:h-[20vh] md:w-[30vw] md:h-[30vh]"
                            isPressable
                            onPress={() => setImgOption("upload")}
                        >
                            <CardBody>
                                <div className="text-center h-[30vh] sm:h-[20vh] flex flex-col justify-center items-center   ">
                                    <h1 className="sm:text-3xl md:text-4xl">
                                        Upload Image
                                    </h1>
                                </div>
                                <FiUpload
                                    className="place-self-center mb-2 "
                                    size={50}
                                />
                            </CardBody>
                        </Card>
                        <p className="font-semibold  text-xl sm:text-xl md:text-2xl text-slate-500">
                            Or
                        </p>
                        <Card
                            className="border-2 font-semibold border-slate-900 rounded-lg  bg-slate-900/40 
                    text-slate-500 hover:text-white
                transition duration-700
            hover:bg-blend-darken  hover:duration-700 ease-in-out hover:scale-105  
             bg-cover bg-center hover:bg-[url('https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg')] w-[80vw] h-[30vh] sm:w-[35vw] sm:w-[30vw] sm:h-[20vh] md:w-[30vw] md:h-[30vh]"
                            radius="lg"
                            isPressable
                            onPress={() => setImgOption("ai")}
                        >
                            <CardBody>
                                <div className="text-center h-[30vh]  sm:h-[20vh] flex flex-col  justify-center items-center ">
                                    <h1 className="sm:text-3xl md:text-4xl">
                                        Create with Ai
                                    </h1>
                                </div>
                                <p className="mb-2 place-self-center ">
                                    5/5 available
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </>
            ) : imgOption === "upload" ? (
                <ImageInput formData={formData} setFormData={setFormData} />
            ) : (
                <h2>Ai form</h2>
            )}
        </div>
    );
};

export default ImageUploader;
