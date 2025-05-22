import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {
    return (
        <section className="reflective h-screen w-full overflow-hidden text-white">
            
            <video
            className= "absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src="videos/spare.mp4" type="video/mp4" />

            </video>

            <div className="relative z-10 flex flex-col items-center h-135 justify-center"> 
                <p className="text-2xl font-bold text-[white] italic  mb-4 h-30">Engineer • Designer • Developer </p>

                {/* Clickable Name */}
                <a
                href="#about"
                className={`${sairaStencil.className} text-6xl font-bold transition-all glitch-blast`}
                data-text="Damian Szydlowski"            
                > 
                    <h1 className={`${sairaStencil.className}`}>
                        Damian Szydlowski
                    </h1>
                </a>                
            </div>
        </section>

    );
};

