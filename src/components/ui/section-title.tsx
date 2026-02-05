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
      className={`${align === "left" ? "" : "text-center mx-auto"} space-y-3 max-w-max`}
    >
      {/* Subheading */}
      <h4
        className={`uppercase text-blue-light text-2xl font-semibold flex items-center gap-4 ${align === "left" ? "" : " justify-center"}`}
      >
        {/* Left Side Bar */}
        <span
          className={`px-5 py-0.5 bg-blue-light ${align === "left" ? "hidden" : ""}`}
        ></span>
        {subheading}
        {/* Right Side Bar */}
        <span
          className={`px-5 py-0.5 bg-blue-light ${align === "left" ? "" : ""}`}
        ></span>
      </h4>
      {/* Heading */}
      <h3 className="text-[40px] leading-14 text-dark font-semibold w-xl">
        {heading}
      </h3>
    </div>
  );
}
