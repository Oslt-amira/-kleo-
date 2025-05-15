"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import type { ClerkAPIError } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

export default function Login() {
  const [isCredentialsLoading, setIsCredentialsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  const { signIn, setActive } = useSignIn();
  const { signUp } = useSignUp();
  const router = useRouter();

  function signInWithGoogle() {
    return signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/signUp/sso-callback",
      redirectUrlComplete: "/home",
    });
  }

  async function handleSignInWithsGoogle() {
    if (!signIn || !signUp) return null;
    setIsGoogleLoading(true);

    // If the user has an account in your application, but does not yet
    // have an OAuth account connected to it, you can transfer the OAuth
    // account to the existing user account.
    const userExistsButNeedsToSignIn =
      signUp.verifications.externalAccount.status === "transferable" &&
      signUp.verifications.externalAccount.error?.code ===
        "external_account_exists";

    if (userExistsButNeedsToSignIn) {
      const res = await signIn.create({ transfer: true });

      if (res.status === "complete") {
        setActive({
          session: res.createdSessionId,
        });
      }
    }

    // If the user has an OAuth account but does not yet
    // have an account in your app, you can create an account
    // for them using the OAuth information.
    const userNeedsToBeCreated =
      signIn.firstFactorVerification.status === "transferable";

    if (userNeedsToBeCreated) {
      const res = await signUp.create({
        transfer: true,
      });

      if (res.status === "complete") {
        setActive({
          session: res.createdSessionId,
        });
      }
    } else {
      // If the user has an account in your application
      // and has an OAuth account connected to it, you can sign them in.
      signInWithGoogle();
    }
  }

  async function handleSignInWithCredentials() {
    if (!signIn || !signUp) {
      return null;
    }
    setIsCredentialsLoading(true);
    setErrors(undefined);
    try {
      const res = await signIn.create({
        identifier: email,
        password,
      });
      if (res.status === "complete") {
        setActive({
          session: res.createdSessionId,
        });
        router.push("/home");
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        setErrors(err.errors);
      }
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between py-8">
      <div className="h-8 w-8 rounded-xl bg-gray-200" />
      <div className="mx-auto w-full max-w-[16rem] px-4">
        <form className="flex flex-col gap-3">
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
              className="absolute right-1 top-0 flex items-center p-2 text-slate-400 outline-slate-300 transition-all"
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
              size={"sm"}
              className="w-full rounded-lg py-1 text-sm font-medium"
              type="submit"
              onClick={handleSignInWithCredentials}
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
                  Log in
                </motion.span>
              </AnimatePresence>
            </Button>
          </div>
        </form>

        <Separator className="mt-4" />
        <div className="flex w-full flex-col items-center gap-3">
          <Button
            size={"sm"}
            className="mt-4 w-full rounded-lg bg-[#4285F4] py-1 text-sm font-medium text-white hover:bg-[#4285F4]/90"
            onClick={handleSignInWithsGoogle}
            disabled={isCredentialsLoading || isGoogleLoading}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                key={isGoogleLoading ? "g-loading" : "g-login"}
              >
                Log in with Google
              </motion.span>
            </AnimatePresence>
          </Button>
          <span className="w-full text-center text-xs text-slate-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/signUp"
              className="underline transition-all hover:text-slate-600"
            >
              Sign up
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
