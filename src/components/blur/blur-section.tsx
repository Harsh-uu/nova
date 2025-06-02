import Image from "next/image";
import { motion } from "framer-motion";

export const BlurSection = () => {
  return (
    <div className="bg-[#f4a648] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-[#1B1B1B] justify-center items-center gap-8 md:gap-12">
        <motion.div
          className="my-auto text-center lg:text-left md:w-1/2 lg:max-w-lg md:order-1 order-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            In Feel First Mode Profile Photos are Blurred in initial stage
          </motion.h1>
          <motion.p
            className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Users explore compatibility through shared values, mood, and answers
            before looks enter the picture
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0 md:order-2 order-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              className="hidden lg:block w-32 lg:w-40 xl:w-48 md:self-end md:mb-16"
              src="/image-2.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
              src="/feel-first.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <div className="hidden lg:flex flex-col lg:w-40 xl:w-80 self-start mt-4 gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                className=""
                src="/image.png"
                alt="model"
                width={500}
                height={420}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Image
                className=""
                src="/image-1.png"
                alt="model"
                width={500}
                height={420}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
