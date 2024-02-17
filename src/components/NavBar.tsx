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
    Avatar,
    User,
    Spinner,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    user,
    DropdownSection,
} from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { data: session, status } = useSession();

    const router = useRouter();

    console.log(session);
    const UnauthMenuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Log In", href: "/api/auth/signin" },
    ];

    const authMenuItems = [
        { name: "Home", href: "/" },
        { name: "Profile", href: "/profile" },
        { name: "Create Pokemon", href: "/create" },
        { name: "About", href: "/about" },
        { name: "Log Out", href: "/api/auth/signout" },
    ];

    return (
        <Navbar maxWidth="full" shouldHideOnScroll isMenuOpen={isMenuOpen}>
            <NavbarContent justify="center" className="sm:justify-start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-slate-200"
                    onPress={() => setIsMenuOpen(!isMenuOpen)}
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
                    <NavbarItem>
                        <Link className="mx-2" color="secondary" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="mx-2" color="secondary" href="/about">
                            About
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {status === "loading" ? (
                    <Spinner
                        className="mx-6"
                        key="authSpin"
                        color="secondary"
                        size="lg"
                    />
                ) : (
                    <NavbarItem className="md:mx-6">
                        {session?.user ? (
                            <Dropdown radius="sm" backdrop="opaque">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name={session?.user?.name ?? "User"}
                                        size="md"
                                        src={session?.user?.image ?? ""}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Custom item styles"
                                    className="p-3"
                                    color="secondary"
                                    variant="bordered"
                                    itemClasses={{
                                        base: [
                                            "rounded-md",
                                            "text-default-500",
                                            "transition-opacity",
                                            "data-[hover=true]:text-foreground",
                                            "data-[hover=true]:bg-default-100",
                                            "dark:data-[hover=true]:bg-default-50",
                                            "data-[selectable=true]:focus:bg-default-50",
                                            "data-[pressed=true]:opacity-70",
                                            "data-[focus-visible=true]:ring-default-500",
                                        ],
                                    }}
                                >
                                    <DropdownSection
                                        aria-label="Profile & Actions"
                                        showDivider
                                    >
                                        <DropdownItem
                                            isDisabled
                                            isReadOnly
                                            key="profile"
                                            className="h-14 gap-2 opacity-100 pointer-cursor"
                                        >
                                            <User
                                                name={session.user.name}
                                                description={session.user.email}
                                                classNames={{
                                                    name: "text-default-600",
                                                    description:
                                                        "text-default-500",
                                                }}
                                                avatarProps={{
                                                    size: "sm",
                                                    src:
                                                        session.user.image ??
                                                        "",
                                                }}
                                            />
                                        </DropdownItem>
                                        <DropdownItem
                                            as={Link}
                                            href="/profile"
                                            key="profile"
                                        >
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem
                                            as={Link}
                                            href="/create"
                                            key="create"
                                        >
                                            Create Pokemon
                                        </DropdownItem>
                                    </DropdownSection>

                                    <DropdownSection aria-label="Help & Feedback">
                                        <DropdownItem key="help_and_feedback">
                                            Help & Feedback
                                        </DropdownItem>
                                        <DropdownItem
                                            key="help_and_feedback"
                                            href="/about"
                                        >
                                            About Pokemon Oracle
                                        </DropdownItem>
                                        <DropdownItem
                                            onPress={() => {
                                                signOut();
                                            }}
                                            key="logout"
                                            className="text-red-500"
                                        >
                                            Log Out
                                        </DropdownItem>
                                    </DropdownSection>
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Button
                                className=" text-purple-500 hover:text-white "
                                color="secondary"
                                variant="ghost"
                                onPress={() =>
                                    signIn(undefined, {
                                        callbackUrl: window.location.href,
                                    })
                                }
                                endContent={<FcGoogle size={20} />}
                            >
                                Log In
                            </Button>
                        )}
                    </NavbarItem>
                )}
            </NavbarContent>
            <NavbarMenu>
                {session
                    ? authMenuItems.map((item, index) => (
                          <NavbarMenuItem
                              key={`${item.name}-${index}`}
                              onClick={() => setIsMenuOpen(false)}
                          >
                              <Link
                                  color={
                                      index === 5
                                          ? "primary"
                                          : index === authMenuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                  }
                                  className="w-full"
                                  href={item.href}
                                  size="lg"
                                  onPress={() => {
                                      router.push(item.href);
                                      setIsMenuOpen(false);
                                  }}
                              >
                                  {item.name}
                              </Link>
                          </NavbarMenuItem>
                      ))
                    : UnauthMenuItems.map((item, index) => (
                          <NavbarMenuItem key={`${item.name}-${index}`}>
                              <Link
                                  onPress={() => {
                                      router.push(item.href);
                                      setIsMenuOpen(false);
                                  }}
                                  color={
                                      item.name === "Log In"
                                          ? "secondary"
                                          : "foreground"
                                  }
                                  className="w-full"
                                  href={item.href}
                                  size="lg"
                              >
                                  {item.name}
                              </Link>
                          </NavbarMenuItem>
                      ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
