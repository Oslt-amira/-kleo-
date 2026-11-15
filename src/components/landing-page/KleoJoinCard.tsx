"use client";

import Image from "next/image";

export default function KleoJoinCard() {
  return (
    <div className="relative min-h-[28rem] w-full max-w-sm max-lg:flex lg:h-[56vh] lg:min-h-0 lg:w-[50vh] lg:max-w-none overflow-hidden rounded-2xl border border-stone-600/80 bg-stone-900/50 shadow-xl">

      <div className="flex h-full flex-col justify-between p-4 max-lg:h-auto max-lg:min-w-0 max-lg:flex-1 max-lg:gap-8">
        <div>
          <div className="absolute left-1 top-1 mb-8 items-start">
            <Image
              src="/kleoLogo1.svg"
              alt="Kleo logo"
              width={55}
              height={55}
            />
          </div>

          <div className="relative px-2 pt-24 lg:top-24 lg:pt-0">
            <h1 className="font-serif text-2xl leading-tight text-stone-200">
              Thank you for joining
              <br />
              Kleo
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-3 px-4 text-right">
          <p className="font-serif text-lg leading-tight text-stone-200">
            Access is limited,
            <br />
            You've claimed your
            <br />
            spot
          </p>

          <p className="relative top-2 pb-4 text-sm leading-tight text-stone-400">
            We'll notify you when it's your time to step inside
            <br />
            Until then, consider this a whisper from the future
          </p>
        </div>
      </div>
    </div>
  );
}
