"use client";
import {
    Navbar as NextUiNavBar,
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

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <NextUiNavBar
            isBordered
            maxWidth="full"
            className="bg-black border-purple-600"
        >
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
                            height={50}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Link className="text-yellow-300" href="#">
                            About
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarItem>
                    <Button
                        as={Link}
                        color="secondary"
                        variant="solid"
                        href="#"
                    >
                        Login
                        <FcGoogle size={25} />
                    </Button>
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
        </NextUiNavBar>
    );
};

export default Navbar;
