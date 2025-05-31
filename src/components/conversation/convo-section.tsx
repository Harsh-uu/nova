import Image from "next/image";

export const ConvoSection = () => {
  return (
    <div className="bg-[#fff352] py-10 md:py-20 px-4 sm:px-10">
      <div className="flex flex-col md:flex-row text-[#1B1B1B] justify-center items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-4 md:w-1/2 mt-8 md:mt-0">
          <Image
            className="w-48 sm:w-56 md:w-56 lg:w-64 xl:w-72"
            src="/kind-start.png"
            alt="model"
            width={500}
            height={420}
          />
          <div className="hidden lg:flex flex-col gap-4 self-center md:self-end md:mb-16">
            <Image
              className="lg:w-72 xl:w-80"
              src="/image-3.png"
              alt="model"
              width={500}
              height={420}
            />
          </div>
        </div>
        <div className="my-auto  text-center lg:text-left md:w-1/2 lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Kind Start Conversation
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Good Conversations Don't start with "Hey”{" "}
          </p>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            Nova Offers emotionally intelligent icebreakers playful, curious, or thoughtful Designed to Skip awkward intros and spark Warm genuine chats
          </p>
        </div>
      </div>
    </div>
  );
};
