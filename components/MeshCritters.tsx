/* Pixel-art critters — the same procedural creatures MeshCode generates for its
 * agents, ported as a lightweight, self-contained SVG component. The body
 * templates, mirror rule, eye placement and 4-tone shading all come from
 * meshcode's src/components/PixelMascot.tsx, so these read as real MeshCode
 * critters. Pure CSS idle animation (bob + blink); decorative only. */

type Half = number[][]; // 7 rows x 4 cols (left half). 0 empty · 1 body · 2 highlight · 3 shadow

// Body templates (left half; mirrored to a 7-wide grid at render).
const BODIES: Half[] = [
  // Round blob
  [[0,0,0,0],[0,0,1,1],[0,1,1,1],[1,1,1,1],[1,1,2,1],[1,1,1,1],[0,1,1,1]],
  // Wide toad
  [[0,0,0,0],[0,1,1,1],[1,1,1,1],[1,1,2,1],[1,1,1,1],[1,1,1,1],[1,0,0,1]],
  // Cat-ish (ear at row 1)
  [[0,0,0,0],[1,0,0,0],[1,1,1,1],[0,1,1,1],[1,1,2,1],[1,1,1,1],[0,1,0,1]],
  // Star
  [[0,0,0,0],[0,0,1,0],[0,1,1,1],[1,1,1,1],[1,1,2,1],[1,1,1,1],[0,0,1,0]],
  // Mushroom
  [[0,0,0,0],[0,1,1,1],[1,1,1,1],[0,0,1,1],[0,1,2,1],[0,1,1,1],[0,1,0,1]],
];

// Mirror a 4-col half into a 7-col grid (identical to meshcode's mirrorBody).
function mirror(row: number[]): number[] {
  const right = row.slice(0, 3).reverse();
  return [...right, ...row];
}

// base hex → { body, highlight, shadow } (same offsets as PixelMascot).
function shades(hex: string): Record<number, string> {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const c = (n: number) => Math.max(0, Math.min(255, n));
  return {
    1: hex,
    2: `rgb(${c(r + 70)},${c(g + 70)},${c(b + 70)})`,
    3: `rgb(${c(r - 52)},${c(g - 52)},${c(b - 44)})`,
  };
}

const EYE = "#0a0a14";

type Spec = {
  body: number;
  color: string;
  eyeRow: number;
  size: number;
  bob: string;
  blink: string;
  delay: string;
};

// A little coordinated "team" of critters, in MeshCode's own brand/agent
// palette (src/index.css --color-agent-* + landing hero colors): cool cyans,
// teal, green and violet — the same tones the app paints its agents with.
const TEAM: Spec[] = [
  { body: 1, color: "#06b6d4", eyeRow: 3, size: 74, bob: "2.7s", blink: "5.3s", delay: "0s" },   // brand cyan
  { body: 0, color: "#a78bfa", eyeRow: 3, size: 60, bob: "2.3s", blink: "4.1s", delay: "0.6s" }, // brand violet
  { body: 2, color: "#22c55e", eyeRow: 3, size: 64, bob: "3.0s", blink: "6.2s", delay: "0.3s" }, // brand green
  { body: 3, color: "#2dd4bf", eyeRow: 3, size: 54, bob: "2.5s", blink: "4.8s", delay: "0.9s" }, // qa teal
];

function Critter({ spec }: { spec: Spec }) {
  const grid = BODIES[spec.body].map(mirror);
  const tone = shades(spec.color);
  const leftEye = 1;
  const rightEye = 5; // 7 - 1 - 1
  const eyeStyle = { ["--blink" as string]: spec.blink, animationDelay: spec.delay } as React.CSSProperties;

  const cells: React.ReactNode[] = [];
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const v = grid[r][c];
      if (v > 0) cells.push(<rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill={tone[v]} />);
    }
  }

  return (
    <div className="critter" style={{ ["--bob" as string]: spec.bob, animationDelay: spec.delay } as React.CSSProperties}>
      <svg
        width={spec.size}
        height={spec.size}
        viewBox="0 0 7 7"
        shapeRendering="crispEdges"
        style={{ overflow: "visible", display: "block" }}
      >
        <ellipse cx={3.5} cy={7.15} rx={2.3} ry={0.45} fill="rgba(0,0,0,0.10)" />
        {cells}
        {/* eyes (wide style: dark pixel + white glint), blink together */}
        <rect className="critter-eye" x={leftEye} y={spec.eyeRow} width={1} height={1} fill={EYE} style={eyeStyle} />
        <rect className="critter-eye" x={rightEye} y={spec.eyeRow} width={1} height={1} fill={EYE} style={eyeStyle} />
        <rect className="critter-eye" x={leftEye + 0.34} y={spec.eyeRow + 0.02} width={0.4} height={0.4} fill="#fff" style={eyeStyle} />
        <rect className="critter-eye" x={rightEye + 0.34} y={spec.eyeRow + 0.02} width={0.4} height={0.4} fill="#fff" style={eyeStyle} />
      </svg>
    </div>
  );
}

export default function MeshCritters({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end gap-3 ${className}`} aria-hidden="true">
      {TEAM.map((spec, i) => (
        <Critter key={i} spec={spec} />
      ))}
    </div>
  );
}
