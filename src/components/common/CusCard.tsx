import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Star, Clock, Bus, Users, Heart } from "lucide-react";
import Link from "next/link";
import { StarRating } from "./StarRating";

interface CusCardProps {
  id: number | string;
  name: string;
  image: string;
  duration: string;
  transport: string;
  plan: string;
  rating: number;
  review: number;
  cost: number;
}

export const CusCard = ({
  id,
  name,
  image,
  duration,
  transport,
  plan,
  rating,
  review,
  cost,
}: CusCardProps) => {
  return (
    <Link href={`/tour/${id}`} className="contents">
      <Card className="w-full shadow-md hover:shadow-xl transition-shadow rounded-[20px] border border-transparent hover:border-[#FFDA32]/50 h-full">
        <div className="relative h-[200px] p-2 overflow-hidden">
          <Image
            removeWrapper
            src={image}
            alt={name}
            className="w-full h-full object-cover z-0 transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3 z-10 bg-white/30 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white hover:text-red-500 transition-colors text-white">
            <Heart size={18} className="" />
          </div>
        </div>
        <CardBody className="flex flex-col gap-3 p-4">
          <h4 className="text-base text-[#1C2B38] line-clamp-2 leading-tight min-h-[44px]">
            {name}
          </h4>

          <div className="flex flex-col gap-2 text-sm text-default-500">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#FFDA32]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bus size={16} className="text-[#FFDA32]" />
              <span className="line-clamp-1">{transport}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#FFDA32]" />
              <span>{plan}</span>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center p-4 pt-0 border-t border-[#E8EAEB]">
          <div className="flex flex-col gap-1">
            <StarRating rating={rating} size={14} />
            <span className="text-default-400 text-xs">({review}) reviews</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-[#7BBCB0]">$ {cost}</div>
            <div className="text-xs font-semibold text-[#778088]">per person</div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
