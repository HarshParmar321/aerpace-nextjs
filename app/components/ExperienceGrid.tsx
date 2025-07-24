import React from 'react';
import Link from 'next/link';

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-5">
      {/* First card: spans two columns on desktop */}
      <div className="md:col-span-2 bg-[#39383C] rounded-3xl flex flex-col md:flex-row items-center shadow-2xl min-h-[350px] md:min-h-[400px] p-10 mb-2">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center pr-0 md:pr-10">
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">{experiences[0].title}</h3>
          <p className="text-white text-xl md:text-2xl mb-8">{experiences[0].description}</p>
          {experiences[0].button && (
            <Link
              href={experiences[0].button.href}
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition w-max text-lg"
            >
              {experiences[0].button.text}
            </Link>
          )}
        </div>
        {/* Image */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <img
            src={experiences[0].image}
            alt="Experience"
            className="object-contain w-full h-56 md:h-80 rounded-2xl"
          />
        </div>
      </div>
      {/* Second row: two cards side by side, image as background, large and sharp */}
      {experiences.slice(1).map((exp) => (
        <div
          key={exp.title}
          className="relative rounded-3xl shadow-xl h-[22rem] md:h-[46rem] flex items-start justify-start overflow-hidden"
        >
          {/* Image as absolutely positioned, covers the card */}
          <img
            src={exp.image}
            alt={exp.title}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 p-8 flex flex-col justify-start items-start h-full w-full">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">{exp.title}</h3>
            <p className="text-white text-lg md:text-xl font-extrabold">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
