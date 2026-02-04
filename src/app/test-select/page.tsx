"use client";

import { useState } from "react";
import { CusSelect, Option } from "@/components/common/CusSelect";

export default function TestSelectPage() {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);
  const [selectedValueImg, setSelectedValueImg] = useState<string | number | null>(null);
  const [errorExample, setErrorExample] = useState<string | number | null>(null);
  const [touched, setTouched] = useState(false);

  const options: Option[] = [
    { id: 1, value: "1", label: "Option 1" },
    { id: 2, value: "2", label: "Option 2" },
    { id: 3, value: "3", label: "Option 3 - A very long option to test wrapping behavior and responsiveness of the dropdown item" },
  ];

  const imgOptions: Option[] = [
    { id: 1, value: "vn", label: "Vietnam", url: "https://flagcdn.com/w20/vn.png" },
    { id: 2, value: "us", label: "United States", url: "https://flagcdn.com/w20/us.png" },
    { id: 3, value: "jp", label: "Japan", url: "https://flagcdn.com/w20/jp.png" },
  ];

  return (
    <div className="p-10 space-y-10 max-w-md mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-neutral-100">CusSelect Demo</h1>

      {/* Basic Case */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Basic Select</h2>
        <CusSelect
          label="Select Option"
          options={options}
          value={selectedValue}
          onChange={(val) => setSelectedValue(val)}
        />
        <p className="text-xs mt-1 text-gray-500">Selected: {selectedValue}</p>
      </div>

      {/* Image Case */}
      <div>
        <h2 className="text-lg font-semibold mb-2">With Images</h2>
        <CusSelect
          label="Select Country"
          options={imgOptions}
          value={selectedValueImg}
          onChange={(val) => setSelectedValueImg(val)}
          isShowImg={true}
        />
        <p className="text-xs mt-1 text-gray-500">Selected: {selectedValueImg}</p>
      </div>

      {/* Error Case */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Error State</h2>
        <CusSelect
          label="Required Field"
          options={options}
          value={errorExample}
          onChange={(val) => setErrorExample(val)}
          required={true}
          error="This field is required"
          touched={touched}
          onBlur={() => setTouched(true)}
        />
        <button
          className="mt-2 text-xs px-2 py-1 bg-red-100 text-white rounded"
          onClick={() => setTouched(true)}
        >
          Trigger Blur/Touch
        </button>
      </div>

      {/* Disabled Case */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Disabled State</h2>
        <CusSelect
          label="Disabled Field"
          options={options}
          value="1"
          onChange={() => { }}
          disabled={true}
        />
      </div>
    </div>
  );
}
