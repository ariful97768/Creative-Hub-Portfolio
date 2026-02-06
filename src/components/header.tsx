"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-removeBg-preview.png";
import Link from "next/link";
import Button from "./ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 700) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={
        "sticky top-0 z-50 bg-white mx-auto transition-all duration-300 ease-in-out" +
        (isFloating ? " rounded-full top-6 shadow-md max-w-7xl" : " max-w-full")
      }
    >
      <div className="max-w-360 mx-auto flex py-3 items-center justify-between px-10">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <Image src={logo} width={97} height={68} alt="Logo" />
          </Link>
        </div>
        {/* Navigation */}
        <div>
          <ul className="flex items-center gap-8 text-xl font-semibold">
            <li>
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#projects">
                Client Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/#contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Button */}
        <div className="flex items-center">
          <Link href={"#"}>
            <Button variant={"primary"}>
              Get A Quote
              <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
