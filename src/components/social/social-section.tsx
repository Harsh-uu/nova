import Image from "next/image";

const social = [
  {
    name: "Facebook",
    icon: "/facebook.svg",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
  },
  {
    name: "X",
    icon: "/x.svg",
  },
  {
    name: "Youtube",
    icon: "/youtube.svg",
  },
  {
    name: "Pinterest",
    icon: "/pinterest.svg",
  },
  {
    name: "Tiktok",
    icon: "/tiktok.svg",
  },
];

export const SocialSection = () => {
  return (
    <div className=" pb-10 mt-10 items-center">
      <div className="flex gap-4 sm:gap-6 justify-end text-black">
        {social.map((item) => (
          <Image
            key={item.name}
            className="size-6 md:size-8 hover:invert-75 cursor-pointer"
            src={item.icon}
            alt={item.name}
            width={1000}
            height={1000} 
          />
        ))}
      </div>
      <p className="text-right text-[#343333] mt-4 text-xs sm:text-sm">
        Copyright © 2025 – present. nova. <span className="block sm:inline">All rights reserved.</span>
      </p>
    </div>
  );
};
