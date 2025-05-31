import Image from "next/image";

export const BlurSection = () => {
  return (
    <div className="bg-[#f4a648] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-[#1B1B1B] justify-center items-center gap-8 md:gap-12">
        <div className="my-auto text-center lg:text-left md:w-1/2 lg:max-w-lg md:order-1 order-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            In Feel First Mode Profile Photos are Blurred in initial stage
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            Users explore compatibility through shared values, mood, and answers
            before looks enter the picture
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0 md:order-2 order-1">
          <Image
            className="hidden lg:block w-32 lg:w-40 xl:w-48 md:self-end md:mb-16"
            src="/image-2.png"
            alt="model"
            width={500}
            height={420}
          />
          <Image
            className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
            src="/feel-first.png"
            alt="model"
            width={500}
            height={420}
          />
          <div className="hidden lg:flex flex-col lg:w-40 xl:w-80 self-start mt-4 gap-10">
            <Image
              className=""
              src="/image.png"
              alt="model"
              width={500}
              height={420}
            />
            <Image
              className=""
              src="/image-1.png"
              alt="model"
              width={500}
              height={420}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
