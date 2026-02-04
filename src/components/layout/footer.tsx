"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ROUTES } from "@/constants/routes";
import { CusSelect, Option } from "@/components/common/CusSelect";

const languageOptions: Option[] = [
  { id: 1, value: "Viet Nam", label: "Viet Nam", url: "https://flagcdn.com/w20/vn.png" },
  { id: 2, value: "United States", label: "United States", url: "https://flagcdn.com/w20/us.png" },
];

const currencyOptions: Option[] = [
  { id: 1, value: "VND", label: "VND" },
  { id: 2, value: "USD", label: "USD" },
];

export const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | number | null>("Viet Nam");
  const [selectedCurrency, setSelectedCurrency] = useState<string | number | null>("VND");

  return (
    <footer className="bg-[#777] text-white">
      <div className="container mx-auto py-20 max-w-[1200px]">
        <div className="grid grid-cols-4 gap-16 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-[15px] font-bold">Language</div>
              <CusSelect
                options={languageOptions}
                value={selectedLanguage}
                onChange={(val) => setSelectedLanguage(val)}
                isShowImg={true}
                transparent={true}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[15px] font-bold">Currency</div>
              <CusSelect
                options={currencyOptions}
                value={selectedCurrency}
                onChange={(val) => setSelectedCurrency(val)}
                transparent={true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[15px] font-bold">Company</div>
            <div className="text-[15px] text-white/60">About Us</div>
            <div className="text-[15px] text-white/60">Blog</div>
            <div className="text-[15px] text-white/60">Press Room</div>
            <div className="text-[15px] text-white/60">Careers</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[15px] font-bold">Help</div>
            <div className="text-[15px] text-white/60">Contact Us</div>
            <div className="text-[15px] text-white/60">FAQs</div>
            <div className="text-[15px] text-white/60">Terms and conditions</div>
            <div className="text-[15px] text-white/60">Sitemap</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-[15px] font-bold">Payment methods possible</div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-1">
                  <Image
                    src="/cards/master-card.png"
                    alt="Master Card"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image
                    src="/cards/bitpay.svg"
                    alt="Bitpay"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image
                    src="/cards/visa.png"
                    alt="Visa"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image
                    src="/cards/american-express.png"
                    alt="American Express"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image
                    src="/cards/discover.png"
                    alt="Discover"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Image
                    src="/cards/sofort.png"
                    alt="Sofort"
                    width={47.87}
                    height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image src="/cards/google-pay.png" alt="Google Pay" width={47.87} height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image src="/cards/apple-pay.png" alt="Apple Pay" width={47.87} height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image src="/cards/paypal.png" alt="Paypal" width={47.87} height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                  <Image src="/cards/maestro.png" alt="Maestro" width={47.87} height={34}
                    className="w-[47.87px] h-[34px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[15px] font-bold">Company</div>
              <div className="text-[15px] text-white/60">Become a Tour guide for Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 bg-black/20 py-2">
        <div className="flex items-center justify-between mx-auto max-w-[1200px]">
          <p className="text-[15px]">Copyright 2021 Tour Guide. All Rights Reserved</p>
          <div className="flex items-center justify-center gap-2">
            <Link href="https://www.facebook.com/profile.php?id=100093064612641">
              <Image src="/icons/fb-icon.svg" alt="Facebook" width={40} height={40} />
            </Link>
            <Link href="https://x.com/your_twitter_handle">
              <Image src="/icons/tw-icon.svg" alt="Twitter" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/your_instagram_handle">
              <Image src="/icons/ins-icon.svg" alt="Instagram" width={40} height={40} />
            </Link>
            <Link href="https://www.pinterest.com/your_pinterest_handle">
              <Image src="/icons/pin-icon.svg" alt="Pinterest" width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
