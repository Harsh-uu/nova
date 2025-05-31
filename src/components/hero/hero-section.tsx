import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-image.png')",
      }}
      className=" bg-cover bg-center relative"
    >
      <div
        className="h-screen w-full"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      >
        <Navbar />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mx-4 sm:mx-8 md:ml-28 bottom-16 sm:bottom-24 md:bottom-28 absolute text-center sm:text-left"
        >
          Find someone who <br /> listens, not just likes.
        </motion.p>
      </div>
    </div>
  );
};
