"use client";
import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-removeBg-preview.png";
import Link from "next/link";
import Button from "./ui/button";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Header() {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const clickingHamburger = useRef(false);

  // This is for the floating header. It checks if the user has scrolled 500px, if true then the header will start floating.
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 500) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This is for the mobile menu. It focuses the menu when it opens so onBlur can close the menu.
  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  // This is for the mobile menu. It closes the menu when focus leaves the menu container.
  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    // If the hamburger is being clicked, onClick will handle the toggle
    if (clickingHamburger.current) {
      clickingHamburger.current = false;
      return;
    }
    // Don't close if focus is still inside the menu
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Added Single source of truth for all navigation menus
  const navMenus = {
    Home: "/",
    About: "/about",
    Services: "/services",
    "Client Projects": "/projects",
    "Our Team": "/about/#team",
    "Contact Us": "/contact",
  };

  return (
    <nav
      style={{ willChange: "transform" }}
      className={
        "sticky data-lenis-prevent top-0 z-50 bg-white text-dark mx-auto transition-all duration-300 ease-in-out" +
        (isFloating ? " rounded-full top-6 shadow-md max-w-7xl" : " max-w-full")
      }
    >
      <div className="max-w-360 mx-auto flex py-3 px-5 md:px-10 items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <div className="relative lg:w-24 lg:h-17 w-18 h-14">
            <Image src={logo} fill className="object-contain" alt="Logo" />
          </div>
        </Link>

        {/* Desktop Navigation Menus*/}
        <div>
          <ul className="items-center lg:gap-8 md:flex hidden gap-4 lg:text-xl text-base font-semibold">
            {Object.entries(navMenus).map(([key, value]) => (
              <li key={key}>
                <Link className="hover:text-primary" href={value}>
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {/* Contact Button */}
          <Link href={"/contact"}>
            <Button
              variant={"primary"}
              className="px-2.5! py-1.5! text-xs! lg:text-base! lg:px-4.5! lg:py-4!"
            >
              Get A Quote
              <MoveRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </Link>

          {/* Hamburger Icon */}
          <div
            className="ml-5 block md:hidden"
            onMouseDown={() => {
              if (isOpen) clickingHamburger.current = true; // Opens the menu
            }}
          >
            <Menu
              className="text-dark"
              onClick={() => setIsOpen(!isOpen)}
              size={28}
            />
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              ref={menuRef}
              tabIndex={-1}
              onBlur={handleBlur}
              className="md:hidden absolute top-20 md:top-20 right-0 max-w-60 border-t shadow-lg bg-white border rounded-xl mr-5 md:mr-10 border-gray-200 w-full outline-none"
            >
              <ul
                onClick={() => setIsOpen(false)}
                className="p-4 text-sm md:text-base gap-2 w-full flex flex-col"
              >
                {Object.entries(navMenus).map(([key, value]) => (
                  <li key={key}>
                    <Link
                      className="block border bg-white border-gray-200 hover:bg-gray-100 transition-colors duration-300 px-2 py-1.5 md:px-3 md:py-2 font-medium text-dark hover:text-navy rounded-md"
                      href={value}
                    >
                      {key}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
