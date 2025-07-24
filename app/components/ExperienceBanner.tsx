'use client';

import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceBanner() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[750px] bg-[#333238] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 overflow-hidden"
    >
      {/* Left Text */}
      <motion.div
        className="w-full lg:w-4/5 text-white py-16 z-10 lg:pl-80 lg:pr-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }} // 👈 this makes it repeat every time
        style={{ y: textY }}
      >
        <h4 className="text-white-400 text-lg mb-4">
          Unlocking the future of transport
        </h4>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-KMRApparatBook"
          style={{
            fontWeight: 600,
            fontSize: '100px',
            lineHeight: '1.1',
            fontFamily: 'KMRApparatBook, sans-serif',
          }}
        >
          An all-electric <br /> air mobility.
        </h1>
      </motion.div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-visible flex items-center justify-end pointer-events-none">
        <motion.img
          src="/superwing_home_hero.jpg"
          alt="Aerpace Aircraft"
          className="h-auto w-auto max-w-[1400px] object-cover object-left translate-x-2/4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }} // 👈 allows animation on every re-entry
          style={{ y: imgY }}
        />
      </div>
    </section>
  );
}
