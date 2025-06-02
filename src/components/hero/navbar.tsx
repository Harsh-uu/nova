"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isSidebarOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = ''; 
      html.style.overflow = ''; 
    }

    return () => {
      body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <>
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
          <p className="font-bold ml-2 text-3xl sm:text-4xl md:text-5xl hidden md:block">nova</p>
        </div>
        
        <div className="hidden md:block">
          <ul className="flex gap-10 text-sm font-medium">
            <li className="relative cursor-pointer hover:text-white group">
              Mission
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
            <li className="relative cursor-pointer hover:text-white group">
              Impact
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
            <li className="relative cursor-pointer hover:text-white group">
              Labs
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
          </ul>
        </div>
        
        <h1 className="relative hidden md:block text-sm font-medium cursor-pointer hover:text-white group">
          Careers
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </h1>

        <button
          onClick={toggleSidebar}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
        </button>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="size-8"
            />
            <p className="font-bold ml-2 text-2xl text-white">nova</p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <nav className="flex flex-col p-6 space-y-6">
          <a href="#" className="text-white text-lg font-medium hover:text-white/60 transition-colors">
            Mission
          </a>
          <a href="#" className="text-white text-lg font-medium hover:text-white/60 transition-colors">
            Impact
          </a>
          <a href="#" className="text-white text-lg font-medium hover:text-white/60 transition-colors">
            Labs
          </a>
          <a href="#" className="text-white text-lg font-medium hover:text-white/60 transition-colors">
            Careers
          </a>
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
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
        <p className="font-bold ml-2 text-3xl hidden sm:block sm:text-4xl md:text-5xl text-[#FF4B6E]">nova</p>
      </Link>
    </nav>
  );
}