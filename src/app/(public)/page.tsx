"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { MapPin, Users, CalendarDays } from "lucide-react";
import { HomePage } from "@/components/home";

const inputStyles = {
  label: "text-black/50 dark:text-white/90",
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ].join(" "),
  innerWrapper: "bg-transparent",
  inputWrapper: [
    "shadow-none",
    "bg-transparent",
    "dark:bg-transparent",
    "border-0",
    "border-transparent",
    "hover:bg-transparent",
    "hover:border-transparent",
    "focus-within:bg-transparent",
    "focus-within:border-transparent",
    "focus-within:shadow-none",
    "ring-0",
    "focus-within:ring-0",
    "cursor-text!",
  ].join(" "),
};

export default function Home() {
  return (
    <div className="relative w-full min-h-[900px] overflow-hidden bg-white">
      {/* Hero image cao 740px - overlay sáng để bớt tối */}
      <div
        className="relative w-full h-[740px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/banner1.jpg')",
          backgroundSize: "cover",
          clipPath: "inset(0)",
          filter: "brightness(1.15) contrast(1.02)",
        }}
      >
        {/* Lớp phủ trắng mờ → ảnh sáng hơn, đổi opacity để chỉnh độ sáng */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "rgba(255, 255, 255, 0.25)" }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-5">
          <h1 className="text-[56px] font-bold text-[#1C2B38]">
            We Find The Best Tours For You
          </h1>
          <p className="text-lg text-[#1C2B38] font-semibold text-center">
            Discover breathtaking destinations, rich culture, and unforgettable experiences.
            <br />
            Explore the beauty, cuisine, and stories that make each place truly unique.
            <br />
            Start your journey with us today.
          </p>
          <div className="flex items-center gap-2">
            {/* Video promo - wrapper + waves + play button */}
            <div className="promo-video-wrapper">
              <div className="video-main">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1" />
                    <div className="waves wave-2" />
                    <div className="waves wave-3" />
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=BqI0Q7e4kbk"
                  className="video-popup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xem video"
                >
                  <svg
                    className="play-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={20}
                    height={20}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>
            <span className="text-[24px] text-[#1C2B38] font-bold">
              Watch Video
            </span>
          </div>
        </div>
      </div>

      {/* Ô search đặt ở top 780px (dưới ảnh) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[695px] w-full max-w-[1000px] p-4 rounded-[10px] grid grid-cols-2 gap-0 bg-white"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(232, 234, 235, 0.6), 0 4px 6px -4px rgba(232, 234, 235, 0.4)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7BBCB0]" />
              <p className="text-[15px] text-[#7BBCB0] font-semibold">Location</p>
            </div>
            <Input
              type="text"
              placeholder="Search For A Destination"
              className="w-full rounded-[10px] pl-2"
              classNames={inputStyles}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-[1px] h-5 bg-[#E8EAEB]"></div>
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#7BBCB0]" />
                <p className="text-[15px] text-[#7BBCB0] font-semibold">Guests</p>
              </div>
              <Input
                type="text"
                placeholder="How many Guests?"
                className="w-full rounded-[10px] pl-2"
                classNames={inputStyles}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pl-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[1px] h-5 bg-[#E8EAEB]"></div>
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#7BBCB0]" />
                <p className="text-[15px] text-[#7BBCB0] font-semibold">Date</p>
              </div>
              <Input
                type="text"
                placeholder="Pick a date"
                className="w-full rounded-[10px] pl-2"
                classNames={inputStyles}
              />
            </div>
          </div>
          <Button className="w-[150px] flex items-center justify-center rounded-[40px] h-[54px] bg-[#FFDA32] text-base font-bold text-[#1C2B38]">Search</Button>
        </div>
      </div>
      <HomePage />
    </div>
  );
}
