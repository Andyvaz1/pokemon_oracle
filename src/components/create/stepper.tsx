import { Form } from "@/types/types";
import { Button } from "@nextui-org/react";
import React, { Dispatch, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

type Step = {
    title: string;
    content: React.ReactNode;
};

type HorizontalStepperProps = {
    steps: Step[];
    activeStep: number;
    setActiveStep: any;
    formData: Form;
    setFormData: Dispatch<Form>;
    handleSubmit: (formData: Form) => void;
    imgOption: string;
    setImgOption: Dispatch<string>;
};

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
    steps,
    activeStep,
    setActiveStep,
    formData,
    handleSubmit,
    imgOption,
    setImgOption,
    setFormData,
}) => {
    const handleNext = () => {
        console.log(formData[steps[activeStep].title]);
        setActiveStep((prevStep: number) => prevStep + 1);
    };

    const handlePrev = () => {
        setActiveStep((prevStep: number) => prevStep - 1);
    };

    const handleSetStep = () => {
        setActiveStep((prevStep: number) => prevStep + 1);
    };

    return (
        <div className="flex flex-col mx-10 justify-center items-center">
            <div className="flex justify-center mt-12 items-center ">
                {steps.map((step, index) => (
                    <div key={index} className="flex justify-center ">
                        <div className="flex flex-col justify-center items-center">
                            <div
                                key={index}
                                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-purple-500 ${
                                    index === activeStep
                                        ? "bg-purple-500 text-white"
                                        : index < activeStep
                                        ? "bg-green-500 text-white border-none"
                                        : "bg-slate-900"
                                }`}
                            >
                                {index < activeStep ? (
                                    <MdOutlineDone size={20} />
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <p className="text-sm font-semibold text-slate-500">
                                {" "}
                                {step.title}
                            </p>
                        </div>
                        {index !== steps.length - 1 ? (
                            <div className="flex justify-center items-center mx-2 mb-4">
                                <div
                                    className={` ${
                                        index === activeStep
                                            ? "bg-gray-500 text-white"
                                            : index < activeStep
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-500"
                                    } flex-grow h-1 sm:w-20 w-10 `}
                                ></div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <div className="mt-2">{steps[activeStep].content}</div>
            </div>

            <div
                className={`flex  mt-4 mx-16  justify-between gap-[20vw] sm:gap-[40vw]`}
            >
                {activeStep !== 0 ? (
                    <>
                        <Button
                            className={`px-4 mx-2 py-2 text-sm font-medium  rounded-md `}
                            color="secondary"
                            onClick={handlePrev}
                            size="md"
                        >
                            Previous
                        </Button>
                        {steps.length - 1 === activeStep ? (
                            <Button
                                className="px-8 py-2 mx-2  text-sm font-medium text-white bg-purple-500 rounded-md "
                                onClick={() => handleSubmit(formData)}
                                color="secondary"
                                size="md"
                                isDisabled={activeStep === steps.length - 1}
                            >
                                Create!
                            </Button>
                        ) : (
                            <Button
                                className="px-8 py-2 mx-2  text-sm font-medium text-white bg-purple-500 rounded-md "
                                onClick={handleNext}
                                color="secondary"
                                size="md"
                                isDisabled={
                                    !formData[
                                        steps[activeStep].title.toLowerCase()
                                    ]
                                        ? false
                                        : true
                                }
                            >
                                Next
                            </Button>
                        )}
                    </>
                ) : imgOption === "none" ? (
                    <></>
                ) : (
                    <>
                        <Button
                            className={`px-8 mx-2 py-2 text-sm font-medium  rounded-md `}
                            color="secondary"
                            onClick={() => {
                                setImgOption("none");
                                setFormData({ ...formData, image: "" });
                                console.log(formData.stats);
                            }}
                            size="md"
                        >
                            Back
                        </Button>
                        <Button
                            className="px-8 py-2 mx-2  text-sm font-medium text-white bg-purple-500 rounded-md "
                            onClick={handleNext}
                            color="secondary"
                            size="md"
                            isDisabled={
                                !formData[steps[activeStep].title.toLowerCase()]
                                    ? true
                                    : false
                            }
                        >
                            Next
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default HorizontalStepper;
