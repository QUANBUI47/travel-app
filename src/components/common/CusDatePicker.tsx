"use client";

import React, { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { clsx as cn } from "clsx";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { CusCalendar, DatePickerValue } from "./CusCalendar";

interface CusDatePickerProps {
  label?: string;
  value?: string; // Expecting ISO string YYYY-MM-DD
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  styleClass?: string;
  inputId?: string;
  placeholder?: string;
}

export function CusDatePicker({
  label,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  styleClass = "",
  inputId = "cus-datepicker",
  placeholder = "",
}: CusDatePickerProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Determine if label should float
  const isFloating = isOpen || !!value || isFocused;

  const handleDateChange = (val: DatePickerValue) => {
    if (typeof val === 'string' && onChange) {
      onChange(val);
      setIsOpen(false);
    }
  };

  return (
    <div className={cn("w-full h-auto cus-datepicker flex flex-col relative gap-1", styleClass)}>

      <Popover
        placement="bottom-start"
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!disabled) setIsOpen(open);
        }}
        triggerScaleOnOpen={false}
        offset={10}
      >
        <PopoverTrigger>
          <div
            className={cn(
              "relative w-full rounded-xl border transition-colors bg-neutral-05 flex items-center min-h-[56px] cursor-pointer",
              (isFocused || isOpen) ? "border-neutral-60" : "border-neutral-10",
              error ? "border-red-100" : "",
              disabled && "opacity-60 pointer-events-none"
            )}
            onClick={() => {
              if (!disabled) setIsOpen(true);
              inputRef.current?.focus();
            }}
          >
            <div className="flex-1 relative h-full flex flex-col justify-center px-2 pt-6 pb-1">
              {/* Floating Label */}
              <label
                htmlFor={inputId}
                className={cn(
                  "absolute left-2 transition-all duration-200 pointer-events-none text-neutral-60 font-normal",
                  isFloating ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base"
                )}
              >
                {label}
              </label>

              {/* Input (Readonly) */}
              <input
                ref={inputRef}
                id={inputId}
                type="text" // Change to text since we handle picker manually
                readOnly
                className={cn(
                  "w-full bg-transparent border-none outline-none text-neutral-100 text-base font-normal p-0 cursor-pointer",
                  !isFloating && "opacity-0",
                  isFloating ? "opacity-100" : "opacity-0"
                )}
                value={value || ""}
                disabled={disabled}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            {/* Helper Icon */}
            <div className="pr-4 pointer-events-none">
              <CalendarDays className="text-neutral-100 w-[18px] h-[18px]" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 bg-transparent border-none shadow-none">
          <CusCalendar
            value={value || null}
            onChange={handleDateChange}
            maxDate={new Date(2030, 0, 1)} // Optional example bounds
          />
        </PopoverContent>
      </Popover>

      {error && (
        <div className="text-red-100 flex items-center gap-1 text-xs mx-4">
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

