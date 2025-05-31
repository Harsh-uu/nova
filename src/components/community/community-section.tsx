import Image from "next/image";

export const CommunitySection = () => {
  return (
    <div className="bg-[#82a7ff] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-white justify-center items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0">
          <Image
            className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
            src="/kind-1.png"
            alt="model"
            width={500}
            height={420}
          />
          <div className="hidden lg:flex flex-col gap-4 self-center md:self-end md:mb-16">
            <Image
              className="lg:w-72 xl:w-80"
              src="/kind-2.png"
              alt="model"
              width={500}
              height={420}
            />
          </div>
        </div>
        <div className="my-auto  text-center lg:text-left md:w-1/2 lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            “A Kind Community Polices itself”
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            Every user has a <span className="font-bold">Kindness Score.</span> <br /> Nova tracks behavior patterns ghosting unmatched etiquettes, reported messages and rewards respect.
          </p>
        </div>
      </div>
    </div>
  );
};
