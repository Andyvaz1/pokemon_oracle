"use client";
import Loader from "@/components/loader";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";

const CreatePage: React.FC = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn(undefined, { callbackUrl: "/create" });
        },
    });

    if (status === "loading") {
        return <Loader />;
    }
    return (
        <div className="flex justify-center">
            <h1>Create Page</h1>
        </div>
    );
};

export default CreatePage;
