"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

const TIDE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    restDelta: 0.001,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-sun-500"
    />
  );
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 28, className = "" }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay, ease: TIDE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroMount({
  children,
  delay = 0,
  y = 24,
  className = "",
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease: TIDE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-linked vertical parallax & subtle scale glide for feature photos.
 */
export function ParallaxFrame({
  children,
  offset = 26,
  className = "",
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.02, 0.99]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, scale }}>{children}</motion.div>
    </div>
  );
}
