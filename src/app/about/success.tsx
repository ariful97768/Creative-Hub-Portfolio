"use client";
import badge from "@/assets/icon-badge.png";
import clients from "@/assets/icon-clients.png";
import happyClient from "@/assets/icon-happy-client.png";
import handStar from "@/assets/icon-hand-star.png";
import Image from "next/image";
import CountUp from "react-countup";

export default function SuccessSection() {
  return (
    <section className="mb-16 md:mb-25 bg-light-blue">
      <AboutBatch />
    </section>
  );
}

const AboutBatch = () => {
  const stats = [
    {
      id: 1,
      icon: badge,
      value: 30,
      label: "Winning award",
      color: "text-yellow-500",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      icon: happyClient,
      value: 180,
      label: "Happy Client",
      color: "text-blue-500",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      icon: handStar,
      value: 300,
      label: "Complete project",
      color: "text-green-500",
      gradient: "from-green-400 to-green-600",
    },
    {
      id: 4,
      icon: clients,
      value: 484,
      label: "Client review",
      color: "text-purple-500",
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="py-10 md:py-12 bg-light-blue">
      <div className="mx-auto px-4 md:px-8">
        <div className="mx-auto">
          <div className="bg-light-blue rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="relative group">
                  <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`inline-flex items-center justify-center p-2 w-14 h-14 rounded-2xl bg-linear-to-br ${stat.gradient} text-white shadow-lg`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={stat.icon}
                            fill
                            className="object-contain"
                            alt="Success Image"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Count */}
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        <CountUp
                          duration={5}
                          end={stat.value}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        +
                      </div>

                      {/* Label */}
                      <div className="text-gray-600 font-medium text-lg">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${stat.gradient} rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 md:mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 text-lg text-nowrap">
                <span className="text-primary font-bold">5+ Years</span> of
                Excellence <span className="sm:inline hidden">•</span>{" "}
                <br className="sm:hidden block" />
                <span className="text-primary font-bold sm:ml-4 ml-0 text-nowrap">
                  98%
                </span>{" "}
                Client Satisfaction <span className="sm:inline hidden">•</span>
                <br className="sm:hidden block" />
                <span className="text-primary font-bold sm:ml-4 ml-0">
                  24/7
                </span>{" "}
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
