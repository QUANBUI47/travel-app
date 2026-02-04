import { Tour } from "@/types/tour";
import { TravelerType } from "@/types/review";
import { CusCard } from "../common/CusCard";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function TourInToday() {
  // FAKE DATA: gom tất cả tour từ explorePopularCities
  const tours: Tour[] = [
    {
      id: 1,
      name: "New York City Highlights Tour",
      image: "/images/cities/new-york/tour-1.png",
      duration: "3 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.GROUP,
      rating: 4.6,
      review: 742,
      cost: 45,
      location: "New York",
    },
    {
      id: 2,
      name: "Central Park Walking Experience",
      image: "/images/cities/new-york/tour-2.png",
      duration: "2 hours",
      transport: "Local Visit",
      travelerType: TravelerType.FAMILY,
      rating: 4.7,
      review: 615,
      cost: 30,
      location: "New York",
    },
    {
      id: 3,
      name: "California Coastline Drive",
      image: "/images/cities/california/tour-1.png",
      duration: "5 hours",
      transport: "Private Transportations",
      travelerType: TravelerType.COUPLE,
      rating: 4.8,
      review: 531,
      cost: 65,
      location: "California",
    },
    {
      id: 4,
      name: "Explore Alaska Nature & Wildlife",
      image: "/images/cities/alaska/tour-1.png",
      duration: "4 hours",
      transport: "Nature & Adventure",
      travelerType: TravelerType.FAMILY,
      rating: 4.7,
      review: 584,
      cost: 50,
      location: "Alaska",
    },
    {
      id: 5,
      name: "Alaska Glacier Cruise",
      image: "/images/cities/alaska/tour-2.png",
      duration: "3 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.GROUP,
      rating: 4.6,
      review: 463,
      cost: 55,
      location: "Alaska",
    },
    {
      id: 6,
      name: "Sidney Opera House Tour",
      image: "/images/cities/sidney/tour-1.png",
      duration: "2 hours",
      transport: "Local Visit",
      travelerType: TravelerType.GROUP,
      rating: 4.5,
      review: 398,
      cost: 40,
      location: "Sidney",
    },
    {
      id: 7,
      name: "Dubai Desert Safari",
      image: "/images/cities/dubai/tour-1.png",
      duration: "6 hours",
      transport: "Private Transportations",
      travelerType: TravelerType.PREMIUM,
      rating: 4.8,
      review: 812,
      cost: 75,
      location: "Dubai",
    },
    {
      id: 8,
      name: "London City Sightseeing Bus",
      image: "/images/cities/london/tour-1.png",
      duration: "2 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.GROUP,
      rating: 4.6,
      review: 921,
      cost: 35,
      location: "London",
    },
    {
      id: 9,
      name: "Tokyo Cultural City Tour",
      image: "/images/cities/tokyo/tour-1.jpg",
      duration: "4 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.GROUP,
      rating: 4.7,
      review: 678,
      cost: 48,
      location: "Tokyo",
    },
    {
      id: 10,
      name: "Old & New Delhi City Tour",
      image: "/images/cities/delhi/tour-1.jpg",
      duration: "5 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.FAMILY,
      rating: 4.5,
      review: 512,
      cost: 32,
      location: "Delhi",
    },
  ];

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="w-full mx-auto border-b border-[#E5E5E5] pb-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold text-[#1C2B38]">
          Related tours in Today
        </h2>

        {tours.length > 8 && (
          <Button
            className="w-[150px] h-[54px] rounded-[40px] bg-[#FFDA32] text-base font-bold text-[#1C2B38]"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "View Less" : "View All"}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(viewAll ? tours : tours.slice(0, 8)).map((tour) => (
          <CusCard
            key={tour.id}
            id={tour.id}
            name={tour.name}
            image={tour.image}
            duration={tour.duration}
            transport={tour.transport}
            plan={tour.travelerType}
            rating={tour.rating}
            review={tour.review}
            cost={tour.cost}
          />
        ))}
      </div>
    </div>
  );
}
