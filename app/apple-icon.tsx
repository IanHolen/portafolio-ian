import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.45), transparent 60%), #070709",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 300,
          fontStyle: "italic",
          fontFamily: "serif",
          letterSpacing: -4,
        }}
      >
        IH
      </div>
    ),
    { ...size }
  );
}
