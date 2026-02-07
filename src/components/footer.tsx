import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131A2A] text-white">
      <div className="pt-8 pb-3 max-w-360 px-5 md:px-8 lg:px-14 mx-auto">
        <div className="flex flex-col md:flex-row gap-y-10 items-center justify-between font-bold font-(family-name:--font-orbitron)">
          <h3 className="text-center text-xl">
            Creative Hub <br /> IT Agency
          </h3>
          <div className="flex items-center gap-3">
            <span>Follow us:</span>
            <Link href="#">
              <Facebook size={24} />
            </Link>
            <Link href="#">
              <Instagram size={24} />
            </Link>
            <Link href="#">
              <Twitter size={24} />
            </Link>
            <Link href="#">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
        <hr className="text-[#DDDDDD4D] mt-5.5 mb-2" />
        <div className="flex flex-col md:flex-row gap-y-10 items-center justify-between">
          <span className="text-sm text-center md:text-left">Creative Hub IT Agency 2023, All Rights Reserved</span>
          <ul className="flex text-xs md:text-base items-center gap-3">
            <Link href={"#"}>Terms & Condition</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Contact Us</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
