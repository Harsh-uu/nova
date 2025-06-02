import Image from "next/image";
import Link from "next/link";
import { SocialSection } from "../social/social-section";

interface Props{
  bgColor?: string;
}

const filler = [
  {
    heading: "Support",
    subheadings: ["FAQ", "Contact Us", "Events", "Guidelines", "Safety Tips"],
  },
  {
    heading: "Legal",
    subheadings: [
      "Terms and Conditions",
      "Privacy Policy",
      "Nova Data Retention and Deletion Policy",
      "Nova Content Moderation Policy",
    ],
  },
  {
    heading: "Company",
    subheadings: ["Careers", "Investors"],
  },
];

export const FooterSection = ({bgColor}:Props) => {
  const footerStyles = bgColor ? { backgroundColor: bgColor } : {};
  return (
    <footer style={footerStyles} className={`px-6 py-8 md:py-0 text-black `}>
      <div className={`flex flex-col md:flex-row md:justify-between lg:justify-evenly items-center md:items-startmd:h-auto lg:h-80`}>
      <div className="flex flex-col items-center md:items-start md:justify-between w-full md:w-auto mb-10 md:mb-0">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center justify-center md:justify-start">
            <Image
              src="/logo-2.png"
              alt="logo"
              width={100}
              height={100}
              className="size-8 sm:size-10 md:size-12"
            />
            <p className="text-[#FF4B6E] font-bold ml-2 text-3xl sm:text-4xl md:text-5xl">
              nova
            </p>
          </Link>
          <Link href="/info/about-us" className="font-semibold md:ml-2 hover:text-black/60 text-lg text-center md:text-left">
            About Us
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-6 md:mt-10 w-full sm:w-auto max-w-md sm:max-w-none">
          <div className="flex gap-2 group cursor-pointer hover:bg-black border-2 w-56 md:w-48 lg:w-48 xl:w-56 mx-auto items-center px-2 py-2 rounded-lg">            <Image
              src="/play-store.png"
              alt="playstore"
              width={40}
              height={30}
              style={{ width: "auto", height: "auto" }}
              className="object-contain md:w-6 lg:w-8 xl:w-10"
            />
            <div>
              <p className="text-sm md:text-xs group-hover:text-white">Get it on</p>
              <p className="font-semibold md:text-sm group-hover:text-white">Google Play Store</p>
            </div>
          </div>
          <div className="flex gap-2 group cursor-pointer hover:bg-black border-2 w-56 md:w-48 lg:w-48 xl:w-56 mx-auto items-center px-2 py-2 rounded-lg">            <Image
              src="/app-store.png"
              alt="appstore"
              width={40}
              height={30}
              style={{ width: "auto", height: "auto" }}
              className="object-contain md:w-6 lg:w-8 xl:w-10 group-hover:invert"
            />
            <div>
              <p className="text-sm md:text-xs group-hover:text-white">Get it on</p>
              <p className="font-semibold md:text-sm group-hover:text-white">Apple Store</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  md:gap-8 lg:gap-16 xl:gap-24 w-full md:w-auto mt-10 md:mt-0">
        {filler.map((item) => (
          <div
            key={item.heading}
            className="mb-8 md:mb-0 text-center md:text-left"
          >
            <p className="font-semibold text-lg mb-3 md:mb-4">{item.heading}</p>
            <ul className="flex flex-col space-y-2 md:space-y-3">
              {item.subheadings.map((subheading) => (
                <li
                  key={subheading}
                  className="text-sm hover:text-black/60 cursor-pointer"
                >
                  <Link href={`/info/${encodeURIComponent(subheading.replace(/\s+/g, '-').toLowerCase())}`}>
                    {subheading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      <SocialSection/>
    </footer>
  );
};
