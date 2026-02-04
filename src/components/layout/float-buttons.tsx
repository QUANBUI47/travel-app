"use client";

import { Button } from "@heroui/button";
import { MessageCircle, Phone } from "lucide-react";
import clsx from "clsx";

export const FloatButtons = () => {
  const handleZalo = () => {
    window.open("https://zalo.me/your-zalo-id", "_blank");
  };

  const handleHotline = () => {
    window.location.href = "tel:0914317493";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        aria-label="Chat Zalo"
        className={clsx(
          "bg-[#8eb22b] hover:bg-[#7aa325]",
          "text-white transition-all hover:scale-105",
          "flex items-center gap-2 font-medium",
        )}
        radius="full"
        onClick={handleZalo}
      >
        <MessageCircle size={20} />
        <span className="text-sm">Chat Zalo</span>
      </Button>

      <Button
        aria-label="Hotline"
        className={clsx(
          "bg-danger hover:bg-danger-dark",
          "text-white transition-all hover:scale-105",
          "flex items-center gap-2 font-medium",
        )}
        radius="full"
        onClick={handleHotline}
      >
        <Phone size={20} />
        <span className="text-sm">Hotline</span>
      </Button>
    </div>
  );
};
