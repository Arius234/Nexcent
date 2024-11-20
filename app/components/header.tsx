"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo/black-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#F5F7FA] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Nexcent Logo"
              width={154}
              height={24}
              className="w-auto h-auto"
            />
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow gap-8">
            <nav className="flex gap-4">
              {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-black font-medium text-[16px] rounded-md hover:bg-white hover:rounded-md py-2 px-3 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-[86px] h-[40px] border rounded-md text-[#4CAF4F] font-medium">
              Login
            </button>
            <button className="w-[96px] h-[40px] bg-[#4CAF4F] text-white rounded-md font-medium">
              Signup
            </button>
          </div>
          <div className="lg:hidden text-end">
            <button
              onClick={toggleMenu}
              className="text-2xl text-black hover:text-[#4CAF4F] transition-colors"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden mt-4 bg-[#F5F7FA] border-t border-gray-200`}
        >
          <nav className="flex flex-col gap-3 py-3">
            {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-black font-medium text-[16px] rounded-md hover:bg-white hover:rounded-md py-2 px-3 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <div className="flex flex-col gap-3 py-3 items-center">
            <button className="w-full max-w-[200px] h-[40px] border rounded-md text-[#4CAF4F] font-medium">
              Login
            </button>
            <button className="w-full max-w-[200px] h-[40px] bg-[#4CAF4F] text-white rounded-md font-medium">
              Signup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
