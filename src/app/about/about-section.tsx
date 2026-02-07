import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import templateImg1 from "@/assets/template-img-1.jpg";
import templateImg2 from "@/assets/template-img-2.jpg";

export default function AboutUsSection() {
  return (
    <section className="mt-25 mb-32">
      <div className="flex flex-col xl:flex-row gap-13">
        <div className="mx-auto max-w-130">
          <SectionTitle
            align="left"
            heading="We're leading The Power Of Technology"
            subheading="About Us"
          />
          <p className="text-dark font-medium pt-3 pb-6">
            Harnessing innovation and cutting-edge technology, we deliver smart
            solutions that empower businesses, enhance productivity, and drive
            growth. Our expertise transforms ideas into digital realities,
            shaping the future while connecting people, processes, and
            possibilities seamlessly
          </p>
          <ul className="text-lg font-semibold max-w-max grid grid-cols-2 gap-x-11.5 gap-y-8">
            <li>✔ Best IT Solutions & Service</li>
            <li>✔ Always Latest Technology</li>
            <li>✔ 24 Hour's Customer Service</li>
            <li>✔ World Best Service</li>
          </ul>
        </div>
        <div className="max-w-1/2 sm:mx-0 w-full">
          <div className="relative w-full h-full">
            <div>
              {/* Left side image */}
              <div className="relative w-60 h-60 sm:w-md sm:h-112">
                <Image
                  fill
                  className="absolute rounded-4xl object-cover object-center top-0 left-0"
                  src={templateImg2}
                  alt="Template Image One"
                />
              </div>
            </div>
            {/* Right side image */}
            <div className="absolute top-30 left-30 sm:left-60 md:top-40 md:left-70">
              {/* Top div controls the position and below controls the size of the image */}
              <div className="relative w-40 h-40 sm:w-91 sm:h-91">
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
  );
}
