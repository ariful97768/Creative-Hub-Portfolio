"use client";
import aboutImage from "@/assets/about-banner.jpg";
import templateImg1 from "@/assets/template-img-1.jpg";
import templateImg2 from "@/assets/template-img-2.jpg";
import SectionTitle from "@/components/ui/section-title";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TeamSection from "@/components/teams-section";

export default function AboutUsPage() {
  return (
    <main>
      {/* Banner section */}
      <section>
        <div
          style={{
            backgroundImage: `url(${aboutImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-cover bg-center h-128 w-full relative"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex flex-col justify-center gap-3.5 h-full px-14 max-w-360 mx-auto">
            <h1 className="text-[64px] font-bold text-white z-1">About Us</h1>
            <p className="text-white z-1 text-2xl font-semibold flex items-center gap-1.5">
              <Link href={"/"}>Home</Link>
              <span className="flex items-center gap-1.5 text-[#317EFE] hover:text-[#317EFE]/90">
                <ChevronRight size={26} /> <Link href={"/about"}>About Us</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-360 px-14 mx-auto">
        {/* About us section */}
        <section className="mt-25 mb-32">
          <div className="flex gap-13">
            <div className="max-w-145">
              <SectionTitle
                align="left"
                heading="We're leading The Power Of Technology"
                subheading="About Us"
              />
              <p className="text-dark font-medium pt-3 pb-6">
                Harnessing innovation and cutting-edge technology, we deliver
                smart solutions that empower businesses, enhance productivity,
                and drive growth. Our expertise transforms ideas into digital
                realities, shaping the future while connecting people,
                processes, and possibilities seamlessly
              </p>
              <ul className="text-lg font-semibold max-w-max grid grid-cols-2 gap-x-11.5 gap-y-8">
                <li>✔ Best IT Solutions & Service</li>
                <li>✔ Always Latest Technology</li>
                <li>✔ 24 Hour's Customer Service</li>
                <li>✔ World Best Service</li>
              </ul>
            </div>
            <div className="max-w-1/2 w-full">
              <div className="relative w-full h-full">
                <div>
                  <div className="relative w-md h-112">
                    <Image
                      fill
                      className="absolute rounded-4xl object-cover object-center top-0 left-0"
                      src={templateImg2}
                      alt="Template Image One"
                    />
                  </div>
                </div>
                <div className="absolute top-40 left-80">
                  <div className="relative w-91 h-91">
                    <Image
                      fill
                      className="absolute z-2 rounded-4xl object-cover object-center top-0 left-0"
                      src={templateImg1}
                      alt="Template Image Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team section */}
        <TeamSection />
      </div>
    </main>
  );
}
