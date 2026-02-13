"use client";
import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-removeBg-preview.png";
import Link from "next/link";
import Button from "./ui/button";
import { useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <motion.nav
      animate={{ y: hidden ? "-150%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={
        "sticky top-0 z-50 bg-white text-dark mx-auto transition-all duration-300 ease-in-out" +
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

        {/* Navigation Menus*/}
        <div>
          <ul className="items-center lg:gap-8 md:flex hidden gap-4 lg:text-xl text-base font-semibold">
            <li>
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/projects">
                Client Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/about/#team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          {/* Contact Button */}
          <Link href={"/contact"}>
            <Button variant={"primary"}>
              Get A Quote
              <MoveRight />
            </Button>
          </Link>

          {/* Hamburger Icon */}
          <div className="ml-5 block md:hidden">
            <Menu
              className="text-dark"
              onClick={() => setIsOpen(!isOpen)}
              size={28}
            />
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden absolute top-20 md:top-20 right-0 w-xs border-t shadow-lg bg-white border rounded-xl sm:mr-5 md:mr-10 border-gray-200 pb-6">
              <div className="p-4 gap-2 max-w-xs flex flex-col">
                <Link
                  href="#/"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  Client Projects
                </Link>
                <Link
                  href="/team"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  Our Team
                </Link>
                <Link
                  href="/contact"
                  className="block border bg-white border-gray-200 px-3 py-2 text-base font-medium text-dark hover:text-navy hover:bg-light-gray rounded-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
