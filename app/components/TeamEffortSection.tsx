'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TeamEffortSection() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#1c1c1e] text-white px-6 py-24 md:px-20"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Revolution.<br />It’s a team effort.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="text-gray-300 text-lg"
        >
          We know we can’t do this alone. It takes collaboration and commitment to realize an idea this bold. Join us. Let’s build a new era of flight.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submit here
          }}
        >
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
        </motion.form>
      </div>
    </motion.section>
  );
}
