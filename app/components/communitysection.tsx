"use client";
import Image from "next/image";
import community1 from "@/app/assets/CommunityAndFeaturesSection/community1.png"; 
import community2 from "@/app/assets/CommunityAndFeaturesSection/community2.png";
import community3 from "@/app/assets/CommunityAndFeaturesSection/community3.png";

export default function CommunityAndFeaturesSection() {
  const features = [
    {
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      image: community1,
    },
    {
      title: "National Associations",
      description:
        "Our membershipCommunityAndFeaturesSection management software provides full automation of membership renewals and payments.",
      image: community2,
    },
    {
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      image: community3,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full px-6 lg:px-36 py-24 bg-white gap-12">
      <div className="text-center">
        <h2 className="text-[28px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[44px] text-[#4D4D4D] mb-4">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1440px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start bg-white shadow-md rounded-lg p-6"
          >
            <div className="flex items-center justify-center w-[65px] h-[56px] mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                className="w-[65px] h-[56px] object-contain"
              />
            </div>
            <h3 className="text-[20px] lg:text-[28px] font-bold text-[#4D4D4D] text-center leading-[28px] lg:leading-[36px] mb-2">
              {feature.title.split(" ")[0]} <br />
              {feature.title.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-[14px] lg:text-[16px] font-normal text-[#717171] text-center leading-[20px] lg:leading-[24px] max-w-[251px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}