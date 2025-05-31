import Image from "next/image";

export const FeelSection = () => {
  return (
    <div className="bg-[#ff5b5b] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-white justify-center items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0">
          <Image
            className="hidden lg:block w-32 lg:w-40 xl:w-48 md:self-start md:mt-16"
            src="/image1.png"
            alt="model"
            width={500}
            height={420}
          />
          <Image
            className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
            src="/mk1.png"
            alt="model"
            width={500}
            height={420}
          />
            <Image
              className="hidden lg:flex lg:w-40 xl:w-80 self-center md:self-end md:mb-16"
              src="/image2.png"
              alt="model"
              width={500}
              height={420}
            />
        </div>
        <div className="my-auto text-center lg:text-left md:w-1/2 lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Feel First Mode
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            "Feel First, Match Later" <br />
            Lets Feelings lead the way not just faces.
          </p>
        </div>
      </div>
    </div>
  );
};
