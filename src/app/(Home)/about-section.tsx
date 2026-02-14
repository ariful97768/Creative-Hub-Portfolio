import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";
import templateImg from "@/assets/template-img-2.jpg";
import TikMark from "@/components/ui/tik-mark";
import * as motion from "motion/react-client";

export default function AboutUsSection() {
  return (
    <section
      className={
        "flex flex-col md:flex-row sm:items-center items-start justify-between gap-10 lg:gap-30 max-w-360 mx-auto px-5 md:px-8 lg:px-14"
      }
    >
      {/* Image part */}
      <div className="w-full pr-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="shrink-0 w-full md:w-80 lg:w-100 xl:w-122.5 sm:h-120 xl:h-122.5 relative"
        >
          <Image
            src={templateImg}
            alt="Template image"
            fill
            className="rounded-md shrink-0 xl:rounded-none object-cover"
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-1/4 -right-10 lg:top-1/3 lg:-right-1/3 flex flex-col items-center justify-center font-bold text-dark px-5 py-1.5 lg:px-13 lg:py-4 bg-[#E7F914] rounded-full"
          >
            <h1 className="text-xl relative overflow-hidden md:text-xl lg:text-5xl xl:text-[56px]">
              <motion.span
                className="bg-white/80 z-4 absolute inset-0 w-2 h-full"
                initial={{ skewX: -30, x: -10, opacity: 0 }}
                animate={{
                  skewX: -25,
                  x: 330,
                  opacity: [0, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              ></motion.span>
              7 Year&apos;s
            </h1>
            <p className="text-sm lg:text-base text-center">
              years of experiences
              <br />
              in this industry
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* Right side, text part */}
      <div className="max-w-xl overflow-hidden">
        <div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              align="left"
              heading="We're leading The Power Of Technology"
              subheading="ABOUT US"
            />
          </motion.div>
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-3 text-dark text-sm md:text-base font-medium"
          >
            Harnessing innovation and cutting-edge technology, we deliver smart
            solutions that empower businesses, enhance productivity, and drive
            growth. Our expertise transforms ideas into digital realities,
            shaping the future while connecting people, processes, and
            possibilities seamlessly
          </motion.p>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-x-5 gap-y-5 text-lg font-medium">
            <motion.li
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> Best IT Solutions & Service
            </motion.li>
            <motion.li
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> Always Latest Technology
            </motion.li>
            <motion.li
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> 24 Hour's Customer Service
            </motion.li>
            <motion.li
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              <TikMark /> World Best Service
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
