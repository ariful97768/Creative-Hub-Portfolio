import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import templateImg1 from "@/assets/template-img-1.jpg";
import templateImg2 from "@/assets/template-img-2.jpg";
import * as motion from "motion/react-client";
import TikMark from "@/components/ui/tik-mark";

export default function AboutUsSection() {
  return (
    <section className="mt-25 mb-20">
      <div className="flex flex-col xl:flex-row gap-13">
        <div className="mx-auto max-w-130">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              align="left"
              heading="We're leading The Power Of Technology"
              subheading="About Us"
            />
          </motion.div>
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-dark font-medium pt-3 pb-10"
          >
            Harnessing innovation and cutting-edge technology, we deliver smart
            solutions that empower businesses, enhance productivity, and drive
            growth. Our expertise transforms ideas into digital realities,
            shaping the future while connecting people, processes, and
            possibilities seamlessly
          </motion.p>
          <ul className="text-lg font-semibold max-w-max grid grid-cols-2 gap-x-5 gap-y-5">
            <motion.li
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> Best IT Solutions & Service
            </motion.li>
            <motion.li
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark />
              Always Latest Technology
            </motion.li>
            <motion.li
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> 24 Hour's Customer Service
            </motion.li>
            <motion.li
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> World Best Service
            </motion.li>
          </ul>
        </div>
        <div className="max-w-1/2 sm:mx-0 w-full">
          <div className="relative w-full h-full">
            <div>
              {/* Left side image */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative w-60 h-60 sm:w-md sm:h-112"
              >
                <Image
                  fill
                  className="absolute rounded-4xl object-cover object-center top-0 left-0"
                  src={templateImg2}
                  alt="Template Image One"
                />
              </motion.div>
            </div>
            {/* Right side image */}
            <div className="absolute top-30 left-30 sm:left-60 md:top-40 md:left-70">
              {/* Top div controls the position and below controls the size of the image */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-40 h-40 sm:w-91 sm:h-91"
              >
                <Image
                  fill
                  className="absolute z-2 rounded-4xl object-cover object-center top-0 left-0"
                  src={templateImg1}
                  alt="Template Image Two"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
