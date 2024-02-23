"use client";
import Loader from "@/components/loader";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import HorizontalStepper from "@/components/create/stepper";
import ImageUploader from "@/components/create/imageUpload";
import { Form } from "@/types/types";

const CreatePage: React.FC = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn(undefined, { callbackUrl: "/create" });
        },
    });

    const [activeStep, setActiveStep] = useState(0);
    const [imgOption, setImgOption] = useState("none");
    const [formData, setFormData] = useState<Form>({
        user: session?.user?.email,
        name: "",
        image: "",
        stats: { attack: 0, defense: 0, speed: 0, hp: 0 },
    });

    const handleSubmit = async (formData: Form) => {
        console.log(formData);
    };

    const steps = [
        {
            title: "Image",
            content: (
                <ImageUploader
                    imgOption={imgOption}
                    setImgOption={setImgOption}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    steps={3}
                    formData={formData}
                    setFormData={setFormData}
                />
            ),
        },
        { title: "Stats", content: <h2>Stats</h2> },
        { title: "Confirm", content: <h2>Confirmation</h2> },
    ];

    if (status === "loading") {
        return <Loader />;
    }
    return (
        <div className="text-center flex flex-col  h-[calc(100vh-64px)]">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-500 ">
                Create a Pókemon!
            </p>
            <HorizontalStepper
                steps={steps}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                formData={formData}
                handleSubmit={handleSubmit}
                imgOption={imgOption}
                setImgOption={setImgOption}
                setFormData={setFormData}
            />
        </div>
    );
};

export default CreatePage;
