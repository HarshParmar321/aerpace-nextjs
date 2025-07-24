import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* 🔹 Section 1: Image Hero */}
      <section
        className="relative w-full h-[750px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero-bg-home@2x.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight">
            Everyday travel.
            <br />
            Elevated.
          </h1>
        </div>
      </section>

      {/* 🔹 Section 2: Video with Button */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100vw", height: "750px", objectFit: "cover" }}
        >
          <source src="/ecosystem_hero_new.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Bottom Center Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <Link
            href="https://www.aerpace.com/aerverse.html"
            className="bg-white text-black font-semibold text-1xl px-6 py-4 rounded-full shadow hover:bg-gray-200 transition"
          >
            Discover more
          </Link>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
