"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h2 className="text-xl font-semibold">Đã xảy ra lỗi!</h2>
      <button
        className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90"
        onClick={() => reset()}
      >
        Thử lại
      </button>
    </div>
  );
}
