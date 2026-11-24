"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CoverSlide {
  src: string;
  alt: string;
}

export function ProjectCoverSlideshow({
  slides,
  title,
  href,
  className,
}: {
  slides: readonly CoverSlide[];
  title: string;
  href: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [allowMotion, setAllowMotion] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!allowMotion || hovered || focused || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [allowMotion, hovered, focused, slides.length]);

  return (
    <Link
      href={href}
      aria-label={`${title} project`}
      className={cn("relative block h-40 overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={500}
          height={300}
          loading="eager"
          aria-hidden={index !== current}
          className={cn(
            "absolute inset-0 h-40 w-full object-cover object-top",
            index === current ? "visible" : "invisible"
          )}
        />
      ))}
    </Link>
  );
}
