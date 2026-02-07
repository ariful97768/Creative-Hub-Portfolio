import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";
import templateImg from "@/assets/template-img-2.jpg";
export default function AboutUsSection() {
  return (
    <section
      className={
        "flex md:flex-row flex-col-reverse sm:items-center items-start justify-between gap-10 lg:gap-30 max-w-360 mx-auto px-5 md:px-8 lg:px-14"
      }
    >
      {/* Image part */}
      <div className="shrink-0 w-60 h-60 sm:w-120 md:w-80 xl:w-122.5 sm:h-120 xl:h-122.5 relative">
        <Image
          src={templateImg}
          alt="Template image"
          fill
          className="rounded-md shrink-0 xl:rounded-none object-cover"
        />
        <div className="absolute top-1/4 -right-10 lg:top-1/3 lg:-right-1/3 flex flex-col items-center justify-center font-bold text-dark px-5 py-1.5 lg:px-13 lg:py-4 bg-[#E7F914] rounded-full">
          <h1 className="text-xl md:text-xl lg:text-5xl xl:text-[56px]">
            7 Year's
          </h1>
          <p className="text-sm lg:text-base text-center">
            years of experiences
            <br />
            in this industry
          </p>
        </div>
      </div>
      {/* Right side, text part */}
      <div className="max-w-xl">
        <div>
          <SectionTitle
            align="left"
            heading="We're leading The Power Of Technology"
            subheading="ABOUT US"
          />
          <p className="pt-3 text-dark text-sm md:text-base font-medium">
            Harnessing innovation and cutting-edge technology, we deliver smart
            solutions that empower businesses, enhance productivity, and drive
            growth. Our expertise transforms ideas into digital realities,
            shaping the future while connecting people, processes, and
            possibilities seamlessly
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-x-5 md:gap-x-11 gap-y-3 md:gap-y-7 text-lg font-medium">
            <li>✔ Best IT Solutions & Service</li>
            <li>✔ Always Latest Technology</li>
            <li>✔ 24 Hour's Customer Service</li>
            <li>✔ World Best Service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
