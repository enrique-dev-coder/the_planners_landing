"use client";
import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const Counter = ({ number, title }: { number: number; title: string }) => {
  // type the use ref
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  // animate just once per view
  const isElementInView = useInView(ref);

  useEffect(() => {
    if (isElementInView) {
      motionValue.set(number);
    }
  }, [isElementInView, number, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= number) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, number]);

  return (
    <div className="flex flex-col  justify-center">
      <div>
        <span
          className="inline-block  text-5xl font-bold text-bright-yellow "
          ref={ref}
        >
          {number}
        </span>
        <span className="text-5xl font-bold text-bright-yellow">+</span>
      </div>
      <h2 className=" text-2xl capitalize mt-2 text-dark-main-text">{title}</h2>
    </div>
  );
};

export default Counter;
