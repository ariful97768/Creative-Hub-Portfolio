"use client";
import contactImg from "@/assets/contact.jpg";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

// Dynamic import with SSR disabled - Leaflet requires window object
const MapSection = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <div className="h-72 md:h-137 bg-gray-200 animate-pulse" />,
});

export default function ContactUsPage() {
  return (
    <main>
      <section>
        <div
          style={{
            backgroundImage: `url(${contactImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-cover bg-center h-128 w-full"
        ></div>
      </section>
      {/* <section className="max-w-360 px-14">
        <div>
          <div className="flex flex-col py-11 pl-5 pr-33 bg-dark max-w-max text-white rounded-xl">
            <div className="space-y-3 mb-20">
              <h3 className="text-3xl font-bold">
                <span className="text-[#8FDC24]">Contact</span> Information
              </h3>
              <p className="text-dark">Say something to start a live chat!</p>
            </div>
            <div className="space-y-12">
              <p className="flex items-center gap-6">
                <PhoneCall />
                <Link href={"tel:+08801607304149"}>+08801607304149</Link>
              </p>
              <p className="flex items-center gap-6">
                <Mail />
                <Link href={"mailto:mdshakilmirja701@gmail.com "}>
                  mdshakilmirja701@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-6">
                <MapPin />
                <span>Dhaka Uttara, #1201, Sector: #03</span>
              </p>
            </div>
            <div className="flex gap-4 mt-37">
              <Link
                className="p-2 rounded-full bg-[#9AD744] text-white"
                href={"#"}
              >
                <Facebook fill="white" stroke="none" />
              </Link>
              <Link
                className="p-2 rounded-full bg-[#9AD744] text-white"
                href={"#"}
              >
                <Linkedin fill="white" stroke="none" />
              </Link>
              <Link
                className="p-2 rounded-full bg-[#9AD744] text-white"
                href={"#"}
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                className="outline-none border-b"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" type="text" />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message.."
            ></textarea>
          </div>
        </div>
      </section> */}
      <section className="max-w-360 mx-auto">
        <MapSection />
      </section>
    </main>
  );
}
