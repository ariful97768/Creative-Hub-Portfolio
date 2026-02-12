import contactImg from "@/assets/contact.jpg";

export default function ContactBanner() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${contactImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-cover bg-center h-40 sm:h-60 md:h-100 lg:h-128 w-full"
      ></div>
    </section>
  );
}
