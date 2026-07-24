import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ian Holender — Fullstack Developer & Data Engineer";
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
            "radial-gradient(ellipse at 22% 18%, rgba(28,91,58,0.10), transparent 55%), radial-gradient(ellipse 120% 90% at 50% -10%, #f7f5ee 0%, #f3f1ea 60%)",
          color: "#18180f",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            fontWeight: 600,
            color: "#5b5747",
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
              background: "#18180f",
              color: "#f3f1ea",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -2,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            IH
          </div>
          Portafolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 146,
              lineHeight: 0.92,
              fontWeight: 500,
              letterSpacing: -5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#18180f" }}>Ian</span>
            <span style={{ color: "#a8a494" }}>Holender</span>
          </div>
          <div
            style={{
              fontSize: 33,
              color: "#5b5747",
              fontFamily: "sans-serif",
              marginTop: 22,
              maxWidth: 860,
              lineHeight: 1.35,
            }}
          >
            Fullstack Developer &amp; Data Engineer — productos con IA en tiempo
            real y arquitecturas de datos sobre Microsoft Fabric &amp; Azure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8a8676",
            fontFamily: "sans-serif",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Ciudad de México</span>
          <span>ianholender.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
