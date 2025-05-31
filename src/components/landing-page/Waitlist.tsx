"use client";

import type React from "react";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Noise from "./Noise";
import WaitlistForm from "./WaitlistForm";
import WaitlistModal from "./WaitlistModal";

export default function WaitlistComponent() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setShowModal(true);
    }
  }, [status]);
  const closeModal = () => {
    setShowModal(false);
    setStatus("idle");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-20 py-20">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={20}
      />
      <div className="pointer-events-none absolute inset-0 z-[-2] bg-stone-200 opacity-50 [mask-image:radial-gradient(circle_at_center,transparent_50%,gray_100%)] dark:bg-stone-900" />
      {showModal ? (
        <WaitlistModal onClose={closeModal} />
      ) : (
        <WaitlistForm
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          status={status}
        />
      )}
    </div>
  );
}
