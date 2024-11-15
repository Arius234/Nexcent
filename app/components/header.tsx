"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  // Menu fermé par défaut
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#F5F7FA] py-4 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Nexcent Logo"
              className="w-[154.49px] h-[24px]"
            />
          </div>

          {/* Navbar visible sur grand écran (>= 992px) */}
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

          {/* Boutons visibles sur grand écran (>= 992px) */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-[86px] h-[40px] border rounded-md text-[#4CAF4F] font-medium">
              Login
            </button>
            <button className="w-[96px] h-[40px] bg-[#4CAF4F] text-white rounded-md font-medium">
              Signup
            </button>
          </div>

          {/* Menu Hamburger visible sur mobile et tablette (<= 991px) */}
          <div className="lg:hidden text-end">
            <button onClick={toggleMenu} className="text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile et tablette (affiché quand isOpen est true) */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
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

          {/* Boutons sous le menu hamburger */}
          <div className="flex flex-col gap-3 py-3">
            <button className="w-[86px] h-[40px] border rounded-md text-[#4CAF4F] font-medium">
              Login
            </button>
            <button className="w-[96px] h-[40px] bg-[#4CAF4F] text-white rounded-md font-medium">
              Signup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}