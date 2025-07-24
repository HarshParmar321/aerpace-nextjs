"use client";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { easeOut } from "framer-motion";

export default function ExperienceBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const controls = useAnimation();

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Text moves up slightly on scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  // Image moves down slightly on scroll
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[750px] bg-[#333238] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 overflow-hidden"
    >
      {/* Left Content with parallax */}
      <motion.div
        className="w-full lg:w-4/5 text-white py-16 z-10 lg:pl-80
         lg:pr-12"
        initial="hidden"
        animate={controls}
        variants={fadeLeft}
        style={{ y: textY }}
      >
       <h4 className="text-white-400 text-lg mb-4">

          Unlocking the future of transport
        </h4>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-KMRApparatBook"
            style={{
            fontWeight: 600,
            fontSize: "100px",
            lineHeight: "1.1",
            fontFamily: "KMRApparatBook, sans-serif",
          }}>
          An all-electric <br /> air mobility.
        </h1>
      </motion.div>

      {/* Right Image with parallax */}
            <div className="absolute right-0 top-0 h-full w-1/2 overflow-visible flex items-center justify-end pointer-events-none">
        <motion.img
          src="/superwing_home_hero.jpg"
          alt="Aerpace Aircraft"
          className="h-[] w-auto max-w-[1400px] object-cover object-left translate-x-2/4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            },
          }}
          style={{ y: imgY }}
        />
      </div>
    </section>
  );
}
