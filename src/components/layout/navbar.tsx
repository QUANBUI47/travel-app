"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { ROUTES } from "@/constants/routes";

const navItems = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Popular Destinations", href: ROUTES.POPULAR_DESTINATIONS },
  { label: "Our Packages", href: ROUTES.OUR_PACKAGES },
  { label: "Help", href: ROUTES.HELP },
];

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const isHome = pathname === ROUTES.HOME;

  return (
    <HeroUINavbar
      className={clsx(
        "transition-all duration-300 fixed top-0 left-0 right-0 z-50",
        isHome
          ? "bg-gradient-to-t from-[#041534]/0 to-[#041534]"
          : "bg-white border-b border-[#E6E6E6]"
      )}
      height={90}
      isBlurred={false}
      maxWidth="xl"
      position="static"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit shrink-0 min-w-[140px]">
          <NextLink
            className="flex justify-start items-center gap-3 shrink-0"
            href={ROUTES.HOME}
          >
            <img
              src={isHome ? "/images/tour-guide.svg" : "/images/tour-guide2.svg"}
              alt="Tour Guide"
              width={180}
              height={22}
              className="object-contain"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="flex gap-3 justify-start ml-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "px-3 py-2 rounded-md text-[15px] font-semibold transition-all duration-200",
                    isHome
                      ? "text-white hover:text-white/80 hover:bg-white/15"
                      : "text-[#495560] hover:text-[#495560]/80 hover:bg-white/15",
                    isActive && "text-primary bg-primary/10",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
          <Button
            className="text-black font-bold text-base bg-[#FFDA32]"
            href={ROUTES.LOGIN}
          >
            Login
          </Button>
        </ul>
      </NavbarContent>
    </HeroUINavbar>
  );
};
