"use client";
import React from "react";
import Image from "next/image";
import caring1 from "@/app/assets/caringsection/caring1.png";
import caring2 from "@/app/assets/caringsection/caring2.png";
import caring3 from "@/app/assets/caringsection/caring3.png";

const CaringSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-12 px-4 lg:px-8 mt-16">
      <h2 className="text-[28px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[44px] text-[#4D4D4D] text-center max-w-[1110px]">
        Caring is the new marketing
      </h2>
      <p className="text-[16px] font-normal leading-[24px] text-[#717171] text-center max-w-[628px]">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's
        joining the community, read about how our community are increasing their membership income and lot's more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <div className="relative">
          <div className="w-full h-[200px] lg:h-[286px] overflow-hidden rounded-lg">
            <Image
              src={caring1}
              alt="Creating Streamlined Safeguarding Processes with OneRen"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[317px] bg-[#F5F7FA] rounded-lg flex flex-col items-center justify-center shadow-lg p-4 gap-4 z-10">
            <p className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-center text-[#717171]">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-[#4CAF4F]"
              >
                Read more
              </a>
              <span className="text-[#4CAF4F] text-[20px] font-semibold">→</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[200px] lg:h-[286px] overflow-hidden rounded-lg">
            <Image
              src={caring2}
              alt="What are your safeguarding responsibilities?"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[317px] bg-[#F5F7FA] rounded-lg flex flex-col items-center justify-center shadow-lg p-4 gap-4 z-10">
            <p className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-center text-[#717171]">
              What are your safeguarding responsibilities and how can you manage them?
            </p>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-[#4CAF4F]"
              >
                Read more
              </a>
              <span className="text-[#4CAF4F] text-[20px] font-semibold">→</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[200px] lg:h-[286px] overflow-hidden rounded-lg">
            <Image
              src={caring3}
              alt="Revamping the Membership Model with Triathlon Australia"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[317px] bg-[#F5F7FA] rounded-lg flex flex-col items-center justify-center shadow-lg p-4 gap-4 z-10">
            <p className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-center text-[#717171]">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px] text-[#4CAF4F]"
              >
                Read more
              </a>
              <span className="text-[#4CAF4F] text-[20px] font-semibold">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaringSection;
