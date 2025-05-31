"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ManifestoSectionAlt() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    const lines = gsap.utils.toArray(".editorial-line");
    // Entrance animation (start scroll)
    lines.forEach((line: any) => {
      gsap.fromTo(
        line,
        { transformOrigin: "top", opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top ",
            scrub: 1.2,
          },
          duration: 2.5,
          ease: "power3.out",
        },
      );
    });

    // Initial state
    gsap.set(video, {
      scale: 0.7,
      filter: "blur(10px)",
      borderRadius: "4rem",
    });
    // VIDEO SCALE ANIMATION - CLEAN VERSION
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    // Animate in (to peak)
    videoTimeline.to(video, {
      scale: 1.1,
      filter: "blur(4px)",
      borderRadius: "4rem",
      ease: "power2.out",
      duration: "1.2",
      scrub: 0.9,
    });

    // Animate back (to original)
    videoTimeline.to(video, {
      scale: 0.7,
      filter: "blur(10px)",
      borderRadius: "4rem",
      ease: "power2.inOut",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;

      gsap.to(video, {
        rotateY: x,
        rotateX: -y,
        force3D: true,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || textRefs.current.some((ref) => ref === null))
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: 0.4,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      const splitTexts = textRefs.current.map((ref) => {
        return new SplitText(ref!, {
          type: "lines,words",
          linesClass: "overflow-hidden",
        });
      });

      gsap.set(".manifesto-title", { willChange: "transform, opacity" });
      tl.from(".manifesto-title", { opacity: 0, y: 50, duration: 0.5 });

      // Initial paragraph
      tl.from(
        splitTexts[0].words,
        { opacity: 0, y: 100, stagger: 0.01, duration: 0.5 },
        "+=0.2",
      );

      // REVISED - Imprints paragraph
      tl.from(
        splitTexts[1].words,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
          transformOrigin: "top center",
          stagger: 0.015,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.2",
      );
      tl.from(
        splitTexts[4]?.words || [],
        {
          opacity: 0,
          scale: 1.2,
          stagger: 0.02,
          duration: 0.5,
        },
        "<0.1",
      );
      return () => {
        splitTexts.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative min-h-screen overflow-hidden pb-20"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <video
          ref={videoRef}
          src="/mannifestoo.mp4"
          className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full rounded-[5rem] object-cover brightness-[200] invert transition-all dark:brightness-100 dark:invert-0"
          muted
          autoPlay
          loop
          playsInline
          style={{
            willChange: "transform, filter, borderRadius",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      {/* Animated Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="editorial-line absolute left-[7.5%] top-0 h-full w-px bg-stone-400 opacity-20 dark:bg-stone-600" />

        <div className="editorial-line absolute left-0 top-[62%] h-px w-full bg-stone-400 opacity-10 dark:bg-stone-600" />
      </div>

      {/* Manifesto content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-6 sm:px-8 lg:px-20">
        {/* Title */}
        <div className="manifesto-title mb-32">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-6xl leading-tight text-stone-900 dark:text-stone-100 md:text-7xl"
          >
            Manifesto
          </motion.h2>
        </div>

        {/* Line 1 */}
        <div className="mb-40 grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <motion.div
              ref={(el) => {
                textRefs.current[0] = el;
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-3xl leading-snug text-stone-900 dark:text-stone-300 md:text-5xl"
            >
              We're reimagining what calendars were meant to be —
              <br />
              soulful, creative, and visually alive.
            </motion.div>
          </div>
        </div>

        {/* Line 2 (right-aligned) */}
        <div className="mb-48 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <motion.div
              ref={(el) => {
                textRefs.current[1] = el;
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-xl leading-relaxed text-stone-900 dark:text-stone-300 md:text-2xl"
            >
              Time isn't just what passes or what gets done. It's what imprints.
              <br />
              <br />
              Calendars should reflect life as it feels — not just as it’s
              planned.
            </motion.div>
          </div>
        </div>

        {/* Final Statement (centered) */}
        <div className="-mt-20 mb-4 flex justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            ref={(el) => {
              textRefs.current[4] = el;
            }}
            className="max-w-2xl text-center font-serif text-2xl leading-normal text-stone-900 dark:text-stone-100"
          >
            Because productivity should be personal, rich, and full of color.
            <br />
            <span className="mt-28 block font-sans text-xs uppercase tracking-[0.3em] text-stone-600 dark:text-stone-400">
              Planning as expression. Productivity as art.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
