"use client";
import Image from "next/image";
import frame2 from "@/app/assets/frame/frame2.png";

export default function ExperienceSection2() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] px-6 lg:px-36 py-12 mx-auto gap-12">
      <div className="flex items-center justify-center w-full lg:w-[442px] h-auto">
        <Image
          src={frame2}
          alt="frame"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col w-full lg:w-[661px] gap-8">
        <h2 className="text-[28px] lg:text-[36px] font-semibold text-[#4D4D4D] leading-[36px] lg:leading-[44px]">
          How to design your site footer like we did
        </h2>
        <p className="text-[14px] lg:text-[16px] font-normal text-[#717171] leading-[20px] lg:leading-[24px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt.
        </p>
        <button className="bg-[#4CAF4F] text-white font-medium text-[16px] leading-[24px] px-8 py-3 rounded-md w-[151px]">
          Learn more
        </button>
      </div>
    </section>
  );
}
