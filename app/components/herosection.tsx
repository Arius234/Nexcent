"use client";
import Image from "next/image";
import Herosection from "@/app/assets/herosection/herosection.png";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-36 py-24 gap-12 bg-[#F5F7FA] w-full overflow-x-hidden"
      style={{
        margin: 0, 
      }}
    >
      <div className="flex flex-col justify-center w-full lg:w-[60%] gap-6 opacity-100 md:items-center md:text-center lg:items-start lg:text-left">
        <h1
          className="text-[32px] lg:text-[64px] font-semibold leading-[40px] lg:leading-[76px]"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
          }}
        >
          Lessons and insights <br />
          <span style={{ color: "#4CAF4F" }}>from 8 years</span>
        </h1>
        <p
          className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#717171]"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          Where to grow your business as a photographer: site or social media
        </p>
        <button
          className="w-[128px] h-[52px] bg-[#4CAF4F] text-white rounded-tl-[4px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] transition-opacity duration-300"
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            padding: "14px 32px",
            textAlign: "center",
          }}
        >
          Register
        </button>
      </div>
      <div
        className="flex items-center justify-center w-full lg:w-[50%] h-auto opacity-100"
        style={{
          maxWidth: "400px",
        }}
      >
        <Image
          src={Herosection}
          alt="premiere photo d'illustration pour l'accueil"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
