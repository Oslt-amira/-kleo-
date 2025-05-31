"use client";
import Loader from "@/components/landing-page/Loader";
import WaitlistComponent from "@/components/landing-page/Waitlist";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Page() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <Suspense fallback={<Loader />}>
        <div
          ref={cursorRef}
          className="pointer-events-none fixed z-50 hidden h-4 w-4 rounded-full border border-white opacity-70 mix-blend-difference sm:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <WaitlistComponent />
      </Suspense>
    </main>
  );
}
