"use client";
import { Profile } from "@/components/profile";
import { Breadcrumbs, BreadcrumbItem, Link } from "@heroui/react";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-col gap-8 pt-[90px] pb-[50px] bg-[#F4F4F5]">
      <div className="w-full h-[90px] bg-white flex items-center justify-start">
        <div className="w-[1200px] mx-auto">
          <div className="flex flex-col gap-2">
            <span className="text-[22px] font-bold text-[#1C2B38]">My Profile</span>
            <Breadcrumbs>
              <BreadcrumbItem>
                <Link href="/" className="text-[15px] font-semibold text-[#778088]">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/profile" className="text-[15px] font-semibold text-[#778088]">Profile</Link>
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <Profile />
    </div>
  );
}