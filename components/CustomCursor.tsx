"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // disable on touch / coarse pointers
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

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      ringRef.current?.classList.add("scale-[2.4]", "bg-white/10");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("scale-[2.4]", "bg-white/10");
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const interactive = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor='hover']"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
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
