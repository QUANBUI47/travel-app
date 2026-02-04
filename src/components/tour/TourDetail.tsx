"use client";
import { Button } from "@heroui/button";
import { Bubbles, Funnel, Heart, MapPin, Share2 } from "lucide-react";
import { useState } from "react";
import { CusSelect, StarRating, CusDatePicker } from "@/components/common";
import Review from "./Review";
import TourInToday from "./TourInToday";
import TourInLocation from "./TourInLocation";
import { TourDetailType } from "@/types/tour";
import { TravelerType } from "@/types/review";

export default function TourDetail({ id }: { id: string }) {
  const tourDetail: TourDetailType = {
    id: 1,
    name: "Vintage Double Decker Bus Tour & Thames River Cruise",
    location: "London",
    basePrice: 100,
    rating: 4.3,
    totalReviews: 854,
    images: [
      "/images/tour/1.svg",
      "/images/tour/2.svg",
      "/images/tour/3.svg",
      "/images/tour/4.svg",
      "/images/tour/5.svg",
      "/images/tour/6.svg",
    ],

    description: [
      "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye as you meander through the historic streets on board a vintage double decker bus.",
      "Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried. Pass the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.",
      "Next, take a short cruise along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and London Bridge before arriving at Westminster Pier.",
    ],
    features: [
      {
        id: "free-cancellation",
        name: "Free Cancellation",
        description:
          "Cancel up to 24 hours in advance to receive a full refund",
      },
      {
        id: "health-precautions",
        name: "Health Precautions",
        description:
          "Special health and safety measures apply. Learn more",
      },
      {
        id: "mobile-ticketing",
        name: "Mobile Ticketing",
        description:
          "Use your phone or print your voucher",
      },
      {
        id: "duration",
        name: "Duration 3.5 Hours",
        description:
          "Check availability to see starting times",
      },
      {
        id: "instant-confirmation",
        name: "Instant Confirmation",
        description:
          "Don’t wait for the confirmation!",
      },
      {
        id: "live-guide",
        name: "Live Tour Guide in English",
        description:
          "English",
      },
    ],

    activity: [
      {
        id: 1,
        name: "Discover London on board a classic Routemaster vintage double decker bus",
      },
      {
        id: 2,
        name: "Cruise down the River Thames",
      },
      {
        id: 3,
        name: "See the Changing of the Guard",
      },
      {
        id: 4,
        name: "Visit Westminster Abbey",
      },
      {
        id: 5,
        name: "See Big Ben and the Houses of Parliament",
      },
    ],

    included: [
      {
        id: 1,
        name: "Vintage double-decker bus tour",
      },
      {
        id: 2,
        name: "River Thames cruise",
      },
      {
        id: 3,
        name: "Changing of the Guard (if scheduled)",
      },
      {
        id: 4,
        name: "Professional live guide",
      },
    ],

    notIncluded: [
      {
        id: 1,
        name: "Hotel pickup and drop-off",
      },
      {
        id: 2,
        name: "Food and drinks",
      },
      {
        id: 3,
        name: "Gratuities",
      },
    ],

    safety: [
      {
        id: 1,
        name: "All required protective equipment is provided",
      },
      {
        id: 2,
        name: "All areas that customers touch are frequently cleaned",
      },
      {
        id: 3,
        name: "You must keep social distance while in vehicles",
      },
      {
        id: 4,
        name: "Visitor numbers are limited to reduce crowds",
      },
    ],

    details: [
      {
        id: 1,
        label: "Language",
        value: "English",
      },
      {
        id: 2,
        label: "Duration",
        value: "3.5 hours",
      },
      {
        id: 3,
        label: "Number of People",
        value: "Max 20 people",
      },
      {
        id: 4,
        label: "Meeting Point Address",
        value:
          "Meet your guide at the west entrance of Victoria Coach Station, London. Look for a guide wearing a red SMT flag.",
      },
    ],
  };

  const travelerTypeOptions = [
    { id: 1, value: TravelerType.SOLO, label: "Solo traveler" },
    { id: 2, value: TravelerType.COUPLE, label: "Couple" },
    { id: 3, value: TravelerType.FAMILY, label: "Family" },
    { id: 4, value: TravelerType.FRIENDS, label: "Friends" },
    { id: 5, value: TravelerType.BUSINESS, label: "Business" },
  ];

  const [selectedImage, setSelectedImage] = useState(tourDetail.images[0]);
  const [formData, setFormData] = useState({
    from: "2026-10-10",
    to: "2026-10-10",
    travelerType: "",
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-0">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="text-[36px] font-bold text-[#1C2B38]">{tourDetail.name}</div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="text-[14px] font-semibold text-[#778088]">{tourDetail.location}</span>
              </div>
              <div className="w-[1px] h-[12px] bg-[#000000]/50"></div>
              <div className="flex items-center gap-2">
                <StarRating rating={tourDetail.rating} size={16} />
                <span className="text-[14px] font-semibold text-[#778088]">({tourDetail.totalReviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[30px] border-b border-[#CEDADF] pb-[20px]">
          <div className="col-span-2 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <img src={selectedImage} alt={tourDetail.name} width={770} height={460} className="w-full h-[460px] object-cover" />
              <div className="flex items-center justify-between gap-[10px]">
                {tourDetail.images.map((image, index) => (
                  <img onClick={() => { setSelectedImage(image) }} className={`cursor-pointer w-[120px] h-[100px] object-cover ${selectedImage === image ? "border-4 border-[#7BBCB0]" : ""}`} key={index} src={image} alt={tourDetail.name} width={120} height={100} />
                ))}
              </div>
            </div>
            <div className="bg-[#16527D]/8 w-full p-[30px] rounded-md">
              <div className="grid grid-cols-2 gap-5">
                {tourDetail.features.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Bubbles size={16} color="#7BBCB0" />
                      <span className="text-[15px] font-bold text-[#1C2B38]">{feature.name}</span>
                    </div>
                    <div className="text-[14px] text-[#495560] pl-6">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-[22px] font-bold text-[#1C2B38]">Description</div>
              <div className="text-[15px] text-[#495560]">{tourDetail.description}</div>
              <div className="w-full h-[1px] bg-[#CEDADF]"></div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-[22px] font-bold text-[#1C2B38]">Activity</div>
              <div className="text-[15px] font-bold text-[#1C2B38]">What You Will Do</div>
              {tourDetail.activity.map((activity: { name: string }, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[8px] h-[8px] bg-[#7BBCB0] rounded-full"></div>
                  <div className="text-[15px] text-[#495560]">{activity.name}</div>
                </div>
              ))}
              <div className="w-full h-[1px] bg-[#CEDADF]"></div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-[22px] font-bold text-[#1C2B38]">What is included / not included</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="text-[15px] font-bold text-[#1C2B38]">Included</div>
                  {tourDetail.included.map((included: { name: string }, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-[8px] h-[8px] bg-[#7BBCB0] rounded-full"></div>
                      <div className="text-[15px] text-[#495560]">{included.name}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-[15px] font-bold text-[#1C2B38]">Not Included</div>
                  {tourDetail.notIncluded.map((notIncluded: { name: string }, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-[8px] h-[8px] bg-[#7BBCB0] rounded-full"></div>
                      <div className="text-[15px] text-[#495560]">{notIncluded.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#CEDADF]"></div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-[22px] font-bold text-[#1C2B38]">Safety</div>
              <div className="text-[15px] font-bold text-[#1C2B38]">Health precautions</div>
              {tourDetail.safety.map((safety: { name: string }, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[8px] h-[8px] bg-[#7BBCB0] rounded-full"></div>
                  <div className="text-[15px] text-[#495560]">{safety.name}</div>
                </div>
              ))}
              <div className="w-full h-[1px] bg-[#CEDADF]"></div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-[22px] font-bold text-[#1C2B38]">Details</div>
              <div className="flex flex-wrap gap-8">
                {tourDetail.details.map((detail: { label: string; value: string }, index: number) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">{detail.label}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-[8px] h-[8px] bg-[#7BBCB0] rounded-full"></div>
                      <div className="text-[15px] text-[#495560]">{detail.value}</div>
                    </div>
                  </div>
                ))}
                <Button
                  className="
                    bg-transparent
                    border-none
                    shadow-none
                    p-0
                    h-auto
                    text-[#7BBCB0]
                    font-bold
                    text-[14px]
                    underline
                    hover:bg-transparent
                    focus:bg-transparent
                    active:bg-transparent"
                >
                  Open in Google Maps
                </Button>

              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="shadow-md w-full flex flex-col gap-4 py-3">
              <div className="text-[18px] font-bold text-[#1C2B38] px-4">Booking</div>
              <div className="w-full h-[1px] bg-[#F4F4F5]"></div>
              <div className="flex flex-col px-4 gap-4 mt-2">
                <CusDatePicker
                  label="From"
                  value={formData.from}
                  onChange={(val) => setFormData({ ...formData, from: val })}
                />
                <CusDatePicker
                  label="To"
                  value={formData.to}
                  onChange={(val) => setFormData({ ...formData, to: val })}
                />
                <CusSelect
                  label="Traveler Type"
                  options={travelerTypeOptions}
                  value={formData.travelerType}
                  onChange={(val) => setFormData({ ...formData, travelerType: val as string })}
                  styleClass="w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-[14px] font-semibold text-[#778088]">Subtotal</div>
                <div className="text-[36px] font-bold text-[#7BBCB0]">${tourDetail.basePrice}</div>
              </div>
              <div className="flex flex-col gap-2 w-full px-4">
                <Button className="text-white font-bold text-[15px] bg-[#7BBCB0] h-[50px] rounded-[3px] px-20 py-[14px]">confirm booking</Button>
                <Button className="text-[#778088] border border-[#778088] font-bold text-[15px] bg-white h-[50px] flex gap-2 rounded-[3px] px-20 py-[14px]"><Heart size={18} />Save to wishlist</Button>
                <Button className="text-[#778088] border border-[#778088] font-bold text-[15px] bg-white h-[50px] flex gap-2 rounded-[3px] px-20 py-[14px]"><Share2 size={18} />Share the activity</Button>
              </div>
            </div>
          </div>
        </div>
        <TourInToday />
        <TourInLocation location={tourDetail.location} excludeTourId={tourDetail.id} />
        <Review />

      </div>
    </div>
  );
}