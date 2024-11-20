"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import t from "@/app/assets/sectionwithtextandimages/t.png";
import frame2 from "@/app/assets/sectionwithtextandimages/frame2.png";
import right from "@/app/assets/sectionwithtextandimages/Right.png";

export default function SectionWithTextAndImages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between w-full px-6 lg:px-36 py-12 gap-12 mx-auto bg-[#F5F7FA]">
      <div
        className={`w-full lg:w-[326px] h-auto rounded-[8px_0px_0px_0px] shadow-lg transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={t}
          alt="Photo principale"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[748px]">
        <p
          className={`text-[#717171] font-medium text-[16px] leading-[24px] transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed
          augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem
          eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada
          enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p
          className={`text-[#4CAF4F] font-semibold text-[20px] leading-[28px] transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Tim Smith
        </p>
        <p
          className={`text-[#89939E] font-normal text-[16px] leading-[24px] transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          British Dragon Boat Racing Association
        </p>
        <div className="flex items-center gap-4">
          <div className="w-auto h-[48px]">
            <Image
              src={frame2}
              alt="Photo secondaire"
              className="w-auto h-full object-contain"
            />
          </div>
          <p
            className={`text-[#4CAF4F] font-semibold text-[18px] leading-[28px] transition-opacity duration-500 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Meet all customers
          </p>
          <div className="w-[24px] h-[24px]">
            <Image
              src={right}
              alt="Flèche"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
