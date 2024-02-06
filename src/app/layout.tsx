import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pokemon Oracle",
    description: "Search and create your own Pokemon with AI!",
    category: "Pokemon AI",
    icons: {
        icon: "icon.png",
    },
};

// consulta().catch(e=>{
//   console.error(e.mesage)
// })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark bg-black  text-white min-h-screen font-sans antialiased">
                <Providers>
                    <Suspense fallback={<div>Loading...</div>}>
                        <NavBar />
                    </Suspense>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
