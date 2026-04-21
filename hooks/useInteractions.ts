"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";

/** Magnetic effect — button subtly follows cursor within a proximity zone */
export function useMagnetic(strength = 6, radius = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        const factor = (1 - dist / radius) * strength;
        setOffset({ x: (dx / dist) * factor, y: (dy / dist) * factor });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    },
    [strength, radius]
  );

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return { ref, offset, onMove, onLeave };
}

/** 3D tilt effect for cards — returns handlers and transform style */
export function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.15s ease-out",
  });

  const onMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `perspective(800px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg)`,
        transition: "transform 0.1s ease-out",
      });
    },
    [maxDeg]
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.4s ease-out",
    });
  }, []);

  return { ref, style, onMove, onLeave };
}
