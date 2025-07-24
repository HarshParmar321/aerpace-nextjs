"use client";
import React from "react";
import Image from "next/image";


export default function Afterslider() {
    return (
        <section className="relative bg-[#2c2c31] h-[80vh] flex items-center overflow-hidden">
          {/* Text */}
          <div className="z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center">
            <h4 className="text-white text-base md:text-lg mb-2 font-light">
              Elevate every journey
            </h4>
            <h1 className="text-white text-[2.5rem] md:text-[4rem] font-extrabold leading-tight tracking-tight">
              Give your cars<br />
              <span className="block">aerWing to fly.</span>
            </h1>
          </div>
    
          {/* Right-side image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <Image
              src="/aerdock_home_hero.jpg" // ensure this is in /public
              alt="Hero Vehicle"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </section>
      );
    }
