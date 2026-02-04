import { TravelerType } from "./review";

export type Location =
  | "New York"
  | "California"
  | "Alaska"
  | "Sidney"
  | "Dubai"
  | "London"
  | "Tokyo"
  | "Delhi";

export type Tour = {
  id: number;
  name: string;
  image: string;
  duration: string;
  transport: string;
  travelerType: TravelerType; // Changed from plan
  rating: number;
  review: number;
  cost: number;
  location: Location;
};

export type TourDetailType = {
  id: number;
  name: string;
  location: Location;
  basePrice: number;
  rating: number;
  totalReviews: number;
  images: string[];
  description: string[];
  features: { id: string; name: string; description: string }[];
  activity: { id: number; name: string }[];
  included: { id: number; name: string }[];
  notIncluded: { id: number; name: string }[];
  safety: { id: number; name: string }[];
  details: { id: number; label: string; value: string }[];
};
