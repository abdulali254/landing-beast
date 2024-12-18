"use client";

import React from "react";
import { cn } from "@/lib/utils";
import WordRotate from "../ui/word-rotate";
import AnimatedText from "../magicui/animated-text";
import { Button } from "../ui/button";
import HeroImage from "../hero-image";
import { Spotlight } from "../ui/spotlight";

const socialPlatforms = [
  {
    text: "YouTube",
    className: "text-[#FF0000] transition-colors duration-200",
  },
  {
    text: "TikTok",
    className: cn(
      "bg-gradient-to-r from-[#00f2ea] via-[#ff0050] to-[#00f2ea]",
      "text-transparent bg-clip-text animate-gradient"
    ),
  },
  {
    text: "Instagram",
    className: cn(
      "bg-gradient-to-r from-[#fd5949] via-[#d6249f] to-[#285AEB]",
      "text-transparent bg-clip-text animate-gradient"
    ),
  },
  {
    text: "Twitter(X)",
    className: cn("text-[#1DA1F2] transition-colors duration-200"),
  },
];

export function Hero() {
  return (
    <section className="relative flex h-[40rem] md:h-[58rem] h-screen w-full items-start md:items-center justify-center pt-20 md:pt-0 bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2] overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-10 bg-white dark:bg-black pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 80%)",
        }}
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Main content with higher z-index */}
      <div className="relative flex flex-col items-center z-20 pt-[10rem] md:pt-[30rem] gap-4">
        <div className="mb-4">
          <AnimatedText />
        </div>
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-4 pb-8 text-4xl font-bold text-transparent sm:py-8 sm:text-7xl flex items-center gap-2">
          Content for
          <span className="text-blue-500 inline-flex">
            <WordRotate
              className="text-4xl md:text-7xl font-bold"
              words={socialPlatforms}
            />
          </span>
        </h1>
        <p className="max-w-2xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-lg font-medium text-transparent sm:text-xl">
          Create engaging social media content with our modern UI components.
          Perfect for building your brand presence across all platforms.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
