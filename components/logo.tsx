export function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Zen ensō — canonical single-arc mark from github.com/zenlm/logo */}
      <path
        d="M66.22 83.26 A37 37 0 1 1 85.57 60.20"
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
    </svg>
  );
}