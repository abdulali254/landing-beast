"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
// import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNavbar() {
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerClasses = cn(
    "w-[95%]",
    scrolled && "w-[90%] transition-all duration-300",
    "rounded-lg border border-border/40",
    "bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60",
    "pointer-events-auto"
  );

  if (!mounted) {
    return null;
  }

  return (
    <header className={containerClasses}>
      <div className="flex h-14 justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">Brand</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">Getting Started</h2>
                  <Link
                    href="/docs"
                    className="text-sm text-muted-foreground hover:text-primary">
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className="text-sm text-muted-foreground hover:text-primary">
                    Installation
                  </Link>
                  <Link
                    href="/docs/primitives/typography"
                    className="text-sm text-muted-foreground hover:text-primary">
                    Typography
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">Components</h2>
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="text-sm text-muted-foreground hover:text-primary">
                      {component.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild className="w-full">
                    <Link href="/">Sign In</Link>
                  </Button>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
  },
];
