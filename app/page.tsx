import Image from "next/image";

import Navbar from "@/components/navbar";
import Hero from "@/app/hero/hero";
import Testi from "@/app/testi/page";
import Coeur from "@/app/Coeur/page"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-stone-950 text-white flex flex-col">
      
     {/* navbar  */}
    <Navbar />
     {/* contenu principal  */}
      <main className="grow">
        <Hero />
        <Testi />
        <Coeur />

        
      </main>

    </div>
  );
}
