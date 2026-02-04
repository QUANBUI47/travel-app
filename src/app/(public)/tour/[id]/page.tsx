import { TourDetail } from "@/components/tour";
import React from "react";

interface TourDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params;

  return (
    <div className="pt-[90px] min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto pt-[50px] pb-[50px]">
        <TourDetail id={id} />
      </div>
    </div>
  );
}
