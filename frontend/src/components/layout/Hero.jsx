import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

      {/* light gradient overlay for balanced clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6">
          {/* title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight uppercase mb-4 drop-shadow-md">
            Vacation <br /> Ready
          </h1>

          {/* subtitle */}
          <p className="text-sm md:text-lg font-light mb-6 drop-shadow-sm">
            Explore our vacation-ready outfits with fast worldwide shipping
          </p>

          {/* button */}
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg font-medium shadow-md hover:bg-gray-200 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
