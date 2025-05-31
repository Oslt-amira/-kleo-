"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const imageGroups = [
  [
    "/hero/graphic5.jpg",

    "/hero/kleoNote.png",
    "/hero/collage.png",

    "/hero/kleoRewind.png",

    "/hero/musicSet.jpg",
  ],
  [
    "/hero/ticketwhite.png",
    "/hero/working.jpg",
    "/hero/gallery.jpg",
    "/hero/photoshoot.jpg",
    "/hero/rest.jpg",
  ],
  [
    "/hero/work.jpg",
    "/hero/blue.jpg",
    "/hero/beigeInspo.jpg",
    "/hero/photos.jpg",
  ],
];

const positions = [
  [
    { left: "68%", top: "60%" }, // graphic5.png (bottom-right, de-emphasized)
    { left: "20%", top: "25%" }, // kleoNote.png (upper-left, conversational anchor)
    { left: "70%", top: "20%" }, // collage.png (top-right)
    { left: "45%", top: "75%" }, // kleoRewind.png (lower-mid, non-dominant)
    { left: "5%", top: "70%" }, // musicSet.jpg (bottom-left edge)
  ],
  [
    { left: "3%", top: "10%" }, // ticketwhite.png (very top-left)
    { left: "80%", top: "5%" }, // working.jpg (sharp right, above fold)
    { left: "25%", top: "65%" }, // gallery.jpg (bottom-left quadrant)
    { left: "58%", top: "40%" }, // photoshoot.jpg (slightly off-center, non-blocking)
    { left: "90%", top: "45%" }, // rest.jpg (far right anchor)
  ],
  [
    { left: "45%", top: "12%" }, // work.jpg (near top-center, but slightly off)
    { left: "32%", top: "30%" }, // blue.jpg (mid-left, fills tension)
    { left: "2%", top: "48%" }, // beigeInspo.jpg (fills right center)
    { left: "65%", top: "10%" }, // photos.jpg (fills right center)
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
    <main className="pointer-events-none absolute top-0 min-h-screen w-screen overflow-hidden bg-transparent">
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
              className="absolute h-auto w-auto rounded-md transition-transform duration-300"
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
