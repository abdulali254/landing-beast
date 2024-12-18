"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: Array<{ text: string; className?: string }>;
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden inline-flex">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index].text}
          className={cn("inline-block", className, words[index].className)}
          {...framerProps}>
          {words[index].text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
