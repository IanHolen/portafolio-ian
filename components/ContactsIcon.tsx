/**
 * Contact avatar mark, drawn as vector so it stays crisp at 18px
 * and never depends on a raster asset being served.
 * Uses currentColor so it follows the button's ink / hover-white state.
 */
export default function ContactsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* head */}
      <ellipse cx="256" cy="140" rx="101" ry="110" />
      {/* shoulders */}
      <path d="M256 287C148 287 58 358 45 447a26 26 0 0 0 26 30h370a26 26 0 0 0 26-30c-13-89-103-160-211-160z" />
    </svg>
  );
}
