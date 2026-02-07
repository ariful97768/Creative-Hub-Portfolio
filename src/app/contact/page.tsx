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
          className="bg-cover bg-center h-40 sm:h-60 md:h-100 lg:h-128 w-full"
        ></div>
      </section>
      <section className="max-w-360 my-20 mx-auto px-5 md:px-8 lg:px-14">
        <div className="flex flex-col-reverse lg:flex-row gap-5 rounded-xl p-0 sm:p-6 bg-dark/90 text-white">
          <div className="relative lg:max-w-max w-full overflow-hidden flex flex-col py-11 p-5 sm:pl-5 sm:pr-14 lg:pr-33 bg-dark text-white rounded-xl">
            <div className="space-y-3 mb-20">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                <span className="text-[#8FDC24]">Contact</span> Information
              </h3>
              <p className=" text-sm sm:text-base md:text-lg text-white/80">
                Say something to start a live chat!
              </p>
            </div>
            <div className="text-sm sm:text-base space-y-5 sm:space-y-8 md:space-y-12">
              <p className="flex items-center gap-2 sm:gap-6">
                <PhoneCall size={24} className="shrink-0" />
                <Link href={"tel:+08801607304149"}>+08801607304149</Link>
              </p>
              <p className="flex items-center gap-2 sm:gap-6">
                <Mail size={24} className="shrink-0" />
                <Link href={"mailto:mdshakilmirja701@gmail.com "}>
                  mdshakilmirja701@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-2 sm:gap-6">
                <MapPin size={24} className="shrink-0" />
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
            <div className="bg-[#93D23A80] absolute bottom-15 right-15 w-35 h-35 rounded-full"></div>
            <div className="bg-[#93D23A80] absolute -bottom-20 -right-20 w-67 h-67 rounded-full"></div>
          </div>
          <form className="mx-auto px-6 sm:px-0 w-full">
            <div className="flex flex-col mx-auto gap-10 pt-10 max-w-150 w-full">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex w-full flex-col gap-2">
                  <label className="text-sm" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    className="outline-none border-b"
                    type="text"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    id="last_name"
                    className="outline-none border-b"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="outline-none border-b"
                    type="email"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    className="outline-none border-b"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="outline-none border-b"
                  placeholder="Write your message.."
                ></textarea>
              </div>
              <div className="flex justify-center sm:justify-end mb-5 lg:mb-0 lg:mt-15">
                <button className="bg-[#8FDC24] text-white px-12 py-4 font-medium rounded-md hover:cursor-pointer active:scale-95 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="max-w-384 mx-auto">
        {/* If you're developing this section then comment the MapSection component otherwise it will throw an error every time page auto reloads. Don't know why, Didn't bothered. Figure it out yourself. */}
        {/* Runtime Error: Map container is being reused by another instance */}
        <MapSection />
      </section>
    </main>
  );
}
