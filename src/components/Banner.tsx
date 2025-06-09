"use client";
import { Saira_Stencil_One } from "next/font/google";
import { useRef, useState, useEffect } from "react";


const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.playbackRate > 0 && video.currentTime >= video.duration) {
        video.pause();
      }
      if (video.playbackRate < 0 && video.currentTime <= 0) {
        video.pause();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

    return (
    <div className="w-full h-full flex items-center justify-center px-6 md:translate-x-[-160px]">
      <div className="max-w-6xl w-full flex justify-between items-center gap-70">

        {/* LEFT: Text Stack */}
        <div className="flex flex-col-reverse gap-6 text-center md:text-left ">

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://github.com/yourhandle" className="text-sm text-white px-4 py-2 border border-white hover:bg-white hover:text-black transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourhandle" className="text-sm text-white px-4 py-2 border border-white hover:bg-white hover:text-black transition">
              LinkedIn
            </a>
            <a href="/resume.pdf" className="text-sm text-white px-4 py-2 border border-white hover:bg-white hover:text-black transition">
              Resume
            </a>
            <a href="mailto:youremail@example.com" className="text-sm text-white px-4 py-2 border border-white hover:bg-white hover:text-black transition">
              Email
            </a>
          </div>

          {/* Title + Subtitle */}
          <div className="space-y-4">
          <div
onMouseEnter={async () => {
    const video = videoRef.current;
    if (!video) return;
    setIsHovering(true);
  
    try {
      video.pause(); // make sure it's not already running anything
      video.playbackRate = 1;
      await video.play();
    } catch (err) {
      console.warn("Forward play error:", err);
    }
  }}
  
  onMouseLeave={() => {
    const video = videoRef.current;
    if (!video) return;
    setIsHovering(false);
  
    video.pause();
  
    const reverse = () => {
      if (!video || video.currentTime <= 0) return;
      video.currentTime = Math.max(0, video.currentTime - 0.033); // approx 30fps
      requestAnimationFrame(reverse);
    };
  
    reverse();
  }}
  
  
  className="relative group inline-block w-fit"
>
            <h1
                className={`crt-scan text-5xl md:text-9xl font-bold text-white relative ${sairaStencil.className}`}
                data-text="Damian Szydlowski"
            >
                Damian Szydlowski
            </h1>
              {/* Robotic Arm Hatch Animation */}
              <video
                ref={videoRef}
                src="/videos/transparent_arm.webm"
                muted
                playsInline
                className="absolute top-[-275px] left-[34%] w-[800px] pointer-events-none opacity-100"
              />
            </div>

            <p className="italic text-gray-300 text-3xl">
              Engineer • Designer • Developer
            </p>            
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-100 h-100 border border-cyan-400 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg shrink-0">
          <img
            src="/images/profilepic.jpg"
            alt="Damian"
            className="w-full h-full object-cover opacity-90 mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
}
