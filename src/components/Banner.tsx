"use client";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {
  return (
    <section className="reflective h-screen w-full overflow-hidden text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 relative text-center">
        {/* Role Tags */}
        <p className="text-xl font-medium italic text-gray-300">
          Engineer • Designer • Developer
        </p>

        {/* Name with Hover Arrow Drop */}
        <div className="relative group cursor-pointer" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
          <h1 className={`${sairaStencil.className} text-6xl font-bold glitch-blast`}>
            Damian Szydlowski
          </h1>

          {/* Down arrow drops on hover */}
          <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-cyan-400 text-2xl animate-bounce">↓</span>
          </div>
        </div>

        {/* Sub Tags */}
        <div className="text-sm uppercase tracking-wider text-gray-400 space-x-2">
          <span>Mechatronics</span>
          <span>•</span>
          <span>McMaster</span>
          <span>•</span>
          <span>Team-Builder</span>
        </div>

        {/* Hologram Photo */}
        <div className="mt-6 relative w-52 h-64 border border-cyan-400 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg">
          <img
            src="/images/profilepic.jpg"
            alt="Damian"
            className="w-full h-full object-cover opacity-90 mix-blend-screen"
          />
          <div className="absolute bottom-2 left-2 text-cyan-300 text-xs font-mono opacity-80">
            [ STATUS: ONLINE ]
          </div>
        </div>
      </div>
    </section>
  );
}

