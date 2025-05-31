import Image from "next/image";

export const NewSection = () => {
  return (
    <div id="new-section" className="bg-[#ffb3c6] py-10 md:py-20 px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-[#343333] my-auto text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold">DATING SHOULDN'T <br /> DRAIN YOU.</h1>
                <p className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">You deserve better. Nova is built to make dating feel human again. <br />No pressure. No ghosting. Just safe, soft, and soulful connection.</p>
                <button className="bg-[#343333] text-white cursor-pointer hover:text-[#343333] hover:bg-white px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-full mt-8 md:mt-16">See what's new</button>
            </div>
            <Image className="h-auto w-full rounded-2xl max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl" src="/new-model.png" alt="model" width={500} height={420}/>
        </div>
    </div>
  );
};
