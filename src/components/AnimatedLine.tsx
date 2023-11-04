"use client";
import React from "react";
import { motion } from "framer";

const AnimatedLine = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 238 }}
      transition={{
        type: "spring",
        stiffness: 50,
        restDelta: 100,
        duration: 0.5,
      }}
      className=" h-[2px]  bg-dark-main-text "
    />
  );
};

export default AnimatedLine;
