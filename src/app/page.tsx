"use client";

import { Hero } from "@/components/landing-page/Hero";
import { NavBar } from "@/components/landing-page/NavBar";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { Calendar, Sparkles, Share2, Layers } from "lucide-react";
import MediaRotator from "@/components/landing-page/MediaRouter";
import ManifestoSectionAlt from "@/components/landing-page/ManifestoSectionAlt";
import NumberedSection from "@/components/landing-page/NumberedSection";
import FeatureSection from "@/components/landing-page/FeatureSection";
import IntegrationGrid from "@/components/landing-page/IntegrationGrid";
import { motion } from "framer-motion";
import Loader from "@/components/landing-page/Loader";
import ScrollReveal from "@/components/landing-page/RevealText";
import AnimatedBlock from "@/components/landing-page/AnimatedBlock";
import Noise from "@/components/landing-page/Noise";
import DecayCard from "@/components/landing-page/DecayingCard";
import CanvasCursor from "@/components/landing-page/Canvas-cursor";
import ScrollVelocity from "@/components/landing-page/ScrollVelocity";
import Marquee from "@/components/landing-page/Marquee";
import CTA from "@/components/landing-page/CTA";
import Integrations from "@/components/landing-page/Integrations";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const scrollTaglineRef = useRef<HTMLDivElement>(null);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gifRef = useRef(null);

  useEffect(() => {
    const container = gifRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // range -10 to 10
      const y = (e.clientY / innerHeight - 0.5) * 20;

      gsap.to(container, {
        rotationY: x,
        rotationX: -y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);
  // Initialize animations
  useEffect(() => {
    // Initial loading animation
    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true),
    });

    tl.from(".loader-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out",
    }).to(".loader", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
    });

    // Hero animations
    gsap.from(heroRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      delay: 2.2,
      ease: "power3.out",
    });

    gsap.from(".star-logo", {
      rotate: -90,
      opacity: 0,
      duration: 1.5,
      delay: 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.from(taglineRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 2.7,
      ease: "power2.out",
    });

    // Scroll animations
    ScrollTrigger.batch(".animate-on-scroll", {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      start: "top 85%",
    });

    // Scroll animation for the second tagline
    gsap.from(scrollTaglineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: scrollTaglineRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      ease: "power2.out",
    });

    // Feature grid animation with staggered entries
    gsap.from(".feature-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: featureGridRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Horizontal scroll for the features section
    const sections = gsap.utils.toArray(".horizontal-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () =>
          "+=" +
          (document.querySelector(".horizontal-container") as HTMLElement)!
            .offsetWidth,
      },
    });

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      y: (i, el) =>
        -Number.parseFloat(el.getAttribute("data-speed")!) *
        ScrollTrigger.maxScroll(window) *
        0.5,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 hidden h-4 w-4 rounded-full border border-white opacity-70 mix-blend-difference sm:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <Loader />
      <NavBar />
      <Hero />

      <AnimatedBlock />
      <section id="manifesto">
        <ManifestoSectionAlt />
        <CanvasCursor />
      </section>

      <motion.div
        className="my-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="text-lg font-thin text-stone-800 dark:text-stone-300">
            {" "}
            Kleo exists to document your life as it unfolds —
          </div>
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          <div className="text-lg font-thin text-stone-800 dark:text-stone-300">
            {" "}
            A soft rebellion against sterile tools and rigid routines.{" "}
          </div>
        </Marquee>
      </motion.div>

      {/* Features Section - Horizontal Scroll */}
      <section
        id="features"
        className="horizontal-container relative mt-10 flex flex-row"
      >
        <section className="min-w-screen flex h-full flex-col p-8">
          <div className="max-w-xl">
            <h1 className="feature-title font-serif text-3xl">
              Kleo's collection of curated features
            </h1>
            <p className="mt-2 text-lg font-thin italic">Beyond Scheduling</p>
          </div>
        </section>

        <div className="overflow-hidden" style={{ height: "100vh" }}>
          <div className="horizontal-sections-wrapper flex">
            <NumberedSection
              index={0}
              title="Multimedia Calendar Entries"
              description="Every event can hold photos, videos, drawings, audio clips, even scribbled thoughts. Make memories visually enriching."
              media={[
                {
                  type: "image",
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Calendar with media",
                },
                {
                  type: "image",
                  src: "/placeholder.svg?height=200&width=300",
                  alt: "Media example",
                },
              ]}
            />

            <NumberedSection
              index={1}
              title="Zine-Style Layouts"
              description="Life isn't linear. Your calendar shouldn't be either. Switch from calendar month & week grid to collage, scrapbook, or timeline views. Indulge in a more a digital diary than a corporate calendar."
              media={[
                {
                  type: "image",
                  src: "/placeholder.svg?height=300&width=400",
                  alt: "Zine layout",
                },
                {
                  type: "image",
                  src: "/placeholder.svg?height=200&width=200",
                  alt: "Scrapbook view",
                },
              ]}
            />

            <NumberedSection
              index={2}
              title="AI Memory Companion"
              description="Not only will you be able to generate or adjust your calendar automatically using AI, Kleo learns your patterns, gently suggests lifestyle changes, and offers writing prompts to reflect and grow."
              media={[
                {
                  type: "image",
                  src: "/placeholder.svg?height=350&width=250",
                  alt: "AI companion",
                },
              ]}
            />

            <NumberedSection
              index={3}
              title="Private & Shareable Timelines"
              description="Export any day, week, or month as a shareable zine — for travel, journaling, portfolios, or just remembering."
              media={[
                {
                  type: "image",
                  src: "/placeholder.svg?height=250&width=400",
                  alt: "Shareable timeline",
                },
                {
                  type: "image",
                  src: "/placeholder.svg?height=200&width=200",
                  alt: "Export example",
                },
              ]}
            />
          </div>
        </div>
      </section>



      <Integrations />
      <CTA />
    </div>
  );
}
