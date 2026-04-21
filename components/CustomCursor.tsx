"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;
    let lastMoveTime = performance.now();
    let idle = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = performance.now();
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      if (idle) {
        idle = false;
        raf = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      if (performance.now() - lastMoveTime > 2000) {
        idle = true;
        return;
      }
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    // Event delegation for hover effect on interactive elements
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor='hover']");
      if (target) ringRef.current?.classList.add("scale-[2.4]", "bg-white/10");
    };
    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor='hover']");
      if (target) ringRef.current?.classList.remove("scale-[2.4]", "bg-white/10");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-white/40 transition-[transform,background-color] duration-200 ease-out mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
