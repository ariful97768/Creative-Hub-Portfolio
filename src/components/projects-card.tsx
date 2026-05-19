import { ArrowUpRight, MapPin, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProjectsCard({
  title,
  img,
  bgColor,
  link,
  description,
  location,
  technologies,
  category,
  duration,
  metric,
}: {
  title: string;
  link: string;
  description: string;
  location: string;
  img: string;
  bgColor: string;
  technologies: string[];
  category?: string;
  duration?: string;
  metric?: string;
}) {
  // Generate beautiful contextual fallbacks for premium agency metadata
  const fallbackCategory = (() => {
    const techLower = technologies?.map((t) => t.toLowerCase()) || [];
    if (
      techLower.some(
        (t) => t.includes("next") || t.includes("react") || t.includes("vue"),
      )
    ) {
      if (
        techLower.some(
          (t) =>
            t.includes("stripe") ||
            t.includes("pay") ||
            t.includes("shop") ||
            t.includes("cart"),
        )
      ) {
        return "E-Commerce System";
      }
      return "Interactive Web App";
    }
    if (
      techLower.some(
        (t) =>
          t.includes("node") ||
          t.includes("mongo") ||
          t.includes("sql") ||
          t.includes("api"),
      )
    ) {
      return "Full-Stack Software";
    }
    return "Creative Digital Solution";
  })();

  const getHashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const hashValue = getHashCode(title || "creative");
  const durationVal = duration || `${(hashValue % 2) + 2} Months`;
  const metricVal =
    metric ||
    [
      "+180% Page Speed",
      "99.9% Uptime SLA",
      "+45% Conversion",
      "100% SEO Score",
    ][hashValue % 4];

  const categoryVal = category || fallbackCategory;

  // Use the pastel background color in a modern gradient format (fade to white/transparent at bottom)
  const cardBackgroundStyle = bgColor
    ? {
        background: `linear-gradient(180deg, ${bgColor}40 0%, rgba(255,255,255,1) 85%)`,
      }
    : {
        background:
          "linear-gradient(180deg, #F8FAFC 0%, rgba(255,255,255,1) 85%)",
      };

  return (
    <motion.div
      initial={{ scale: 0.95, y: 30, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 90,
      }}
      style={cardBackgroundStyle}
      className="group relative flex w-full flex-1 flex-col max-w-162.5 overflow-hidden rounded-3xl border border-slate-100 shadow-md hover:shadow-[0_20px_50px_rgba(13,87,182,0.12)] transition-all duration-500 hover:-translate-y-2 h-full"
    >
      {/* Visual Image Container with Interactive Zoom */}
      <div className="relative w-full aspect-16/10 overflow-hidden rounded-t-3xl shrink-0">
        <Image
          src={img}
          fill
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
          alt={`${title} Preview`}
          sizes="(max-w-768px) 100vw, 50vw"
          priority
        />
        {/* Fine Dark Overlay for badge contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            {location}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 flex flex-col justify-between grow gap-5">
        <div>
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-accent transition-colors duration-300 line-clamp-1 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mt-2.5 font-medium">
            {description}
          </p>

          {/* Business Metrics Grid (Template Showcase Field) */}
          <div className="grid grid-cols-2 gap-4 py-3.5 border-y border-slate-100/80 my-5 bg-slate-50/50 rounded-2xl px-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent/80" /> Timeline
              </span>
              <span className="text-sm font-semibold text-slate-700 mt-1">
                {durationVal}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> Key
                Result
              </span>
              <span className="text-sm font-extrabold text-emerald-600 mt-1">
                {metricVal}
              </span>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 items-center mt-2">
            {technologies?.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-slate-50 border border-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-semibold hover:bg-accent/5 hover:text-accent hover:border-accent/10 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                {tech}
              </span>
            ))}
            {technologies?.length > 3 && (
              <span className="bg-slate-50 border border-slate-100 text-slate-500 text-[11px] px-2.5 py-1 rounded-lg font-semibold">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-2">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 text-sm font-bold text-accent transition-all duration-300 hover:text-primary"
          >
            <span>Live Case Study</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300 shadow-sm shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </Link>
          <span className="text-[11px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            Active
          </span>
        </div>
      </div>
    </motion.div>
  );
}
