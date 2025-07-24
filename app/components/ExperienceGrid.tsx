'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Convenient',
    description: 'Take your car with you, whether you are flying alone or with company.',
    button: { text: 'Discover more', href: '/aerwing.html' },
    image: '/superwing_home_block_1.jpg',
  },
  {
    title: 'Economical',
    description: 'Designed for everyday interstate & intercity travel, for everyone.',
    image: '/superwing_home_block_2.jpg',
  },
  {
    title: 'Faster',
    description: 'Cruise speeds of 200 km/h will reduce travel-times to minutes.',
    image: '/superwing_home_block_3.jpg',
  },
];

export default function ExperienceGrid() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, amount: 0.2 });

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      {/* Heading */}
      <div className="mb-16 px-4 text-center">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mx-auto font-semibold text-[#323237] text-[50px] leading-[50px] max-w-[720px]"
        >
          Meet aerWing. An unmanned, <br /> eVTOL transportation fleet.
        </motion.h2>
      </div>

      {/* Hero Section (with animation) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:col-span-2 bg-[#333239] rounded-[40px] px-10 py-8 md:py-16 md:px-20 text-white shadow-lg flex flex-col md:flex-row items-center overflow-hidden relative mb-8"
      >
        {/* Left Side: Text */}
        <div className="flex flex-col justify-between w-full md:w-1/2 h-[300px] md:h-[550px] relative z-10">
          <div>
            <p className="text-sm mb-4 text-gray-300">{experiences[0].title}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {experiences[0].description}
            </h2>
          </div>
          <div>
            {experiences[0].button && (
              <Link
                href={experiences[0].button.href}
                className="mt-6 md:mt-0 px-6 py-3 bg-white text-black rounded-full text-base font-medium w-fit inline-block"
              >
                {experiences[0].button.text}
              </Link>
            )}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[550px] flex items-center justify-end relative overflow-visible">
          <img
            src={experiences[0].image}
            alt="Experience"
            className="w-[200%] max-w-none h-auto object-contain translate-x-34 md:translate-x-22"
          />
        </div>
      </motion.div>

      {/* Other Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.slice(1).map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-3xl shadow-xl h-[22rem] md:h-[46rem] flex items-start justify-start overflow-hidden"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="relative z-10 p-8 flex flex-col justify-start items-start h-full w-full">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">{exp.title}</h3>
              <p className="text-white text-lg md:text-xl font-extrabold">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
