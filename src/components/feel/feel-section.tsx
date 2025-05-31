import Image from "next/image";
import { motion } from "framer-motion";

export const FeelSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#ff5b5b] py-10 md:py-20 px-4 sm:px-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row text-white justify-center items-center gap-8 md:gap-12">
        <motion.div
          className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0"
          variants={imageContainerVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              className="hidden lg:block w-32 lg:w-40 xl:w-48 md:self-start md:mt-16"
              src="/image1.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <Image
              className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
              src="/mk1.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <Image
              className="hidden lg:flex lg:w-40 xl:w-80 self-center md:self-end md:mb-16"
              src="/image2.png"
              alt="model"
              width={500}
              height={420}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="my-auto text-center lg:text-left md:w-1/2 lg:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            variants={itemVariants}
          >
            Feel First Mode
          </motion.h1>
          <motion.p
            className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            variants={itemVariants}
            transition={{ delay: 0.1, ...itemVariants.visible.transition }}
          >
            "Feel First, Match Later" <br />
            Lets Feelings lead the way not just faces.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
