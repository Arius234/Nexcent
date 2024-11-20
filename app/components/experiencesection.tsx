"use client";
import Image from "next/image";
import frame1 from "@/app/assets/frame/frame1.png"; 

export default function ExperienceSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-[1440px] mx-auto px-6 lg:px-36 py-12 gap-8">
      <div className="flex-shrink-0 w-full lg:w-[442px] h-auto flex justify-center items-center">
        <Image
          src={frame1}
          alt="frame"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-[661px]">
        <h2 className="text-[#4D4D4D] font-semibold text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] text-left">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-[#717171] font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-[#4CAF4F] text-white font-medium text-[16px] leading-[24px] px-6 py-3 rounded-md w-[151px]">
          Learn more
        </button>
      </div>
    </section>
  );
}
