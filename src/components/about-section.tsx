import Image from "next/image";
import SectionTitle from "./ui/section-title";
import templateImg from '@/assets/template-img-2.jpg'
export default function AboutUsSection() {
  return (
    <section className={'flex items-center justify-between max-w-360 mx-auto px-14'}>
      <div className="w-122.5 h-122.5 relative">
        <Image src={templateImg} alt="Template image" fill className="object-cover"/>
        <div className="absolute top-1/3 -right-1/3 font-bold text-dark px-13 py-4 bg-[#E7F914] rounded-full flex flex-col items-center justify-center">
          <h1 className="text-[56px]">7 Year's</h1>
          <p className="text-base text-center">years of experiences<br />in this industry</p>
        </div>
      </div>
      <div className="max-w-xl">
        <div>
          <SectionTitle
            align="left"
            heading="We're leading The Power Of Technology"
            subheading="ABOUT US"
          />
          <p className="pt-3 text-dark text-base font-medium">
            Harnessing innovation and cutting-edge technology, we deliver smart
            solutions that empower businesses, enhance productivity, and drive
            growth. Our expertise transforms ideas into digital realities,
            shaping the future while connecting people, processes, and
            possibilities seamlessly
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-2 pt-6 gap-x-11 gap-y-7 text-lg font-medium">
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
