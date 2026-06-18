export function CoffeeBeanIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 110" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="40" cy="55" rx="30" ry="48" transform="rotate(18 40 55)" />
      <path
        d="M32 10 C55 35, 55 72, 30 100"
        fill="none"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-6 text-[#7A6343]">
      <div className="h-px bg-gray-300 flex-1"></div>
      <div className="mx-6 rounded-full bg-white border border-gray-200 p-2 shadow-sm">
        <CoffeeBeanIcon />
      </div>
      <div className="h-px bg-gray-300 flex-1"></div>
    </div>
  );
}
