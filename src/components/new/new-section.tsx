import Image from "next/image";
import { motion } from "framer-motion";

export const NewSection = () => {
  return (
    <motion.div 
      id="new-section" 
      className="bg-[#ffb3c6] py-10 md:py-20 px-4 sm:px-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <motion.div 
              className="text-[#343333] my-auto text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  DATING SHOULDN'T <br /> DRAIN YOU.
                </motion.h1>
                <motion.p 
                  className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  You deserve better. Nova is built to make dating feel human again. <br />No pressure. No ghosting. Just safe, soft, and soulful connection.
                </motion.p>
                <motion.button 
                  className="bg-[#343333] text-white cursor-pointer hover:text-[#343333] hover:bg-white px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-full mt-8 md:mt-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See what's new
                </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image className="h-auto w-full rounded-2xl max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl" src="/new-model.png" alt="model" width={500} height={420}/>
            </motion.div>
        </div>
    </motion.div>
  );
};
