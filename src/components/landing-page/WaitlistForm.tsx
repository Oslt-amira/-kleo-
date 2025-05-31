"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import UserAvatars from "./UserAvatars";
import Image from "next/image";

export default function WaitlistForm({
  email,
  setEmail,
  onSubmit,
  status,
}: {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  status: string;
}) {
  return (
    <div className="relative z-10 mx-auto flex cursor-none flex-col items-center space-y-4 rounded-xl border border-stone-600/40 bg-stone-200/50 px-8 py-10 text-center shadow-lg backdrop-blur-sm dark:bg-stone-800/10">
      <h1 className="font-serif text-3xl tracking-wide text-stone-600 dark:text-stone-300">
        Join the waitlist
      </h1>
      <p className="max-w-md text-lg font-light text-stone-800/60 dark:text-stone-400">
        Be the first to experience the future of creative calendars.
      </p>

      <form onSubmit={onSubmit} className="mt-6 w-full max-w-md">
        <div className="flex flex-row items-center justify-center gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 flex-grow cursor-none rounded-xl border-transparent border-b-stone-600/30 px-4 text-stone-800/60 shadow-none placeholder:text-stone-500/50 focus-visible:border-b-stone-600/80 dark:text-stone-300/60"
          />
          <motion.button
            whileHover={{ scale: 1.2, rotate: -80 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="flex h-12 cursor-none items-center justify-center rounded-lg py-2 text-lg text-stone-600/70 backdrop-blur"
          >
            <motion.div
              animate={
                status === "loading"
                  ? {
                      rotate: 360,
                    }
                  : { rotate: 0 }
              }
              transition={
                status === "loading"
                  ? {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 2,
                      ease: "linear",
                    }
                  : { duration: 0.3 }
              }
              className="flex items-start justify-center"
            >
              <Image
                src="/kleoLogo2.svg"
                alt="Main"
                width={60}
                height={60}
                className="opacity-75 filter dark:opacity-85 dark:invert"
                unoptimized
              />
            </motion.div>
          </motion.button>
        </div>
      </form>
      <UserAvatars />
    </div>
  );
}
