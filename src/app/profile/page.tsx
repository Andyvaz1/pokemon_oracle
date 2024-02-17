"use client";

import Loader from "@/components/loader";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

const ProfilePage: React.FC = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });

    if (status === "loading") {
        return <Loader />;
    }
    return (
        <div className="flex justify-center">
            <h1>Hello {session?.user?.name ?? ""} </h1>
        </div>
    );
};

export default ProfilePage;
