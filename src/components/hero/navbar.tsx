import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className="flex justify-between px-6 py-2 items-center text-white"
    >
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="size-8 sm:size-10 md:size-12"
        />
        <p className="font-bold ml-2 text-3xl sm:text-4xl md:text-5xl">nova</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-10 text-sm font-medium">
          <li className="cursor-pointer hover:text-white/60">Mission</li>
          <li className="cursor-pointer hover:text-white/60">Careers</li>
          <li className="cursor-pointer hover:text-white/60">Labs</li>
        </ul>
      </div>
      <Link href="/#new-section" className="hidden md:block text-sm font-medium cursor-pointer hover:text-white/60">
        Skip to main
      </Link>
      <p className="hidden md:block text-sm font-medium cursor-pointer hover:text-white/60">Impact</p>
    </nav>
  );
};

export const InfoNav = () => {
  return (
    <nav
      className="flex justify-between px-12 py-2 border-b-2 border-gray-400 items-center text-white"
    >
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          src="/logo-2.png"
          alt="logo"
          width={100}
          height={100}
          className="size-8 sm:size-10 md:size-12"
        />
        <p className="font-bold ml-2 text-3xl sm:text-4xl md:text-5xl text-[#FF4B6E]">nova</p>
      </Link>
    </nav>
  );
}