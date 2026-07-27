/**
 * Contacts app icon, drawn as vector so it stays crisp at 18px
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
        <clipPath id="contacts-card">
          <rect x="64" y="64" width="384" height="384" rx="58" ry="58" />
        </clipPath>
        <clipPath id="contacts-ring">
          <circle cx="234" cy="255" r="107" />
        </clipPath>
      </defs>

      <g clipPath="url(#contacts-card)">
        <rect x="64" y="64" width="384" height="384" fill="#d6cfc9" />
        {/* colour tabs on the right edge */}
        <rect x="396" y="64" width="52" height="92" fill="#b0aca9" />
        <rect x="396" y="156" width="52" height="100" fill="#2eb9f6" />
        <rect x="396" y="256" width="52" height="99" fill="#ff9500" />
        <rect x="396" y="355" width="52" height="93" fill="#00c455" />
      </g>

      {/* person */}
      <circle cx="234" cy="255" r="118" fill="none" stroke="#9e9e9e" strokeWidth="22" />
      <g clipPath="url(#contacts-ring)">
        <circle cx="234" cy="372" r="82" fill="#9e9e9e" />
      </g>
      <circle cx="234" cy="228" r="45" fill="#9e9e9e" />
    </svg>
  );
}
