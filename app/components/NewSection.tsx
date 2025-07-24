"use client";
import React from "react";

export default function NewSection() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Feature 1 */}
      <div data-aos="fade-up" className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Future ready solutions</h3>
        <p className="text-sm text-gray-600">
          Fully designed and crafted for an unparalleled travel experience...
        </p>
      </div>

      {/* Feature 2 */}
      <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Faster, Easier, Better</h3>
        <p className="text-sm text-gray-600">
          Designed for a better environment, superior travel time management...
        </p>
        <button className="mt-4 inline-block px-6 py-2 border-2 border-black text-black text-sm font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Learn more
        </button>
      </div>

      {/* Feature 3 */}
      <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Tomorrow’s energy today</h3>
        <p className="text-sm text-gray-600">
          Hydrogen energy distribution is at the core of our ecosystem...
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
