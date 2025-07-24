'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'; // Optional for animations


const features = [
  {
    title: 'Zero operating emissions',
    image: '/img-hardware-1.jpg',
  },
  {
    title: 'Vertical take-off and landing',
    image: '/img-hardware-2.jpg',
  },
  {
    title: 'Fully electric, sustainable',
    image: '/img-hardware-3.jpg',
  },
  {
    title: 'Low Noise technology',
    image: '/img-hardware-4.jpg',
  },
  {
    title: 'Modular design, maximum versatility',
    image: '/img-hardware-5.jpg',
  },
]

export default function FeatureSlider() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none px-2">
          <button
            className="prev-button pointer-events-auto swiper-button-prev flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg group border border-white/20 hover:border-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            className="next-button pointer-events-auto swiper-button-next flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg group border border-white/20 hover:border-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="!overflow-visible"
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <div
                className="rounded-3xl shadow-2xl h-[28rem] flex items-end p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ease-out"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold font-sans drop-shadow-md">
                    {feature.title}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-1 bg-white mt-3 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}