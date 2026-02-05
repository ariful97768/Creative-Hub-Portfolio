import { MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-removeBg-preview.png";
import Link from "next/link";
import Button from "./ui/button";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto flex py-3 items-center justify-between px-10">
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
              <Link className="hover:text-blue-light" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-light" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-light" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-light" href="/#projects">
                Client Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-light" href="/#team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-light" href="/#contact">
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
