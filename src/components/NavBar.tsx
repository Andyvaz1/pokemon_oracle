"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { data: session } = useSession();

    console.log(session);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar maxWidth="full">
            <NavbarContent justify="center" className="sm:justify-start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-slate-200"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src="/pokeOracleLogo2.png"
                            alt="Next.js Logo"
                            width={300}
                            height={100}
                            priority
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    {session?.user ? (
                        <NavbarItem>
                            <span className="text-color-purple">
                                {session?.user?.email}
                            </span>
                        </NavbarItem>
                    ) : (
                        <></>
                    )}
                    <NavbarItem>
                        <Link color="secondary" href="/about">
                            About
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarItem>
                    {session?.user ? (
                        <Button
                            as={Link}
                            color="secondary"
                            variant="solid"
                            onPress={() => signOut()}
                        >
                            Log Out
                            <MdLogout size={25} />
                        </Button>
                    ) : (
                        <Button
                            as={Link}
                            color="secondary"
                            variant="solid"
                            onPress={() => signIn()}
                        >
                            Login
                            <FcGoogle size={25} />
                        </Button>
                    )}
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
