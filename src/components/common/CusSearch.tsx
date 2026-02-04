"use client";

import React, { useRef, useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { clsx as cn } from "clsx";

interface CusSearchProps {
  id?: string;
  placeholder?: string;
  styleClass?: string;
  inputClass?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onEnter?: () => void;
  onClear?: () => void;
  onChange?: (value: string) => void;
  initialValue?: string;
  transparent?: boolean;
}

export function CusSearch({
  id = "searchInput",
  placeholder = "",
  styleClass = "",
  inputClass = "",
  disabled = false,
  onBlur,
  onFocus,
  onEnter,
  onClear,
  onChange,
  initialValue = "",
  transparent = false,
}: CusSearchProps) {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleClear = () => {
    setValue("");
    if (onChange) {
      onChange("");
    }
    if (onClear) {
      onClear();
    }
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div className={cn("w-full h-auto cus-search flex flex-col relative", styleClass)}>
      <div
        className={cn(
          "w-full flex items-center gap-2 px-3 min-h-14 rounded-xl border transition-colors",
          transparent ? "bg-transparent border-neutral-10" : "bg-neutral-05 border-neutral-10",
          !disabled && "hover:border-neutral-60 focus-within:border-neutral-60",
          disabled && "opacity-60 pointer-events-none"
        )}
      >
        <Search className="text-neutral-60 w-5 h-5" />
        <input
          ref={inputRef}
          id={id}
          name={`${id}-search-input`}
          type="text"
          className={cn(
            "flex-1 bg-transparent border-none outline-none text-base font-normal",
            inputClass,
            transparent ? "text-white placeholder:text-white/60" : "text-neutral-100 placeholder:text-neutral-40"
          )}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="flex-shrink-0 focus:outline-none"
            aria-label="Clear search"
          >
            <X className={cn("w-4 h-4 cursor-pointer", transparent ? "text-white/60 hover:text-white" : "text-neutral-40 hover:text-neutral-60")} />
          </button>
        )}
      </div>
    </div>
  );
}
