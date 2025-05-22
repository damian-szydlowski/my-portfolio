export default function Banner() {
    return (
        <section className="reflective h-screen w-full overflow-hidden text-white flex items-center justify-center">
            
            <video
            className= "absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src="videos/Banner.mp4" type="video/mp4" />

            </video>

            {/* Centered Name */}
            <h1 className="text-6xl font-bold text-white">
                Damian Szydlowski
            </h1>

        </section>

    );
};

