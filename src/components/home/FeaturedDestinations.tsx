import { Button } from "@heroui/button";
import { CusCard } from "../common/CusCard";
import { useState } from "react";
import { TravelerType } from "@/types/review";

export default function FeaturedDestinations() {
  const tours = [
    {
      id: 1,
      city: "New York",
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
      city: "New York",
      name: "Central Park Walking Experience",
      image: "/images/cities/new-york/tour-2.png",
      duration: "2 hours",
      transport: "Local Visit",
      plan: TravelerType.FAMILY,
      rating: 4.7,
      review: 615,
      cost: 30,
    },

    {
      id: 3,
      city: "California",
      name: "California Coastline Drive",
      image: "/images/cities/california/tour-1.png",
      duration: "5 hours",
      transport: "Private Transportations",
      plan: TravelerType.COUPLE,
      rating: 4.8,
      review: 531,
      cost: 65,
    },

    {
      id: 4,
      city: "Alaska",
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
      city: "Alaska",
      name: "Alaska Glacier Cruise",
      image: "/images/cities/alaska/tour-2.png",
      duration: "3 hours",
      transport: "Public Transportations",
      plan: TravelerType.GROUP,
      rating: 4.6,
      review: 463,
      cost: 55,
    },

    {
      id: 6,
      city: "Sidney",
      name: "Sidney Opera House Tour",
      image: "/images/cities/sidney/tour-1.png",
      duration: "2 hours",
      transport: "Local Visit",
      plan: TravelerType.GROUP,
      rating: 4.5,
      review: 398,
      cost: 40,
    },

    {
      id: 7,
      city: "Dubai",
      name: "Dubai Desert Safari",
      image: "/images/cities/dubai/tour-1.png",
      duration: "6 hours",
      transport: "Private Transportations",
      plan: TravelerType.PREMIUM,
      rating: 4.8,
      review: 812,
      cost: 75,
    },

    {
      id: 8,
      city: "London",
      name: "London City Sightseeing Bus",
      image: "/images/cities/london/tour-1.png",
      duration: "2 hours",
      transport: "Public Transportations",
      plan: TravelerType.GROUP,
      rating: 4.6,
      review: 921,
      cost: 35,
    },

    {
      id: 9,
      city: "Tokyo",
      name: "Tokyo Cultural City Tour",
      image: "/images/cities/tokyo/tour-1.jpg",
      duration: "4 hours",
      transport: "Public Transportations",
      plan: TravelerType.GROUP,
      rating: 4.7,
      review: 678,
      cost: 48,
    },

    {
      id: 10,
      city: "Delhi",
      name: "Old & New Delhi City Tour",
      image: "/images/cities/delhi/tour-1.jpg",
      duration: "5 hours",
      transport: "Public Transportations",
      plan: TravelerType.FAMILY,
      rating: 4.5,
      review: 512,
      cost: 32,
    },
  ];

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="w-full bg-white mx-auto flex flex-col gap-[50px] mt-[40px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-[36px] font-bold text-[#1C2B38]">Featured Destinations</h1>
            <p className="text-[16px] text-[#1C2B38]/60 font-semibold">Discover breathtaking destinations, rich culture, and unforgettable experiences.</p>
          </div>
          {tours.length > 8 && <Button className="w-[150px] flex items-center justify-center rounded-[40px] h-[54px] bg-[#FFDA32] text-base font-bold text-[#1C2B38] cursor-pointer" onClick={() => { setViewAll(!viewAll) }}>{viewAll ? "View Less" : "View All"}</Button>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viewAll ? tours.map((tour) => (
            <CusCard key={tour.id} {...tour} />
          )) : tours.slice(0, 8).map((tour) => (
            <CusCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
      <div className="relative w-full mx-auto h-[1000px]" style={{
        backgroundImage: `url(/images/banner-p2.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-end py-50">
          <div className="flex flex-col gap-5 w-[600px]">
            <div className="flex flex-col gap-2">
              <div className="text-[36px] font-bold text-white">Smart City Tour Mobile App</div>
              <div className="flex items-center justify-start gap-2">
                <span className="font-bold text-white text-base">Available on IOS & Android</span>
              </div>
              <div className="text-white text-base font-semibold leading-relaxed line-clamp-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <Button className="bg-[#FFDA32] rounded-[40px] px-7 h-[50px] flex items-center gap-2 py-2 text-[#1C2B38] font-bold text-[16px] w-fit cursor-pointer"><img src="/icons/ios.svg" alt="ios" width={22} height={26} />Dowload For IOS</Button>
              <Button className="bg-[#FFDA32] rounded-[40px] px-7 h-[50px] flex items-center gap-2 py-2 text-[#1C2B38] font-bold text-[16px] w-fit cursor-pointer"><img src="/icons/android.svg" alt="android" width={23} height={26} />Dowload For Android</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}