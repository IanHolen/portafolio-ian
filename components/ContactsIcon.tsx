/**
 * Contact avatar mark, drawn as vector so it stays crisp at 17px
 * and never depends on a raster asset being served.
 */
export default function ContactsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id="contact-avatar-ring">
          <circle cx="256" cy="256" r="216" />
        </clipPath>
      </defs>

      {/* ring */}
      <circle cx="256" cy="256" r="236" fill="none" stroke="#4caf50" strokeWidth="40" />

      {/* shoulders, clipped by the ring */}
      <g clipPath="url(#contact-avatar-ring)">
        <rect x="66" y="270" width="380" height="264" rx="126" ry="126" fill="#4caf50" />
      </g>

      {/* head */}
      <circle cx="256" cy="169" r="88" fill="#4caf50" />
    </svg>
  );
}
