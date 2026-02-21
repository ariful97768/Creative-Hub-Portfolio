import SectionTitle from "@/components/ui/section-title";
import templateImg from "@/assets/template-img-2.jpg";
import { CheckCircle, Globe, Headset, Lightbulb } from "lucide-react";
import * as motion from "motion/react-client";

export const AboutUs = ({ align }: { align: "reverse" | "horizontal" }) => {
  const isHorizontal = align === "horizontal";

  const features = [
    {
      id: 1,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Best IT Solutions & Service",
      description: "Tailored solutions for your business needs",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Always Latest Technology",
      description: "Stay ahead with cutting-edge tech stack",
    },
    {
      id: 3,
      icon: <Headset className="w-6 h-6" />,
      title: "24 Hour's Customer Service",
      description: "Round-the-clock support for your business",
    },
    {
      id: 4,
      icon: <Globe className="w-6 h-6" />,
      title: "World Best Service",
      description: "Global standards with local understanding",
    },
  ];

  return (
    <section className="pt-10 md:py-12 overflow-hidden">
      <div className="max-w-360 mx-auto px-5 md:px-8 lg:px-14">
        <div
          className={`flex flex-col ${isHorizontal ? "lg:flex-row" : "lg:flex-row-reverse"}  items-center gap-12 lg:gap-20`}
        >
          {/* Left Column - Image with Decoration */}
          <motion.div
            className="flex-1 relative"
            initial={{ x: isHorizontal ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Image Container */}
            <div className="relative z-10 border-0">
              <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl max-w-xl md:max-w-2xl object-cover group">
                <img
                  className="w-full h-full"
                  src={templateImg.src}
                  alt="Template image"
                />
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full -z-10 animate-float-slow opacity-70"></div>

              {/* Floating Element 2 */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-300 rounded-full -z-10 animate-float opacity-60"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -right-6 top-1/2 translate-y-1/2 sm:top-1/4 bg-white rounded-2xl p-4 md:p-6 shadow-xl z-20 animate-fadeInRight">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="w-12 h-1 bg-blue-200 rounded-full mt-2"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex-1">
            {/* Section Heading */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionTitle
                align="left"
                heading="We're leading The Power Of Technology"
                subheading="ABOUT US"
              />
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ x: isHorizontal ? 80 : -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 group cursor-pointer">
                    {/* Icon */}
                    <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
