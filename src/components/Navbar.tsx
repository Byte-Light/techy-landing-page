'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Navbar({ }: Props) {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between font-light text-zinc-300 sticky top-0 backdrop-blur-md z-20 border-b border-zinc-800">
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center space-x-2">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 text-white"
            >
              {/* SVG paths */}
            </svg>
            <span className="font-semibold text-xl text-white tracking-wide">
              Techy
            </span>
          </a>
        </motion.div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-6"
        >
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Docs
          </a>
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Blog
          </a>
          <div className="relative group">
            <input
              type="text"
              placeholder="Search Docs..."
              className="w-60 h-10 pl-4 pr-10 bg-zinc-800 text-sm text-white placeholder-zinc-400 rounded-lg focus:outline-none shadow-md focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
              ⌘K
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              {/* GitHub Icon */}
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">Discord</span>
              {/* Discord Icon */}
            </a>
          </div>
        </motion.div>
      </div>
      <button className="md:hidden bg-zinc-800 text-white p-2 rounded-lg focus:outline-none">
        <span className="sr-only">Open Menu</span>
        {/* Menu Icon */}
      </button>
    </div>
  )
}

export default Navbar
