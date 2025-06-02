import Image from "next/image";
import { motion } from "framer-motion";

export const DesignSection = () => {
  return (
    <div
      className="bg-[#df66f8] py-10 md:py-20 px-4 sm:px-10"
    >
      <div className="flex flex-col md:flex-row text-white justify-center items-center gap-8 md:gap-12">
        <motion.div
          className="flex flex-col items-center md:order-1 md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              className="hidden lg:block lg:w-72 xl:w-80 md:self-end md:mb-16"
              src="/safety-2.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
              src="/safety-1.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <motion.div
            className="hidden lg:flex flex-col gap-4 self-center md:self-start md:mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              className="lg:w-72 xl:w-80"
              src="/safety-2.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="my-auto text-center lg:text-left md:w-1/2 lg:max-w-lg"
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
            Design For Safety
          </motion.h1>
          <motion.p
            className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Safety isn't a Bonus Its the Foundation
          </motion.p>
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Warns users about harmful patterns before they escalate
          </motion.p>        </motion.div>
      </div>
    </div>
  );
};
