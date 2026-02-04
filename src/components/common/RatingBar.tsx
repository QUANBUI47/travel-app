type RatingBarProps = {
  label: string;
  value: number; // ví dụ 4.8
  max?: number;  // mặc định 5
};

export function RatingBar({
  label,
  value,
  max = 5,
}: RatingBarProps) {
  const percent = (value / max) * 100;

  return (
    <div className="flex items-center gap-4">
      {/* Label */}
      <span className="w-[120px] text-sm text-gray-700">
        {label}
      </span>

      {/* Progress bar */}
      <div className="flex-1 h-[6px] w-[220px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Value */}
      <span className="w-[32px] text-sm text-gray-700 text-right">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
