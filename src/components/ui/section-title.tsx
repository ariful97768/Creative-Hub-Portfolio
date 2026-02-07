export default function SectionTitle({
  align = "center",
  heading,
  subheading,
}: {
  align?: "left" | "center";
  heading: string;
  subheading: string;
}) {
  return (
    <div
      className={`${align === "left" ? "text-left" : "text-center mx-auto"} space-y-3 max-w-121.5`}
    >
      {/* Subheading */}
      <h4
        className={`uppercase text-primary text-base md:text-xl lg:text-2xl font-semibold flex items-center gap-4 ${align === "left" ? "" : " justify-center"}`}
      >
        {/* Left Side Bar */}
        <span
          className={`px-3 py-px md:px-5 md:py-0.5 bg-primary ${align === "left" ? "hidden" : ""}`}
        ></span>
        {subheading}
        {/* Right Side Bar */}
        <span
          className={`px-3 py-px md:px-5 md:py-0.5 bg-primary ${align === "left" ? "" : ""}`}
        ></span>
      </h4>
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-10 sm:leading-11 md:leading-12 lg:leading-14 text-dark font-semibold">
        {heading}
      </h2>
    </div>
  );
}
