import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ian Holender — Data Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.25), transparent 60%), #070709",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            color: "#8b5cf6",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#ffffff",
              fontSize: 32,
              fontStyle: "italic",
              letterSpacing: -2,
            }}
          >
            IH
          </div>
          Portafolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 140,
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: -4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Ian</span>
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg,#c4b5fd 0%,#8b5cf6 50%,#3b82f6 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Holender
            </span>
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.65)",
              fontFamily: "sans-serif",
              marginTop: 16,
              maxWidth: 820,
              lineHeight: 1.3,
            }}
          >
            Data Engineer — arquitecturas event-driven sobre Microsoft Fabric y
            Azure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "sans-serif",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Ciudad de México</span>
          <span>portafolio-ian.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
