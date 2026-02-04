import React from "react";
import { BusFront, Earth, CarFront, TramFront, MapPinCheck } from "lucide-react";

export const CusChip = ({ category }: { category: string }) => {
  let color = "#1C2B38";
  let Icon = MapPinCheck;

  switch (category) {
    case "Public Transportations":
      color = "#D176E0";
      Icon = BusFront;
      break;
    case "Nature & Adventure":
      color = "#7BBCB0";
      Icon = Earth;
      break;
    case "Private Transportations":
      color = "#E4B613";
      Icon = CarFront;
      break;
    case "Business Tours":
      color = "#FC3131";
      Icon = TramFront;
      break;
    case "Local Visit":
      color = "#5C9BDE";
      Icon = MapPinCheck;
      break;
  }

  return (
    <div
      className="px-8 py-1 flex items-center justify-center gap-[10px] text-sm font-bold bg-[#E8EAEB] rounded-[10px]"
      style={{
        color: color,
        boxShadow: `0px 0px 10px 0px ${color}`,
      }}
    >
      <Icon size={16} color={color} />
      <span>{category}</span>
    </div>
  );
};
