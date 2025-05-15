"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useSignUp } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import type { ClerkAPIError } from "@clerk/types";
import { useRouter } from "next/navigation";
import { handleUserCreation } from "../actions";

export default function SignUp() {
  const { signUp, setActive } = useSignUp();
  const [isCredentialsLoading, setIsCredentialsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  const router = useRouter();

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(undefined);
    setIsCredentialsLoading(true);
    try {
      const completeSignUp = await signUp?.create({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password: password,
      });

      // This is mainly for debugging while developing.
      if (completeSignUp?.status !== "complete") {
        return;
      }
      if (setActive) {
        await handleUserCreation(email, completeSignUp.createdUserId);
        await setActive({ session: completeSignUp.createdSessionId });
      }

      router.push("/home");
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        setErrors(err.errors);
      }
      setIsCredentialsLoading(false);
    }
  }

  function signUpWithGoogle() {
    setIsGoogleLoading(true);
    return signUp?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/signUp/sso-callback",
      redirectUrlComplete: "/home",
    });
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between py-8">
      <div className="h-8 w-8 rounded-xl bg-gray-200" />
      <div className="mx-auto w-full max-w-[16rem] px-4">
        <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
          <input
            type="firstName"
            placeholder="First name"
            aria-label="firstName input"
            name="firstName"
            required
            className="w-full rounded-lg bg-slate-100 px-3 py-1.5 text-sm outline-1 outline-slate-200 transition-all placeholder:text-slate-500 focus:outline-none"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="lastName"
            placeholder="Last name"
            aria-label="lastName input"
            name="lastName"
            required
            className="w-full rounded-lg bg-slate-100 px-3 py-1.5 text-sm outline-1 outline-slate-200 transition-all placeholder:text-slate-500 focus:outline-none"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Email input"
            name="email"
            required
            className="w-full rounded-lg bg-slate-100 px-3 py-1.5 text-sm outline-1 outline-slate-200 transition-all placeholder:text-slate-500 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              aria-label="Password input"
              className="w-full rounded-lg bg-slate-100 px-3 py-1.5 text-sm outline-1 outline-slate-200 transition-all placeholder:text-slate-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-1 top-0 flex items-center p-2 text-slate-400 outline-slate-300 transition-all hover:text-slate-600"
              onClick={(e) => {
                e.preventDefault();
                setIsPasswordVisible(!isPasswordVisible);
              }}
            >
              {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <Button
              size="sm"
              className="w-full rounded-lg py-1 text-sm font-medium"
              type="submit"
              disabled={isCredentialsLoading || isGoogleLoading}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  key={isCredentialsLoading ? "loading" : "login"}
                >
                  Create an account
                </motion.span>
              </AnimatePresence>
            </Button>
            <span className="w-full text-left text-xs text-slate-400 outline-slate-300">
              By joining you agree to the{" "}
              <Link
                href="#"
                className="underline transition-all hover:text-slate-600"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline transition-all hover:text-slate-600"
              >
                Privacy Policy
              </Link>
            </span>
          </div>
          <Separator className="mt-4" />
        </form>

        <div className="flex w-full flex-col items-center gap-3">
          <Button
            size="sm"
            className="mt-4 w-full rounded-lg bg-[#4285F4] py-1 text-sm font-medium text-white hover:bg-[#4285F4]/90"
            disabled={isCredentialsLoading || isGoogleLoading}
            onClick={signUpWithGoogle}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                key={isGoogleLoading ? "g-loading" : "g-login"}
              >
                Continue with Google
              </motion.span>
            </AnimatePresence>
          </Button>
          <span className="w-full text-center text-xs text-slate-400 outline-slate-300">
            Already have an account?{" "}
            <Link
              href="/"
              className="underline transition-all hover:text-slate-600"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
      {errors && (
        <ul>
          {errors.map((el, index) => (
            <li key={index}>{el.longMessage}</li>
          ))}
        </ul>
      )}
      <div className="flex w-full justify-center">
        <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] text-slate-400">
          Public Beta
        </span>
      </div>
    </div>
  );
}
