import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Noise from "./Noise";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(230, 196, 196, 0.5)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  // Ref for timeout so we can clear on new mouse move
  const mouseMoveTimeout = useRef<number | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    setPosition({ x: relX, y: relY });

    // Normalize to -1 to 1
    const xRatio = (relX / rect.width) * 2 - 1;
    const yRatio = (relY / rect.height) * 2 - 1;

    const maxTilt = 20;

    gsap.to(card, {
      rotateX: -yRatio * maxTilt,
      rotateY: xRatio * maxTilt,
      transformPerspective: 3000,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.4,
    });

    gsap.to(sphereRef.current, {
      x: xRatio * 80,
      y: yRatio * 80,
      ease: "power2.out",
      duration: 0.4,
    });

    gsap.to(noiseRef.current, {
      x: xRatio * 30,
      y: yRatio * 30,
      ease: "power2.out",
      duration: 0.4,
    });

    gsap.to(contentRef.current, {
      x: xRatio * 140,
      y: yRatio * 140,
      ease: "power2.out",
      duration: 0.4,
    });

    // Show the slate effect while moving
    setOpacity(0.6);

    // Clear previous timeout, then set new timeout to hide effect after idle
    if (mouseMoveTimeout.current) {
      clearTimeout(mouseMoveTimeout.current);
    }
    mouseMoveTimeout.current = window.setTimeout(() => {
      setOpacity(0);
      resetTilt();
    }, 800); // 800ms after last move, fade out
  };

  const resetTilt = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.6,
    });

    gsap.to(sphereRef.current, {
      x: 0,
      y: 0,
      ease: "power2.out",
      duration: 0.6,
    });

    gsap.to(noiseRef.current, {
      x: 0,
      y: 0,
      ease: "power2.out",
      duration: 0.6,
    });

    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      ease: "power2.out",
      duration: 0.6,
    });
  };

  // On mouse leave, immediately hide slate and reset tilt
  const handleMouseLeave = () => {
    if (mouseMoveTimeout.current) {
      clearTimeout(mouseMoveTimeout.current);
    }
    setOpacity(0);
    resetTilt();
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-neutral-600 bg-stone-900 shadow-xl transition-transform ${className}`}
    >
      {/* Noise layer */}
      <div
        ref={noiseRef}
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl border border-stone-600/80 bg-stone-800 shadow-md shadow-black/40"
        style={{ willChange: "transform" }}
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={20}
        />
      </div>
      {/* Sphere layer */}
      <div
        ref={sphereRef}
        className="pointer-events-none absolute inset-0 left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-2xl border border-stone-600/80 bg-stone-600/20 p-2 shadow-xl shadow-black/60"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/sphere.gif"
          alt="Animated sphere"
          width={1000}
          height={1000}
          className="scale-[1.2]"
          unoptimized
          draggable={false}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-30 h-full w-full rounded-2xl">
        {/* Reflective slate beam */}

        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            pointerEvents: "none",
            background: `linear-gradient(
              120deg,
              transparent 30%,
              ${spotlightColor} 55%,
              rgba(255, 255, 255, 0.85) 56%,
              ${spotlightColor} 55%,
              transparent 70%
            )`,
            backgroundSize: "200% 100%",
            backgroundPositionX: `${(position.x / (cardRef.current?.offsetWidth || 1)) * 100}%`,
            backgroundPositionY: `${(position.y / (cardRef.current?.offsetHeight || 1)) * 100}%`,
            filter: "blur(12px) brightness(0.95)",
            borderRadius: "1rem",
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
