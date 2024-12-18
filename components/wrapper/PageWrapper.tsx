"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { MobileNavbar } from "../MobileNavbar";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-x-0 top-0 z-50 h-24 flex items-center justify-center">
        {isMobile ? <MobileNavbar /> : <Navbar />}
      </div>
      <main className="flex min-h-screen flex-col">{children}</main>
    </div>
  );
}
