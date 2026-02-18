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
import { contactEmail } from "@/lib/actions/contact-email";
import Swal from "sweetalert2";
import { SubmitEvent } from "react";

export default function ContactUsFormSection() {
  // Handle contact form submission

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // Extract form data
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        first_name: formData.get("first_name") as string,
        last_name: formData.get("last_name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      };

      const res = await contactEmail(data);
      if (res.accepted.length > 0) {
        Swal.fire({
          title: "Success!",
          text: "Email sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Email not sent. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      // Reset form
      e.target.reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Email not sent.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  }

  return (
    <section className="max-w-360 mb-16 md:mb-20 mx-auto px-5 md:px-8 lg:px-14">
      <div className="flex flex-col-reverse justify-center shadow-xl max-w-280 mx-auto lg:flex-row gap-8 md:gap-14 rounded-xl p-0 sm:p-6 bg-light-blue border border-gray-200 text-dark">
        {/* Contact Information - Card area */}
        <div className="relative lg:max-w-max w-full overflow-hidden flex flex-col py-8 p-5 sm:pl-5 sm:pr-14 lg:pr-33 bg-accent/5 text-dark rounded-xl">
          <div className="space-y-3 mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="text-accent">Contact</span> Information
            </h3>
            <p className=" text-sm sm:text-base md:text-lg text-dark/80">
              Say something to start a live chat!
            </p>
          </div>
          <div className="text-sm grow sm:text-base space-y-5 sm:space-y-8 md:space-y-8">
            <p className="flex items-center gap-2 sm:gap-6">
              <PhoneCall size={24} className="shrink-0 text-accent" />
              <Link href={"tel:+08801607304149"}>+08801607304149</Link>
            </p>
            <p className="flex items-center gap-2 sm:gap-6">
              <Mail size={24} className="shrink-0 text-accent" />
              <Link href={"mailto:mdshakilmirja701@gmail.com "}>
                mdshakilmirja701@gmail.com
              </Link>
            </p>
            <p className="flex items-center gap-2 sm:gap-6">
              <MapPin size={24} className="shrink-0 text-accent" />
              <span>Dhaka Uttara, #1201, Sector: #03</span>
            </p>
          </div>
          <div className="flex mt-8 gap-4">
            <Link className="p-2 rounded-full bg-accent text-white" href={"#"}>
              <Facebook fill="white" stroke="none" />
            </Link>
            <Link className="p-2 rounded-full bg-accent text-white" href={"#"}>
              <Linkedin fill="white" stroke="none" />
            </Link>
            <Link className="p-2 rounded-full bg-accent text-white" href={"#"}>
              <Instagram />
            </Link>
          </div>
          <div className="bg-accent/50 absolute bottom-15 right-15 w-35 h-35 rounded-full"></div>
          <div className="bg-accent/50 absolute -bottom-20 -right-20 w-67 h-67 rounded-full"></div>
        </div>

        {/* Form area */}
        <form onSubmit={handleSubmit} className="px-6 sm:px-0 w-full">
          <div className="flex flex-col gap-5 md:gap-10 pt-10 w-full">
            <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm" htmlFor="first_name">
                  First Name
                </label>
                <input
                  required
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  className="outline-none border-b"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="last_name">Last Name</label>
                <input
                  required
                  id="last_name"
                  name="last_name"
                  placeholder="Doe"
                  className="outline-none border-b"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  required
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="outline-none border-b"
                  type="email"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  required
                  id="phone"
                  name="phone"
                  placeholder="+1 234 567 890"
                  className="outline-none border-b"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Write your message.."
                className="outline-none border-b"
              ></textarea>
            </div>
            <div className="flex justify-center sm:justify-end mb-5 lg:mb-0 mt-5 lg:mt-10">
              <button className="bg-accent text-white px-12 py-4 font-medium rounded-md hover:cursor-pointer active:scale-95 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
