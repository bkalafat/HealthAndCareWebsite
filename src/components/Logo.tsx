export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 250 50" {...props}> {/* Adjusted viewBox for larger text */}
      <defs>
        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{stopColor: '#065F46'}} /> {/* Dark green */}
          <stop offset="50%" style={{stopColor: '#34D399'}} /> {/* Light green */}
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
        fill="#34D399"
      />
      <text x="45" y="30" fontSize="24" fontFamily="Arial, sans-serif" fill="url(#text-gradient)">HealTrips</text> {/* Increased font size and applied gradient */}
    </svg>
  )
}
