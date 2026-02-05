import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}
