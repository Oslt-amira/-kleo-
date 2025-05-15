"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create a timeline for the manifesto animations
    const manifestoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    // Split text for animation
    const splitTexts = textRefs.current.map((ref) => {
      if (ref) {
        return new SplitText(ref, {
          type: "lines,words",
          linesClass: "overflow-hidden",
        });
      }
      return null;
    });

    // First text block animation
    manifestoTimeline.from(splitTexts[0]?.words || [], {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "power3.out",
    });

    // Animate the first image
    manifestoTimeline.from(
      imageRefs.current[0],
      {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<0.2",
    );

    // Second text block animation
    manifestoTimeline.from(
      splitTexts[1]?.words || [],
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.01,
        ease: "power3.out",
      },
      "<0.3",
    );

    // Animate the second image
    manifestoTimeline.from(
      imageRefs.current[1],
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<0.2",
    );

    // Third text block animation
    manifestoTimeline.from(
      splitTexts[2]?.words || [],
      {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.out",
      },
      "<0.3",
    );

    // Fourth text block animation with rotation
    manifestoTimeline.from(
      splitTexts[3]?.words || [],
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.01,
        ease: "back.out(1.7)",
      },
      "<0.2",
    );

    // Animate the third image
    manifestoTimeline.from(
      imageRefs.current[2],
      {
        scale: 1.2,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<0.1",
    );

    // Final text block animation
    manifestoTimeline.from(
      splitTexts[4]?.words || [],
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.out",
      },
      "<0.3",
    );

    return () => {
      // Clean up split text instances
      splitTexts.forEach((splitText) => {
        if (splitText) {
          splitText.revert();
        }
      });

      // Kill ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-20"
    >
      <div className="absolute left-10 top-10 font-serif text-9xl opacity-5">
        M
      </div>

      {/* Manifesto Title */}
      <div className="container mx-auto mb-20 px-6">
        <h2 className="font-serif text-5xl md:text-7xl">Manifesto</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          {/* First text block - Left aligned, large */}
          <div className="col-span-12 mb-16 md:col-span-8">
            <div
              ref={(el) => {
                textRefs.current[0] = el;
              }}
              className="font-serif text-3xl leading-relaxed md:text-4xl"
            >
              We're reimagining what calendars were meant to be — soulful,
              creative, and visually alive.
            </div>
          </div>

          {/* First image */}
          <div
            ref={(el) => {
              imageRefs.current[0] = el;
            }}
            className="col-span-12 mb-16 md:col-span-4 md:col-start-9"
          >
            <div className="aspect-square overflow-hidden border border-white/20">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Creative calendar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Second text block - Right aligned, medium */}
          <div className="col-span-12 mb-16 md:col-span-6 md:col-start-6">
            <div
              ref={(el) => {
                textRefs.current[1] = el;
              }}
              className="text-xl leading-relaxed text-white/80 md:text-2xl"
            >
              Time isn't just what passes or what gets done. It's what imprints.
              We believe calendars should reflect life as it feels, not just as
              it's planned.
            </div>
          </div>

          {/* Second image */}
          <div
            ref={(el) => {
              imageRefs.current[1] = el;
            }}
            className="col-span-12 mb-16 md:col-span-5"
          >
            <div className="h-40 overflow-hidden border border-white/20">
              <img
                src="/placeholder.svg?height=200&width=500"
                alt="Life moments"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Third text block - Center, large, emphasized */}
          <div className="col-span-12 mb-16 flex justify-center">
            <div
              ref={(el) => {
                textRefs.current[2] = el;
              }}
              className="max-w-3xl text-center font-serif text-2xl leading-relaxed md:text-5xl"
            >
              Kleo exists to document your life as it unfolds —
              <br />
              <span className="italic">
                A soft rebellion against sterile tools and rigid routines.
              </span>
            </div>
          </div>

          {/* Fourth text block - Left aligned, small, with border */}
          <div className="col-span-12 mb-16 md:col-span-7">
            <div
              ref={(el) => {
                textRefs.current[3] = el;
              }}
              className="border-l-2 border-white/30 p-6 text-lg leading-relaxed text-white/70 md:text-xl"
            >
              The latte with a friend. The song that put you in a creative
              trance. The fragments of inspiration you've gathered for your next
              project.
            </div>
          </div>

          {/* Third image */}
          <div
            ref={(el) => {
              imageRefs.current[2] = el;
            }}
            className="col-span-12 mb-16 md:col-span-4 md:col-start-9"
          >
            <div className="aspect-video overflow-hidden border border-white/20">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Creative inspiration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Fifth text block - Full width, large conclusion */}
          <div className="col-span-12 flex justify-center">
            <div
              ref={(el) => {
                textRefs.current[4] = el;
              }}
              className="max-w-3xl text-center font-serif text-2xl leading-relaxed md:text-4xl"
            >
              Because productivity should be personal, rich, and full of color.
              <br />
              <span className="mt-4 block text-xl uppercase tracking-widest md:text-2xl">
                Planning as expression. Productivity as art.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <Image
          src="/kleo-logo.png"
          alt="Kleo Logo"
          width={100}
          height={100}
          className="invert"
        />
      </div>
    </section>
  );
}
