"use client";
import { TravelerType } from "@/types/review";
import { CusSearch, RatingBar, StarRating, CusSelect } from "../common";
import { CheckCheck, Funnel } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

export default function Review() {
  const travelerTypeOptions = [
    { id: "all", value: "all", label: "All travelers" },
    { id: TravelerType.SOLO, value: TravelerType.SOLO, label: "Solo traveler" },
    { id: TravelerType.COUPLE, value: TravelerType.COUPLE, label: "Couple" },
    { id: TravelerType.FAMILY, value: TravelerType.FAMILY, label: "Family" },
    { id: TravelerType.FRIENDS, value: TravelerType.FRIENDS, label: "Friends" },
    { id: TravelerType.BUSINESS, value: TravelerType.BUSINESS, label: "Business" },
  ];

  const ratingOptions = [
    { id: "all", value: "all", label: "All ratings" },
    { id: "5", value: "5", label: "5" },
    { id: "4", value: "4", label: "4" },
    { id: "3", value: "3", label: "3" },
    { id: "2", value: "2", label: "2" },
    { id: "1", value: "1", label: "1" },
  ];

  const [travelerFilter, setTravelerFilter] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const reviews = {
    average: 4.3,
    total: 854,
    cities: "London",

    breakdown: [
      {
        key: "guide",
        label: "Guide",
        value: 4.8,
      },
      {
        key: "transportation",
        label: "Transportation",
        value: 4.6,
      },
      {
        key: "valueForMoney",
        label: "Value for money",
        value: 4.5,
      },
      {
        key: "safety",
        label: "Safety",
        value: 4.0,
      },
    ],

    list: [
      {
        id: 1,
        rating: 5,
        avatar: "/images/avatar/no1.jpg",
        name: "Arlene McCoy",
        title: "Great tour with excellent guide!",
        date: "2 October 2012",
        travelerType: TravelerType.COUPLE,
        description:
          "Good tour, really well organised. The guide was knowledgeable and friendly. The river cruise was the highlight of the experience.",
      },
      {
        id: 2,
        rating: 4,
        name: "Jenny Wilson",
        title: "Informative but disappointed not seeing changing of the guards.",
        avatar: "/images/avatar/no2.jpg",
        date: "2 October 2012",
        travelerType: TravelerType.FAMILY,
        description:
          "Very informative tour, but slightly disappointed not seeing the Changing of the Guard due to scheduling.",
      },
      {
        id: 3,
        rating: 5,
        name: "Ralph Edwards",
        title: "I love their way of style!",
        avatar: "/images/avatar/no3.jpg",
        date: "2 October 2012",
        travelerType: TravelerType.SOLO,
        description:
          "I loved the vintage bus experience. Everything was smooth and well planned.",
      },
      {
        id: 4,
        rating: 4,
        name: "Courtney Henry",
        title: "Enjoyed very much!",
        avatar: "/images/avatar/no4.jpg",
        date: "2 October 2012",
        travelerType: TravelerType.FRIENDS,
        description:
          "Enjoyed very much, especially the cruise part. Would recommend for first-time visitors.",
      },
      {
        id: 5,
        rating: 5,
        name: "Devon Lane",
        title: "Nice!!!!!!!",
        avatar: "/images/avatar/no5.jpg",
        date: "2 October 2012",
        travelerType: TravelerType.BUSINESS,
        description:
          "Nice experience overall. Worth the money and time.",
      },
    ],
  };

  const filteredReviews = reviews.list.filter((review) => {
    const travelerMatch = !travelerFilter || travelerFilter === "all" || review.travelerType === travelerFilter;
    const ratingMatch = !ratingFilter || ratingFilter === "all" || String(review.rating) === ratingFilter;
    const searchMatch = !searchQuery ||
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.description.toLowerCase().includes(searchQuery.toLowerCase());

    return travelerMatch && ratingMatch && searchMatch;
  });

  return (
    <div className="flex flex-col gap-5 pb-[20px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="text-[22px] font-bold text-[#1C2B38]">Customer Review</div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-baseline gap-2">
              <div className="text-[48px] font-bold text-[#1C2B38] leading-none">{reviews.average}</div>
              <div className="text-[23px] text-[#778088] leading-none">{reviews.total} reviews</div>
            </div>
            <StarRating rating={reviews.average} size={50} />
          </div>
        </div>
        <div className="flex flex-col gap-3 flex items-end justify-end">
          {reviews.breakdown.map((item) => (
            <RatingBar
              key={item.key}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 h-[80px] w-full bg-[#F8FAFC] border border-[#16527D]/8 rounded-[3px] px-4">
        <div className="flex items-center gap-2">
          <Funnel size={24} />
          <div className="text-[15px] font-bold text-[#1C2B38]">Filtering: </div>
        </div>
        <CusSelect
          label="Traveler Type"
          options={travelerTypeOptions}
          value={travelerFilter}
          onChange={(val) => setTravelerFilter(val as string)}
          styleClass="w-[250px]"
        />

        <CusSelect
          label="Rating"
          options={ratingOptions}
          value={ratingFilter}
          onChange={(val) => setRatingFilter(val as string)}
          styleClass="w-[250px]"
        />
        <CusSearch
          placeholder="Search reviews..."
          onChange={(value) => setSearchQuery(value)}
        />
      </div>
      {filteredReviews.map((review) => (
        <div key={review.id} className="flex border-b border-[#CEDADF] pb-[20px]">
          <div className="flex items-center gap-3 w-[20%]">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center bg-white justify-center shadow-lg">
              <img src={review.avatar} alt="" className="object-cover w-[56px] h-[56px] rounded-full" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <StarRating rating={review.rating} size={14} />
              <div className="flex items-center gap-2">
                <div className="text-[15px] font-bold text-[#1C2B38]">{review.name}</div>
                <CheckCheck size={20} className="text-[#7BBCB0]" />
              </div>
              <div className="text-[13px] font-semibold text-[#778088]">{review.date}</div>
            </div>
          </div>
          <div className="w-[70%] text-start flex flex-col gap-3 mr-4">
            <div className="font-bold text-[#1C2B38] text-[15px]">
              {review.title}
            </div>
            <div className="text-[14px] text-[#495560]">{review.description}</div>
          </div>
          <div className="w-[10%] flex items-start items-baseline gap-0">
            <div className="text-[13px] font-semibold text-[#778088]">Helpful?</div>
            <Button
              variant="light"
              color="primary"
              size="sm"
              className="text-[13px] font-bold text-[#7BBCB0] flex items-start"
            >
              Yes
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
