'use client';
import { Saira_Stencil_One } from "next/font/google";
import { useEffect, useState } from 'react';

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
    const [showNav, setShowNav]= useState(false);

    useEffect(() =>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                setShowNav(!entry.isIntersecting);
            },
            {threshold:0.5}
        );

        const target = document.querySelector('#top');
        if(target) observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return(
        <header
        className={`fixed top-0 w-full bg-[#01000F] text-white shadow-md z-50 transition-transform duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
        >
            <nav className="flex justify-between items-center px-6 py-4 mx-auto">
                {/* Name */}
                <a href="#top" className="text-2xl font-bold tracking-wide hover:opacity-80 transition">
                    <h1 className={`${sairaStencil.className}`}>
                        Damian Szydlowski
                    </h1>
                </a>

                {/* Nav Links */}
                <ul className="flex space-x-6 text-sm">
                  <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
                  <li> <a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
                  <li> <a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>                 
                  <li> <a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
