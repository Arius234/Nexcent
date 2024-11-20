"use client";
import Image from "next/image";
import vector4 from "@/app/assets/vector/Vector4.png"; 
import vector1 from "@/app/assets/vector/vector1.png";
import vector2 from "@/app/assets/vector/vector2.png";
import vector3 from "@/app/assets/vector/vector3.png";

export default function BusinessReinventionSection() {
  const stats = [
    { img: vector4, number: "2,245,341", text: "Members" },
    { img: vector1, number: "1,453,210", text: "Visitors" },
    { img: vector2, number: "987,654", text: "Downloads" },
    { img: vector3, number: "3,456,789", text: "Subscribers" },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-between items-start w-full px-6 lg:px-36 py-12 bg-[#F5F7FA] gap-12">
      <div className="flex flex-col w-full lg:w-[540px] gap-4">
        <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-[44px]">
          Helping a local
        </h2>
        <h2 className="text-[36px] font-semibold text-[#4CAF4F] leading-[44px]">
          business reinvent itself
        </h2>
        <p className="text-[14px] font-normal text-[#717171] leading-[20px]">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-[540px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >

            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Image
                src={item.img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[28px] font-bold text-[#4D4D4D] leading-[36px]">
                {item.number}
              </p>
              <p className="text-[16px] font-normal text-[#717171] leading-[24px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
