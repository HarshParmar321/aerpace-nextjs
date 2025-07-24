"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Afterslider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start({ opacity: 1, x: 0 });
      imageControls.start({ opacity: 1, x: 0 });
    } else {
      textControls.start({ opacity: 0, x: -60 });
      imageControls.start({ opacity: 0, x: 80 });
    }
  }, [isInView, textControls, imageControls]);

  return (
    <section
      ref={ref}
      className="relative bg-[#333239] h-[100vh] md:h-[120vh] flex items-center overflow-hidden"
    >
      {/* Text Animation */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={textControls}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center"
      >
        <h4 className="text-white text-base md:text-lg mb-2 font-light">
          Elevate every journey
        </h4>
        <h1
          className="font-semibold text-white"
          style={{
            fontSize: "100px",
            lineHeight: "95px",
            fontWeight: 600,
            color: "rgb(255, 255, 255)",
          }}
        >
          Give your cars
          <br />
          <span className="block">aerWing to fly.</span>
        </h1>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={imageControls}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute right-0 top-0 bottom-0 hidden md:block w-[90%] translate-x-[122px] h-[120vh]"
      >
        <Image
          src="/aerdock_home_hero.jpg"
          alt="Hero Vehicle"
          fill
          className="object-contain object-right"
          priority
        />
      </motion.div>
    </section>
  );
}
