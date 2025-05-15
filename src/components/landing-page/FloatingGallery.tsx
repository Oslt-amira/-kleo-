"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const imageGroups = [
  ["/tools/pinterest.png", "/tools/notion.png", "/tools/obsidian.jpg"],
  ["/tools/notion.png", "/tools/pinterest.png", "/tools/obsidian.jpg"],
  ["/tools/pinterest.png", "/tools/pinterest.png"],
];

const positions = [
  [
    { left: "80%", top: "60%" }, //0-0
    { left: "20%", top: "50%" }, //0.1
    { left: "55%", top: "15%" }, //0.2
  ],
  [
    { left: "5%", top: "15%" }, //1-0
    { left: "70%", top: "30%" }, //1-1
    { left: "55%", top: "75%" }, //1-2
  ],
  [
    { left: "25%", top: "80%" }, //2-0
    { left: "30%", top: "25%" }, //2-1
  ],
];

export default function DepthFloatingGallery() {
  const planeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const spring = 0.08;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      target.current.x = x;
      target.current.y = y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const update = () => {
      mouse.current.x += (target.current.x - mouse.current.x) * spring;
      mouse.current.y += (target.current.y - mouse.current.y) * spring;

      const depths = [40, 25, 15]; // movement scale by depth

      planeRefs.forEach((ref, i) => {
        if (ref.current) {
          gsap.to(ref.current, {
            x: mouse.current.x * depths[i],
            y: mouse.current.y * depths[i],
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });

      requestAnimationFrame(update);
    };

    update();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <main className="pointer-events-none absolute top-0 h-screen w-screen overflow-hidden bg-transparent">
      {imageGroups.map((group, planeIndex) => (
        <div
          key={planeIndex}
          ref={planeRefs[planeIndex]}
          className="absolute inset-0"
          style={{
            zIndex: 10 - planeIndex,
            filter: `brightness(${1 - planeIndex * 0.2}) blur(${planeIndex * 1.2}px)`,
            scale: `${1 - planeIndex * 0.1}`,
          }}
        >
          {group.map((img, imgIndex) => (
            <Image
              key={imgIndex}
              src={img}
              width={160 - planeIndex * 20}
              height={120 - planeIndex * 10}
              alt={`Depth ${planeIndex}-${imgIndex}`}
              className="absolute h-auto rounded-xl shadow-2xl transition-transform duration-300"
              style={{
                left: positions[planeIndex][imgIndex].left,
                top: positions[planeIndex][imgIndex].top,
              }}
            />
          ))}
        </div>
      ))}
    </main>
  );
}
