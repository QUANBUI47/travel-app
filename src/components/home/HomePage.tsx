import ExplorePopularCities from "./ExplorePopularCities";
import FeaturedDestinations from "./FeaturedDestinations";
import Gallery from "./Gallery";
import LatestStories from "./LatestStories";

export default function HomePage() {
  return (
    <div className="w-full bg-white flex flex-col mt-[80px]">
      <ExplorePopularCities />
      <FeaturedDestinations />
      <Gallery />
      <LatestStories />
    </div>
  );
} 