"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export default function ContactUsFormSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // Animation starts when top enters viewport, ends when it hits center
  });

  // Map scroll progress to scale and border radius
  // 0.9 = 90% size (Card look), 1 = 100% size (Full Screen look)
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  return (
    <section ref={containerRef} className="w-full mt-20 mx-auto">
      <motion.div
        style={{ scale, borderRadius }}
        className="rounded w-full max-w-384 mx-auto bg-bgGradient/70 border shadow-lg border-gray-200 text-dark"
      >
        <div className="max-w-340 mx-auto flex flex-col-reverse lg:flex-row gap-5 p-0 sm:p-6 lg:px-10 lg:py-20">
          {/* Side Bar - Contact Information */}
          <div className="relative lg:max-w-max w-full overflow-hidden flex flex-col py-11 p-5 sm:pl-5 sm:pr-14 lg:pr-33 bg-white text-dark rounded-xl rounded-b-none sm:rounded-b-xl">
            <div className="space-y-3 mb-20">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                <span className="text-accent">Contact</span> Information
              </h3>
              <p className=" text-sm sm:text-base md:text-lg text-dark/80">
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
                className="p-2 rounded-full bg-accent/80 text-white"
                href={"#"}
              >
                <Facebook fill="white" stroke="none" />
              </Link>
              <Link
                className="p-2 rounded-full bg-accent/80 text-white"
                href={"#"}
              >
                <Linkedin fill="white" stroke="none" />
              </Link>
              <Link
                className="p-2 rounded-full bg-accent/80 text-white"
                href={"#"}
              >
                <Instagram />
              </Link>
            </div>
            <div className="bg-accent/50 absolute bottom-15 right-15 w-35 h-35 rounded-full"></div>
            <div className="bg-accent/50 absolute -bottom-20 -right-20 w-67 h-67 rounded-full"></div>
          </div>

          {/* Form Fields */}
          <form className="mx-auto px-6 sm:px-0 w-full">
            <div className="flex flex-col mx-auto gap-10 pt-10 max-w-150 w-full">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex w-full flex-col gap-2">
                  <label className="text-sm" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    placeholder="John"
                    className="outline-none transition-colors duration-300 focus:border-accent border-b border-gray-400"
                    type="text"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    id="last_name"
                    placeholder="Doe"
                    className="outline-none transition-colors duration-300 focus:border-accent border-b border-gray-400"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    placeholder="example@email.com"
                    className="outline-none transition-colors duration-300 focus:border-accent border-b border-gray-400"
                    type="email"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    placeholder="012 345 6789"
                    className="outline-none transition-colors duration-300 focus:border-accent border-b border-gray-400"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="outline-none transition-colors duration-300 focus:border-accent border-b border-gray-400"
                  placeholder="Write your message.."
                ></textarea>
              </div>
              <div className="flex justify-center sm:justify-end mb-5 lg:mb-0 lg:mt-15">
                <button className="bg-accent text-white px-12 py-4 font-medium rounded-md hover:cursor-pointer active:scale-95 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
