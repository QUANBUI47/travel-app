"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/tabs";

import { Star, MapPin, Heart, Forward } from "lucide-react";
import { CusChip } from "../common/CusChip";
import { CusCard } from "../common/CusCard";
import { Button } from "@heroui/button";
import { TravelerType } from "@/types/review";

export default function ExplorePopularCities() {
  const explorePopularCities = [
    {
      id: 1,
      name: "New York",
      banner: "/images/cities/new-york/banner.png",
      description:
        "Explore the city that never sleeps, where iconic landmarks, culture, and modern lifestyle blend into unforgettable experiences.",
      categories: [
        "Public Transportations",
        "Business Tours",
        "Local Visit",
      ],
      tours: [
        {
          id: 1,
          name: "New York City Highlights Tour",
          image: "/images/cities/new-york/tour-1.png",
          duration: "3 hours",
          transport: "Public Transportations",
          plan: TravelerType.GROUP,
          rating: 4.6,
          review: 742,
          cost: 45,
        },
        {
          id: 2,
          name: "Central Park Walking Experience",
          image: "/images/cities/new-york/tour-2.png",
          duration: "2 hours",
          transport: "Local Visit",
          plan: TravelerType.FAMILY,
          rating: 4.7,
          review: 615,
          cost: 30,
        },
      ],
    },

    {
      id: 2,
      name: "California",
      banner: "/images/cities/california/banner.png",
      description:
        "From golden beaches to vibrant cities, California offers diverse landscapes and endless adventures.",
      categories: [
        "Nature & Adventure",
        "Local Visit",
        "Private Transportations",
      ],
      tours: [
        {
          id: 3,
          name: "California Coastline Drive",
          image: "/images/cities/california/tour-1.png",
          duration: "5 hours",
          transport: "Private Transportations",
          plan: TravelerType.COUPLE,
          rating: 4.8,
          review: 531,
          cost: 65,
        },
      ],
    },

    {
      id: 3,
      name: "Alaska",
      banner: "/images/alaska-banner.svg",
      description:
        "Discover untouched wilderness, majestic mountains, and breathtaking natural scenery in Alaska.",
      categories: [
        "Nature & Adventure",
        "Public Transportations",
        "Local Visit",
        "Business Tours",
        "Private Transportations",
      ],
      tours: [
        {
          id: 4,
          name: "Explore Alaska Nature & Wildlife",
          image: "/images/cities/alaska/tour-1.png",
          duration: "4 hours",
          transport: "Nature & Adventure",
          plan: TravelerType.FAMILY,
          rating: 4.7,
          review: 584,
          cost: 50,
        },
        {
          id: 5,
          name: "Alaska Glacier Cruise",
          image: "/images/cities/alaska/tour-2.png",
          duration: "3 hours",
          transport: "Public Transportations",
          plan: TravelerType.GROUP,
          rating: 4.6,
          review: 463,
          cost: 55,
        },
      ],
    },

    {
      id: 4,
      name: "Sidney",
      banner: "/images/cities/sidney/banner.png",
      description:
        "Enjoy stunning harbors, world-famous beaches, and a vibrant cultural scene in Sidney.",
      categories: [
        "Local Visit",
        "Nature & Adventure",
        "Public Transportations",
      ],
      tours: [
        {
          id: 6,
          name: "Sidney Opera House Tour",
          image: "/images/cities/sidney/tour-1.png",
          duration: "2 hours",
          transport: "Local Visit",
          plan: TravelerType.GROUP,
          rating: 4.5,
          review: 398,
          cost: 40,
        },
      ],
    },

    {
      id: 5,
      name: "Dubai",
      banner: "/images/cities/dubai/banner.png",
      description:
        "Experience luxury, futuristic architecture, and desert adventures in the heart of the Middle East.",
      categories: [
        "Private Transportations",
        "Business Tours",
        "Nature & Adventure",
      ],
      tours: [
        {
          id: 7,
          name: "Dubai Desert Safari",
          image: "/images/cities/dubai/tour-1.png",
          duration: "6 hours",
          transport: "Private Transportations",
          plan: TravelerType.PREMIUM,
          rating: 4.8,
          review: 812,
          cost: 75,
        },
      ],
    },

    {
      id: 6,
      name: "London",
      banner: "/images/cities/london/banner.png",
      description:
        "Step into history and modern elegance with iconic landmarks and royal heritage in London.",
      categories: [
        "Business Tours",
        "Public Transportations",
        "Local Visit",
      ],
      tours: [
        {
          id: 8,
          name: "London City Sightseeing Bus",
          image: "/images/cities/london/tour-1.png",
          duration: "2 hours",
          transport: "Public Transportations",
          plan: TravelerType.GROUP,
          rating: 4.6,
          review: 921,
          cost: 35,
        },
      ],
    },

    {
      id: 7,
      name: "Tokyo",
      banner: "/images/cities/tokyo/banner.png",
      description:
        "Discover the perfect blend of tradition and innovation in Japan’s vibrant capital city.",
      categories: [
        "Local Visit",
        "Business Tours",
        "Public Transportations",
      ],
      tours: [
        {
          id: 9,
          name: "Tokyo Cultural City Tour",
          image: "/images/cities/tokyo/tour-1.jpg",
          duration: "4 hours",
          transport: "Public Transportations",
          plan: TravelerType.GROUP,
          rating: 4.7,
          review: 678,
          cost: 48,
        },
      ],
    },

    {
      id: 8,
      name: "Delhi",
      banner: "/images/cities/delhi/banner.jpg",
      description:
        "Explore ancient history, vibrant streets, and rich cultural heritage in the heart of India.",
      categories: [
        "Local Visit",
        "Business Tours",
        "Public Transportations",
      ],
      tours: [
        {
          id: 10,
          name: "Old & New Delhi City Tour",
          image: "/images/cities/delhi/tour-1.jpg",
          duration: "5 hours",
          transport: "Public Transportations",
          plan: TravelerType.FAMILY,
          rating: 4.5,
          review: 512,
          cost: 32,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col mx-auto mt-[40px] gap-[40px]">
      <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[36px] font-bold text-[#1C2B38]">Explore Popular Cities</h1>
          <div className="text-[#1C2B38] text-[16px] font-semibold">
            From iconic landmarks to hidden gems, explore popular cities filled with culture and stories.
            <br /> Start your journey and experience destinations that travelers love the most.
          </div>
        </div>
        <Tabs
          aria-label="Popular Cities"
          variant="light"
          classNames={{
            tabList: "gap-4 w-full relative p-0 justify-center mb-8 flex-wrap",
            cursor: "hidden",
            tab: "max-w-fit px-8 h-[44px] border border-[#7BBCB0] rounded-full transition-colors data-[selected=true]:bg-[#7BBCB0] data-[selected=true]:border-[#7BBCB0] data-[hover=true]:opacity-80",
            tabContent: "group-data-[selected=true]:text-white text-[#495560] font-bold text-sm",
          }}
        >
          {explorePopularCities.map((city) => (
            <Tab key={city.id} title={city.name}>
              <div className="flex flex-col gap-40">
                {/* City Banner & Info */}
                <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${city.banner})`,
                    backgroundSize: "cover",
                    filter: "brightness(1.15) contrast(1.02)",
                  }}>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[400px] w-full max-w-[1110px] max-h-[275px] px-5 py-7 rounded-[10px] grid grid-cols-2 gap-10 bg-white"
                    style={{
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
                    }}>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-[64px] font-bold text-[#1C2B38]">{city.name}</h2>
                      <p className="text-[#778088] text-base font-semibold leading-relaxed line-clamp-3">{city.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {city.categories.map((cat, idx) => (
                          <CusChip key={idx} category={cat} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tours Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {city.tours.map((tour) => (
                    <CusCard key={tour.id} {...tour} />
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <div className="relative w-full mx-auto h-[800px]" style={{
        backgroundImage: `url(/images/banner-p1.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-end py-50">
          <div className="flex flex-col gap-5 w-[600px]">
            <div className="flex flex-col gap-2">
              <div className="p-2 bg-[#AFFFF0] rounded-[30px] text-[#1C2B38] font-bold text-[12px] w-fit">TRENDING NOW</div>
              <div className="text-[36px] font-bold text-white">Wilderlife of Alaska</div>
              <div className="flex items-center justify-start gap-2">
                <MapPin size={16} className="text-white" />
                <span className="font-bold text-white text-xs">Alaska, United States</span>
                <div className="w-[1px] h-[16px] bg-white/30"></div>
                <Star size={16} className="fill-[#FFDA32] text-[#FFDA32]" />
                <span className="font-bold text-white text-xs">4.9</span>
                <span className="text-white text-xs font-semibold">(120 reviews)</span>
              </div>
              <div className="text-white text-base font-semibold leading-relaxed line-clamp-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <Button className="bg-[#FFDA32] rounded-[40px] px-7 h-[50px] flex items-center py-2 text-[#1C2B38] font-bold text-[16px] w-fit cursor-pointer">Book Now</Button>
              <div className="w-[1px] h-[16px] bg-white/30"></div>
              <div className="flex items-center justify-center bg-white/20 border border-white/30 rounded-full w-[50px] h-[50px]">
                <Heart size={16} className="text-white" />
              </div>
              <div className="flex items-center justify-center bg-white/20 border border-white/30 rounded-full w-[50px] h-[50px]">
                <Forward size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}