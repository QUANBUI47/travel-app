import { Button } from "@heroui/button";
import { useState } from "react";

export default function LatestStories() {
  const stories = [
    {
      id: 1,
      title: "7 Signs and Symptoms of Iodine Deficiency",
      image: "/images/stories/1.svg",
      author: {
        name: "Jackie Moncado",
        avatar: "/images/stories/avt.svg",
      },
    },
    {
      id: 2,
      title: "How to Fix Your Sleep Schedule: 7 Easy Ways",
      image: "/images/stories/2.svg",
      author: {
        name: "Jackie Moncado",
        avatar: "/images/stories/avt.svg",
      },
    },
    {
      id: 3,
      title: "10 Proven Health Benefits of Cinnamon",
      image: "/images/stories/3.svg",
      author: {
        name: "Jackie Moncado",
        avatar: "/images/stories/avt.svg",
      },
    },
    {
      id: 4,
      title: "11 Health Benefits of Turmeric and Curcumin",
      image: "/images/stories/4.svg",
      author: {
        name: "Jackie Moncado",
        avatar: "/images/stories/avt.svg",
      },
    },
  ];

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-[40px] mb-[40px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[36px] font-bold text-[#1C2B38]">Latest Stories</h1>
          <p className="text-[16px] text-[#1C2B38]/60 font-semibold">Discover breathtaking destinations, rich culture, and unforgettable experiences.</p>
        </div>
        {stories.length > 0 && <Button className="w-[150px] flex items-center justify-center rounded-[40px] h-[54px] bg-[#FFDA32] text-base font-bold text-[#1C2B38] cursor-pointer" onClick={() => { setViewAll(!viewAll) }}>{viewAll ? "View Less" : "View All"}</Button>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {viewAll ? stories.map((story) => (
          <div key={story.id} className="flex flex-col gap-0 w-[270px] h-[320px] bg-white rounded-[12px] shadow-md overflow-hidden">
            <img src={story.image} alt={story.title} className="w-full h-[200px] object-cover" />
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <img src={story.author.avatar} alt={story.author.name} className="w-[24px] h-[24px] rounded-full" />
                <p className="text-[16px] text-[#1C2B38]/60 font-semibold">{story.author.name}</p>
              </div>
              <h3 className="text-[20px] font-bold text-[#1C2B38]">{story.title}</h3>
            </div>
          </div>
        )) : stories.slice(0, 8).map((story) => (
          <div key={story.id} className="flex flex-col gap-0 w-[270px] h-[320px] bg-white rounded-[12px] shadow-md overflow-hidden">
            <img src={story.image} alt={story.title} className="w-full h-[200px] object-cover" />
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <img src={story.author.avatar} alt={story.author.name} className="w-[24px] h-[24px] rounded-full" />
                <p className="text-[16px] text-[#1C2B38]/60 font-semibold">{story.author.name}</p>
              </div>
              <h3 className="text-[20px] font-bold text-[#1C2B38]">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}