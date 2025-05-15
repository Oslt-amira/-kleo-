import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { Figtree } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import Loader from "@/components/landing-page/Loader";
import Noise from "@/components/landing-page/Noise";
import WaitlistComponent from "@/components/landing-page/Waitlist";

const figTree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kleo",
  icons: {
    icon: "/kleofavicon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${figTree.className} antialiased`}>
        <ClerkProvider dynamic>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loader />}>
              <div className="relative z-0 min-h-screen bg-stone-100 text-stone-950 dark:bg-stone-900 dark:text-stone-300">
                <Noise
                  patternSize={250}
                  patternScaleX={1}
                  patternScaleY={1}
                  patternRefreshInterval={2}
                  patternAlpha={20}
                />

                <div className="pointer-events-none absolute inset-0 z-[-2] bg-stone-200 opacity-50 [mask-image:radial-gradient(circle_at_center,transparent_50%,gray_100%)] dark:bg-stone-900" />
                {children}
              </div>
            </Suspense>

            {/* <WaitlistComponent /> */}
          </ThemeProvider>
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
