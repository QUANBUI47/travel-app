"use client";

import { Button } from "@heroui/button";
import { Cake, MapPin, Pencil } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import CusInput from "../common/CusInput";
import { CusDatePicker } from "../common";

export default function Profile() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const initialData = {
    personalInformation: {
      name: "Masum Rana",
      dateOfBirth: "1986-03-15",
      phone: "+46 764 394 68",
      location: "Gothenburg",
      avatar: "/images/avatar/default-avatar.png",
    },
    security: {
      email: "masumrana15@gmail.com",
      password: "123123",
      confirmPassword: "123123",
    },
  };

  const [profileData, setProfileData] = useState(initialData); // Data hiển thị (Sidebar)
  const [formData, setFormData] = useState(initialData);       // Data chỉnh sửa (Form)

  const handleSave = () => {
    setProfileData(formData);
    // Có thể thêm toast notification ở đây
  };

  const handleSaveSecurity = () => {
    setProfileData(formData);
    // Có thể thêm toast notification ở đây
  };

  const tabs = [
    {
      id: 1,
      name: "Profile Informations",
    },
    {
      id: 2,
      name: "Booking History",
    },
    {
      id: 3,
      name: "Newsletter Subscription",
    },
    {
      id: 4,
      name: "Manage notifications",
    },
  ]

  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="w-full flex items-center justify-center max-w-[1200px] mx-auto">
      <div className="w-full bg-white shadow-md rounded-lg py-8 flex gap-0">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="relative w-[120px] h-[120px] rounded-full">
              {/* Image / Upload area */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => inputRef.current?.click()}
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover rounded-full"
                  />
                ) : (
                  <span className="text-[14px] font-semibold text-[#495560] bg-[#F4F4F5] w-full h-full flex flex-col items-center justify-center rounded-full">
                    <span>Click to</span>
                    <span>Upload image</span>
                  </span>
                )}
              </div>

              {/* Hidden input */}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
              />

              {/* Button bottom-right */}
              <Button
                isIconOnly
                className="absolute bottom-0 right-0 
             w-[36px] h-[36px] 
             rounded-full 
             bg-[#7BBCB0] 
             border-3 border-white
             flex items-center justify-center"
                onClick={() => inputRef.current?.click()}
              >
                <Pencil size={18} className="text-white" />
              </Button>

            </div>
            <span className="text-[24px] font-bold text-[#1C2B38]">{profileData.personalInformation.name}</span>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="text-[14px] font-semibold text-[#495560]">{profileData.personalInformation.location}</span>
              </div>
              <div className="w-[1px] h-[14px] bg-[#C7CDD0]"></div>
              <div className="flex items-center gap-2">
                <Cake size={14} />
                <span className="text-[14px] font-semibold text-[#495560]">{profileData.personalInformation.dateOfBirth}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`w-full h-[60px] flex items-center pl-6 cursor-pointer ${activeTab === tab.id ? "bg-[#7BBCB0]" : "bg-white"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={`text-[16px] font-bold ${activeTab === tab.id ? "text-white" : "text-[#1C2B38]"}`}>{tab.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 border-l border-[#F4F4F5]">
          {activeTab === 1 && (
            <div className="flex flex-col gap-5 justify-start">
              <div className="flex flex-col gap-5 px-8">
                <div className="text-[20px] font-bold text-[#1C2B38]">Personal Information</div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Name</div>
                    <CusInput
                      label="Name"
                      value={formData.personalInformation.name}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          personalInformation: { ...prev.personalInformation, name: value },
                        }));
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Date of Birth</div>
                    <CusDatePicker
                      label="Date of Birth"
                      value={formData.personalInformation.dateOfBirth}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          personalInformation: { ...prev.personalInformation, dateOfBirth: value },
                        }));
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Phone</div>
                    <CusInput
                      label="Phone"
                      value={formData.personalInformation.phone}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          personalInformation: { ...prev.personalInformation, phone: value },
                        }));
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Location</div>
                    <CusInput
                      label="Location"
                      value={formData.personalInformation.location}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          personalInformation: { ...prev.personalInformation, location: value },
                        }));
                      }}
                    />
                  </div>
                </div>
                <Button
                  className="w-fit w-[280px] h-[54px] bg-[#7BBCB0] text-white text-[15px] font-bold rounded-[3px] cursor-pointer"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
              <div className="w-full h-[1px] bg-[#F4F4F5]"></div>
              <div className="flex flex-col gap-5 px-8">
                <div className="text-[20px] font-bold text-[#1C2B38]">Security</div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Email Address</div>
                    <CusInput
                      label="Email"
                      value={formData.security.email}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          security: { ...prev.security, email: value },
                        }));
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Password</div>
                    <CusInput
                      label="Password"
                      value={formData.security.password}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          security: { ...prev.security, password: value },
                        }));
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-[#1C2B38]">Confirm Password</div>
                    <CusInput
                      label="Confirm Password"
                      value={formData.security.confirmPassword}
                      onChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          security: { ...prev.security, confirmPassword: value },
                        }));
                      }}
                    />
                  </div>
                </div>
                <Button
                  className="w-fit w-[280px] h-[54px] bg-[#7BBCB0] text-white text-[15px] font-bold rounded-[3px] cursor-pointer"
                  onClick={handleSaveSecurity}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <span className="text-[24px] font-bold text-[#1C2B38]">Booking History</span>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <span className="text-[24px] font-bold text-[#1C2B38]">Newsletter Subscription</span>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <span className="text-[24px] font-bold text-[#1C2B38]">Manage notifications</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}