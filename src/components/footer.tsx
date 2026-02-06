import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131A2A] text-white">
      <div className="pt-8 pb-3 max-w-360 px-14 mx-auto">
        <div className="flex justify-between font-bold font-(family-name:--font-orbitron)">
          <h3 className="text-center">
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
        <div className="flex items-center justify-between">
          <span>Creative Hub IT Agency 2023, All Rights Reserved</span>
          <ul className="flex items-center gap-3">
            <Link href={"#"}>Terms & Condition</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Contact Us</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
