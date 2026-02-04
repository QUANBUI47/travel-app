import { Location, Tour } from "@/types/tour";
import { TravelerType } from "@/types/review";
import { CusCard } from "../common/CusCard";
import { Button } from "@heroui/button";
import { useState } from "react";

type TourInLocationProps = {
  location: Location;
  excludeTourId: number;
};

export default function TourInLocation({
  location,
}: TourInLocationProps) {
  const tours: Tour[] = [
    {
      id: 1,
      name: "New York City Highlights Tour",
      image: "/images/cities/new-york/tour-1.png",
      duration: "3 hours",
      transport: "Public Transportations",
      travelerType: TravelerType.FAMILY,
      rating: 4.6,
      review: 742,
      cost: 45,
      location: "London", // Should match one of Strict Location types... wait London IS in the list.
    },
    {
      id: 2,
      name: "Central Park Walking Experience",
      image: "/images/cities/new-york/tour-2.png",
      duration: "2 hours",
      transport: "Local Visit",
      travelerType: TravelerType.COUPLE,
      rating: 4.7,
      review: 615,
      cost: 30,
      location: "London",
    },
  ];

  const relatedTours = tours.filter(
    (tour) => tour.location === location
  );

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="w-full mx-auto border-b border-[#E5E5E5] pb-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold text-[#1C2B38]">
          Related tours in {location}
        </h2>
        {tours.length > 8 && <Button className="w-[150px] flex items-center justify-center rounded-[40px] h-[54px] bg-[#FFDA32] text-base font-bold text-[#1C2B38] cursor-pointer" onClick={() => { setViewAll(!viewAll) }}>{viewAll ? "View Less" : "View All"}</Button>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {viewAll ? relatedTours.map((tour) => (
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
        )) : relatedTours.slice(0, 8).map((tour) => (
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
