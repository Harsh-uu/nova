import Image from "next/image";

export const DesignSection = () => {
  return (
    <div className="bg-[#df66f8] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-white justify-center items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center md:order-1 md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0">
          <Image
            className="hidden lg:block lg:w-72 xl:w-80 md:self-end md:mb-16"
            src="/safety-2.png"
            alt="model"
            width={500}
            height={420}
          />
          <Image
            className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
            src="/safety-1.png"
            alt="model"
            width={500}
            height={420}
          />
          <div className="hidden lg:flex flex-col gap-4 self-center md:self-start md:mt-16">
            <Image
              className="lg:w-72 xl:w-80"
              src="/safety-2.png"
              alt="model"
              width={500}
              height={420}
            />
          </div>
        </div>
        <div className="my-auto  text-center lg:text-left md:w-1/2 lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Design For Safety
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Safety isn't a Bonus Its the Foundation
          </p>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            Warns users about harmful patterns before they escalate
          </p>
        </div>
      </div>
    </div>
  );
};
