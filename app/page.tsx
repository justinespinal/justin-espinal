import Image from "next/image";
import About from "./ui/components/About";
import Hero from "./ui/components/Hero";
export default function Home() {
  return (
    <div className="overflow-x-hidden	">
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  );
}
