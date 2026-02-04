"use client";

import { useState, useId, useEffect, useRef } from "react";
import clsx from "clsx";

export interface CusInputProps {
  id?: string;
  label?: string;
  type?: "text" | "number" | "email" | "tel" | "taxCode";
  value?: string;
  disabled?: boolean;
  className?: string;
  error?: string | null;
  maxlength?: number | null;
  tabIndex?: number;
  allowedPattern?: string | null; // regex for DISALLOWED chars, will be removed
  uppercase?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function CusInput({
  id,
  label = "",
  type = "text",
  value: controlledValue,
  disabled = false,
  className = "",
  error = null,
  maxlength = null,
  tabIndex = 0,
  allowedPattern = null,
  uppercase = false,
  placeholder,
  onChange,
  onBlur,
  onFocus,
}: CusInputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const [internalValue, setInternalValue] = useState(controlledValue || "");
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  useEffect(() => {
    if (isControlled) {
      setInternalValue(controlledValue || "");
    }
  }, [controlledValue, isControlled]);

  const formatTaxCode = (input: string): string => {
    // Remove all characters except digits and dash
    const cleaned = input.replace(/[^0-9-]/g, "");

    // Remove existing dashes to rebuild the format
    const digitsOnly = cleaned.replace(/-/g, "");

    // Limit to 13 digits maximum
    const limitedDigits = digitsOnly.slice(0, 13);

    // Auto-format: add dash after 10th digit if we have more than 10 digits
    if (limitedDigits.length > 10) {
      return limitedDigits.slice(0, 10) + "-" + limitedDigits.slice(10);
    }

    return limitedDigits;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (uppercase) {
      newValue = newValue.toUpperCase();
    }

    if (allowedPattern) {
      try {
        const re = new RegExp(allowedPattern, "gu");
        newValue = newValue.replace(re, "");
      } catch {
        // ignore invalid regex
      }
    }

    // Special handling for taxCode type
    if (type === "taxCode") {
      newValue = formatTaxCode(newValue);
    }

    // Apply maxlength
    if (maxlength !== null && maxlength !== undefined) {
      newValue = newValue.slice(0, maxlength);
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);

    if (uppercase && value) {
      const upperValue = value.toUpperCase();
      if (upperValue !== value) {
        const finalValue = isControlled ? upperValue : upperValue;
        if (!isControlled) {
          setInternalValue(upperValue);
        }
        onChange?.(upperValue);
      }
    }

    // Special handling for taxCode type - ensure proper formatting on focus
    if (type === "taxCode" && value) {
      const formattedValue = formatTaxCode(value);
      if (formattedValue !== value) {
        if (!isControlled) {
          setInternalValue(formattedValue);
        }
        onChange?.(formattedValue);
      }
    }

    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Trim value when user leaves the input field
    let trimmedValue = value.trim();

    // Special handling for taxCode type - apply formatting on blur
    if (type === "taxCode") {
      trimmedValue = formatTaxCode(trimmedValue);
    }

    if (trimmedValue !== value) {
      if (!isControlled) {
        setInternalValue(trimmedValue);
      }
      onChange?.(trimmedValue);
    }
    onBlur?.();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData?.getData("text/plain") ?? "";
    const input = e.currentTarget;
    const selectionStart = input.selectionStart ?? value.length;
    const selectionEnd = input.selectionEnd ?? value.length;

    const beforeSelection = value.slice(0, selectionStart);
    const afterSelection = value.slice(selectionEnd);

    let textToInsert = pastedText;

    // Apply allowedPattern filtering to pasted text (remove disallowed characters)
    if (allowedPattern) {
      try {
        const re = new RegExp(allowedPattern, "gu");
        textToInsert = textToInsert.replace(re, "");
      } catch {
        // ignore invalid regex
      }
    }

    if (maxlength !== null && maxlength !== undefined) {
      const selectedLength = selectionEnd - selectionStart;
      const currentLengthExcludingSelection = value.length - selectedLength;
      const remainingCapacity = maxlength - currentLengthExcludingSelection;
      if (remainingCapacity <= 0) {
        textToInsert = "";
      } else if (textToInsert.length > remainingCapacity) {
        textToInsert = textToInsert.slice(0, remainingCapacity);
      }
    }

    let newValue = beforeSelection + textToInsert + afterSelection;

    // Special handling for taxCode type on paste
    if (type === "taxCode") {
      newValue = formatTaxCode(newValue);
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const inputType = type === "taxCode" ? "text" : type;

  return (
    <div className="cus-input">
      <div
        className={clsx(
          "relative w-full",
          hasValue && "has-value",
          disabled && "p-disabled"
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          name={label}
          type={inputType}
          value={value || ""}
          disabled={disabled}
          maxLength={maxlength || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          placeholder={placeholder}
          className={clsx(
            "w-full",
            hasValue && "ng-dirty",
            error && "border-red-100",
            className
          )}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPaste={handlePaste}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="pointer-events-none"
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <div
          id={`${inputId}-help`}
          className="mt-1 mx-4 text-red-100 flex items-center gap-1 text-xs"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 12H7v-2h2v2zm0-4H7V4h2v4z"
              fill="currentColor"
            />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
