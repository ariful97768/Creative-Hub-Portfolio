"use client";
import { motion, Variants } from "framer-motion";

export default function WaveText({ text }: { text: string }) {
  const words = text.split(" ");

  // 1. Explicitly type the Container Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04 * i,
      },
    }),
  };

  // 2. Explicitly type the Child Variants
  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        overflow: "hidden",
        flexWrap: "wrap",
        gap: "0 0.3em",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="pt-1.5 pb-2.5 sm:pt-4 sm:pb-3 flex md:block items-center justify-center sm:justify-start text-2xl md:text-4xl lg:text-5xl leading-8 sm:leading-10 md:leading-13 lg:leading-16 font-bold text-dark"
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span variants={childVariants} key={letterIndex}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
