"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react"; // Using lucide for arrows
import { clsx as cn } from "clsx";

// Types
export type SelectionMode = 'single' | 'range';
export type DatePickerValue = string | { start: string | null; end: string | null } | null;

interface CusCalendarProps {
  value: DatePickerValue;
  onChange: (value: DatePickerValue) => void;
  selectionMode?: SelectionMode;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
// Using simple English or maybe I should stick to full names if space permits, user used translation keys.
// "calendar.mon" -> Mon seems standard.

export const CusCalendar: React.FC<CusCalendarProps> = ({
  value,
  onChange,
  selectionMode = 'single',
  minDate,
  maxDate,
  disabled = false,
}) => {
  // State for view (month/year)
  const [viewDate, setViewDate] = useState(() => {
    // Initialize viewDate based on value or today
    if (typeof value === 'string' && value) return new Date(value);
    // If range... logic
    return new Date();
  });

  // Helper to format date YYYY-MM-DD
  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  };

  const isBeforeDay = (d1: Date, d2: Date) => {
    return new Date(d1.toDateString()) < new Date(d2.toDateString());
  };

  const isAfterDay = (d1: Date, d2: Date) => {
    return new Date(d1.toDateString()) > new Date(d2.toDateString());
  };

  // Generate days
  const days = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth(); // 0-indexed

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    // Calculate leading blanks (Monday first)
    // getDay(): 0 = Sunday, 1 = Monday...
    // We want Monday = 0, Sunday = 6
    let startDay = firstDayOfMonth.getDay(); // 0(Sun) - 6(Sat)
    // Convert to Mon=0...Sun=6
    // Sun(0) -> 6
    // Mon(1) -> 0
    // Tue(2) -> 1
    const leadingEmpty = (startDay + 6) % 7;

    const dayCells = [];

    // Add logic for value checking
    const selectedDate = (typeof value === 'string' && value) ? new Date(value) : null;

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = isSameDay(date, new Date());
      let isSelected = false;
      let inRange = false;
      let isRangeStart = false;
      let isRangeEnd = false;
      let isDisabled = false;

      // Min/Max check
      if (minDate && isBeforeDay(date, minDate)) isDisabled = true;
      if (maxDate && isAfterDay(date, maxDate)) isDisabled = true;

      // Selection check
      if (selectionMode === 'single' && selectedDate) {
        isSelected = isSameDay(date, selectedDate);
      }

      // Range logic (skipped for now as user uses single mostly, but keeping placeholder)

      dayCells.push({
        date,
        day: i,
        isToday,
        isSelected,
        isDisabled,
        // ... range props
      });
    }

    return { leadingEmpty, dayCells };
  }, [viewDate, value, minDate, maxDate, selectionMode]);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleSelectDay = (date: Date) => {
    if (onChange) {
      // Adjust for timezone ? 
      // Usually we want the date string as YYYY-MM-DD local
      onChange(formatDate(date));
    }
  };

  const monthLabel = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="w-[320px] p-4 bg-white rounded-xl shadow-lg border border-neutral-10 flex flex-col gap-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="p-2 hover:bg-neutral-100/10 rounded-full transition-colors"
          onClick={handlePrevMonth}
          disabled={disabled}
        >
          <ChevronLeft className="w-5 h-5 text-neutral-100" />
        </button>
        <div className="text-base font-medium text-neutral-100 text-center capitalize">
          {monthLabel}
        </div>
        <button
          type="button"
          className="p-2 hover:bg-neutral-100/10 rounded-full transition-colors"
          onClick={handleNextMonth}
          disabled={disabled}
        >
          <ChevronRight className="w-5 h-5 text-neutral-100" />
        </button>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-2">
        {/* Days Header */}
        <div className="grid grid-cols-7 text-center text-sm font-medium text-neutral-60">
          {DAYS_OF_WEEK.map(d => <div key={d} className="py-1">{d}</div>)}
        </div>

        {/* Days Cells */}
        <div className="grid grid-cols-7 gap-y-1 gap-x-1">
          {/* Leading blanks */}
          {Array.from({ length: days.leadingEmpty }).map((_, i) => (
            <div key={`empty-${i}`} className="h-8" />
          ))}

          {days.dayCells.map((cell, idx) => (
            <button
              key={idx}
              type="button"
              disabled={cell.isDisabled || disabled}
              onClick={() => handleSelectDay(cell.date)}
              className={cn(
                "h-8 w-8 mx-auto flex items-center justify-center rounded-lg text-sm transition-colors",
                cell.isDisabled ? "text-neutral-40 cursor-not-allowed" : "text-neutral-100 hover:bg-neutral-05 cursor-pointer",
                cell.isSelected && "bg-[#7BBCB0] text-white hover:bg-[#7BBCB0]", // Primary color from Profile tab
                cell.isToday && !cell.isSelected && "text-[#7BBCB0] font-bold"
              )}
            >
              {cell.day}
            </button>
          ))}
        </div>
      </div>

      {/* Note (optional from provided code) */}
      {/* <div className="p-3 bg-[#E9F1FB] border border-[#c4ddfb] rounded-lg flex items-center gap-2">
           <Info className="w-4 h-4 text-blue-500" />
           <p className="text-xs text-neutral-100">Click to select date</p>
       </div> */}
    </div>
  );
};
