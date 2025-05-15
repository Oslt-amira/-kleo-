"use client";

import type React from "react";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Noise from "./Noise";

export default function WaitlistComponent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 20,
    minutes: 36,
    seconds: 43,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Error");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="h-screen items-center justify-center px-20 py-20">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={20}
      />
      <div className="pointer-events-none absolute inset-0 z-[-2] bg-stone-200 opacity-50 [mask-image:radial-gradient(circle_at_center,transparent_50%,gray_100%)] dark:bg-stone-900" />

      <div className="relative z-10 mx-auto flex flex-col items-center space-y-6 rounded-xl border border-stone-600/60 bg-stone-800/10 px-8 py-10 text-center shadow-lg backdrop-blur-lg">
        <h1 className="font-serif text-3xl tracking-wide text-stone-800 dark:text-stone-200">
          Join the waitlist
        </h1>
        <p className="max-w-md text-lg font-light text-stone-800/80 dark:text-stone-300">
          Be the first to experience the future of creative calendars.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-grow rounded-md border-stone-600/30 px-4 text-stone-800/60 placeholder:text-stone-500/50 dark:text-stone-300/60"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              type="submit"
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileTap={{ scale: 0.9 }}
              className="my-4 flex items-center justify-center rounded-lg border border-stone-600 px-8 py-1 text-center text-lg text-stone-600"
            >
              {status === "submitting" ? "Joining..." : "Join "}
            </motion.button>
          </div>
          {status === "success" && (
            <p className="text-green-600">You’re on the list 🎉</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Something went wrong. Try again.</p>
          )}
        </form>

        <div className="mt-8 flex items-center">
          <div className="mr-3 flex -space-x-2">
            <Avatar className="h-8 w-8 border-2 border-stone-800">
              <AvatarImage
                src="/users/user1.jpg?height=32&width=32"
                className="brightness-80 bg-cover object-cover blur-[1px] filter"
              />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>

            <Avatar className="h-8 w-8 border-2 border-stone-800 opacity-80 brightness-75">
              <AvatarImage
                src="/users/user2.jpg?height=32&width=32"
                className="brightness-80 bg-cover object-cover blur-[1px] filter"
              />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-stone-800">
              <AvatarImage
                src="/users/user3.jpg?height=32&width=32"
                className="bg-cover object-cover blur-[2px] brightness-75 filter"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-sm text-blue-100/80">
            ~ 20+ People already joined
          </span>
        </div>

        <div className="mt-8 flex flex-row justify-center gap-4 text-center">
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl">
              {timeLeft.days}
            </span>
            <span className="text-sm text-stone-200/70">days</span>
          </div>

          <div className="sm:text-3xlfont-thin mt-2 self-start text-xl text-stone-300/50">
            |
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-stone-200/70">hours</span>
          </div>

          <div className="mt-2 self-start text-xl font-thin text-stone-300/50 sm:text-3xl">
            |
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl">
              {timeLeft.minutes}
            </span>
            <span className="text-sm text-stone-200/70">minutes</span>
          </div>

          <div className="mt-2 self-start text-xl font-thin text-stone-300/50 sm:text-3xl">
            |
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl">
              {timeLeft.seconds}
            </span>
            <span className="text-sm text-stone-200/70">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
