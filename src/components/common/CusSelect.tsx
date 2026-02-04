"use client";

import React from "react";
import { Select, SelectItem } from "@heroui/select";
import { Image } from "@heroui/image";
import { clsx as cn } from "clsx";

export interface Option {
  id: string | number;
  value: string | number;
  label: string;
  url?: string;
}

interface CusSelectProps {
  label?: string;
  options: Option[];
  value: string | number | null;
  onChange: (value: string | number) => void;
  error?: string;
  optionLabel?: string;
  required?: boolean;
  disabled?: boolean;
  styleClass?: string;
  isShowImg?: boolean;
  disableFocus?: boolean;
  touched?: boolean;
  onBlur?: () => void;
  transparent?: boolean;
}

export function CusSelect({
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  styleClass = "",
  isShowImg = false,
  touched = false,
  onBlur,
  transparent = false,
}: CusSelectProps) {
  const shouldShowError = (touched && !!error) || !!error;

  return (
    <div className={cn("w-full h-auto cus-select gap-2 flex flex-col relative", styleClass)}>
      <Select
        label={label}
        aria-label={label || "Select option"}
        selectedKeys={value ? [String(value)] : []}
        variant="bordered"
        labelPlacement="inside"
        classNames={{
          base: "w-full",
          trigger: cn(
            transparent ? "bg-transparent" : "bg-neutral-05",
            "border border-neutral-10 rounded-xl min-h-14 py-2",
            "data-[hover=true]:border-neutral-60",
            "data-[focus=true]:border-neutral-60",
            shouldShowError ? "border-red-100" : "border-neutral-10",
            disabled && "opacity-60 pointer-events-none"
          ),
          innerWrapper: "pt-4",
          label: cn(
            "text-neutral-60 text-base font-normal top-3",
          ),
          value: cn(
            "font-normal",
            transparent ? "text-[14px] text-white/60" : "text-neutral-100 text-lg"
          ),
          popoverContent: cn(
            "p-0 rounded-xl shadow-lg border",
            transparent ? "bg-[#777] border-white/10" : "bg-white border-neutral-10"
          ),
        }}
        renderValue={(items) => {
          return items.map((item) => {
            const option = options.find((o) => String(o.value) === item.key);
            if (!option) return null;
            return (
              <div key={item.key} className="flex items-center gap-2">
                {isShowImg && option.url && (
                  <Image
                    alt={option.label}
                    className="w-4 h-4 object-cover"
                    src={option.url}
                    radius="none"
                  />
                )}
                <span className={cn(transparent ? "text-[14px] text-white/60" : "text-neutral-100 text-lg")}>
                  {option.label}
                </span>
              </div>
            );
          });
        }}
        onSelectionChange={(keys) => {
          const selectedValue = Array.from(keys)[0];
          if (selectedValue) {
            onChange(selectedValue as string | number);
          }
        }}
        onClose={onBlur}
        isDisabled={disabled}
        isRequired={required}
      >
        {options.map((option) => (
          <SelectItem key={String(option.value)} textValue={option.label}>
            <div className="flex gap-2 items-center">
              {isShowImg && option.url && (
                <Image
                  src={option.url}
                  alt={option.label}
                  classNames={{
                    wrapper: "w-4 h-4",
                    img: "w-4 h-4 object-contain",
                  }}
                  radius="none"
                />
              )}
              <span className={cn(
                "font-normal whitespace-normal break-words",
                transparent ? "text-[14px] text-white/60" : "text-neutral-100 text-base"
              )}>
                {option.label}
              </span>
            </div>
          </SelectItem>
        ))}
      </Select>

      {shouldShowError && (
        <div className="text-red-100 flex items-center gap-1 text-xs mx-4 mt-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-4">
            <circle cx="8" cy="8" r="8" fill="#FCE8EC" />
            <path d="M8 4V8" stroke="#EE0033" strokeLinecap="round" />
            <circle cx="8" cy="11" r="1" fill="#EE0033" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}