'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

const features = [
  { title: 'Zero operating emissions', image: '/img-hardware-1.jpg' },
  { title: 'Vertical take-off and landing', image: '/img-hardware-2.jpg' },
  { title: 'Fully electric, sustainable', image: '/img-hardware-3.jpg' },
  { title: 'Low Noise technology', image: '/img-hardware-4.jpg' },
  { title: 'Modular design, maximum versatility', image: '/img-hardware-5.jpg' },
]

export default function FeatureSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="relative w-full bg-gray-100 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-[#1a1a1a] leading-tight max-w-4xl">
            Building radically better <br /> ways of moving.
          </h2>
        </div>

        {/* Slider + Controls */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Button */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="btn-border-reveal w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600 flex items-center justify-center transition-all duration-300 hover:text-white"
          >
            <ChevronLeft />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider w-full max-w-[92%]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="keen-slider__slide rounded-3xl shadow-xl h-[34rem] relative overflow-hidden group transition-all duration-500"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90" />
                <div className="absolute bottom-6 left-6 z-10 transform group-hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-white text-2xl font-semibold drop-shadow">
                    {feature.title}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-1 bg-white mt-3 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="btn-border-reveal w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600 flex items-center justify-center transition-all duration-300 hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Button Hover Effect CSS */}
      <style jsx>{`
        .btn-border-reveal {
          background-color: transparent;
          position: relative;
          overflow: hidden;
        }
        .btn-border-reveal::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #000;
          transition: width 0.3s ease;
          z-index: -1;
        }
        .btn-border-reveal:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.section>
  )
}
