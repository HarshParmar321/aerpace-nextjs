'use client';

import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TeamEffortSection() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  return (
    <section className="bg-[#1c1c1e] text-white px-6 py-24 md:px-20" data-aos="fade-up">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Revolution.<br />It’s a team effort.
        </h2>
        <p className="text-gray-300 text-lg">
          We know we can’t do this alone. It takes collaboration and commitment to realize an idea this bold. Join us. Let’s build a new era of flight.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent border-b border-gray-600 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="accent-white w-5 h-5"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-400">
              I hereby consent to processing of my personal data in accordance with the data protection declaration of consent.
            </label>
          </div>

          <button
            type="submit"
            className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
