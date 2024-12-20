'use client';
import Image from 'next/image';
import React from 'react';
import HeroAnimation from './HeroAnimation';
import { motion } from 'framer-motion';

type Props = {};

function Hero({}: Props) {
  const listAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <div className="w-full px-6 sm:px-12 lg:px-24 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <HeroAnimation
              text="Transform your workflow"
              className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600"
            />
            <HeroAnimation
              text="with cutting-edge solutions"
              className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300"
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg mb-6"
          >
            Experience unparalleled performance and efficiency in your development process
            with our state-of-the-art tools and resources.
          </motion.p>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="space-y-4"
          >
            {[
              'Maximum Type-safety with error handling',
              'Composability and reusability of code',
              'Rich ecosystem of packages',
              'Innovative clustering workflows',
            ].map((item, index) => (
              <motion.li key={index} variants={listAnimation} className="flex gap-3 items-center">
                <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 text-white"
                  >
                    <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
                  </svg>
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="/"
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg shadow-lg"
            >
              Get Started
            </a>
            <a
              href="/"
              className="inline-block px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-medium rounded-lg shadow-lg"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <Image
              src="/image1.webp"
              alt="Hero Image"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-700 text-white font-medium rounded-lg shadow-md hover:from-violet-600 hover:to-violet-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="h-5 mr-2"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                </svg>
                Watch Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
