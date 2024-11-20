"use client";
import Image from "next/image";
import client1 from "@/app/assets/clients/client1.png";
import client2 from "@/app/assets/clients/client2.png";
import client3 from "@/app/assets/clients/client3.png";
import client4 from "@/app/assets/clients/client4.png";
import client5 from "@/app/assets/clients/client5.png";
import client6 from "@/app/assets/clients/client6.png";
import client7 from "@/app/assets/clients/client7.png";

export default function OurClients() {
  return (
    <section
      className="flex flex-col items-center justify-center px-8 lg:px-36 py-24 gap-8 bg-white w-full"
    >
      <h2 className="text-[#4D4D4D] font-semibold text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] text-center">
        Our Clients
      </h2>
      <p className="text-[#717171] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-center font-normal">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center w-full max-w-[1152px]">
        <Image
          src={client1}
          alt="Client Logo 2"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client2}
          alt="Client Logo 3"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client3}
          alt="Client Logo 4"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client4}
          alt="Client Logo 5"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client5}
          alt="Client Logo 6"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client6}
          alt="Client Logo 7"
          className="h-[48px] md:h-[64px] object-contain"
        />
        <Image
          src={client7}
          alt="Client Logo 8"
          className="h-[48px] md:h-[64px] object-contain"
        />
      </div>
    </section>
  );
}
