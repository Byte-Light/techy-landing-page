'use client'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Stats({}: Props) {
    const wrapperStat = {
        hidden: { opacity: 0, translateX: -100 },
        visible: { opacity: 1, translateX: 0, transition: { staggerChildren: 0.15 } }
    }

    const listVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.455, 0.03, 0.515, 0.955] }
        }
    }

    const barWidth = [100, 63.76, 50.39, 45.33, 37.69];

    return (
        <div className="relative bg-zinc-900 py-16">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section */}
                <motion.div
                    className="lg:pr-12"
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                        The missing standard library for TypeScript
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400 max-w-lg">
                        TypeScript/JavaScript, the most popular programming language, is still missing a standard library. Effect is filling this gap by providing a solid foundation of data structures, utilities, and abstractions to make building applications easier.
                    </p>
                    <a
                        href="/"
                        className="mt-6 inline-flex items-center text-white text-lg hover:underline hover:text-zinc-300 transition"
                    >
                        <span>See 2022 State of JavaScript survey</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="h-4 ml-2 fill-current">
                            <path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path>
                        </svg>
                    </a>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    variants={wrapperStat}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl text-white font-semibold">Most Desired JS Features</h3>
                    <motion.ul className="space-y-4">
                        {[
                            "Standard Library",
                            "Immutable Data Structures",
                            "Observable",
                            "Pipe Operator",
                            "Pattern Matching",
                        ].map((feature, index) => (
                            <motion.li
                                key={index}
                                variants={listVariants}
                                className="relative group flex items-center justify-between bg-zinc-800 px-4 py-3 rounded-md hover:bg-zinc-700 transition"
                            >
                                <div className="absolute inset-0 h-full bg-zinc-700 rounded-md transition-all" style={{ width: `${barWidth[index]}%`, opacity: 0.85 }} />
                                <span className="relative text-white font-medium">{index + 2}. {feature}</span>
                                <a
                                    href="/docs"
                                    className="relative text-white text-sm flex items-center gap-1 font-medium group-hover:text-zinc-300 transition"
                                >
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3.5">
                                        <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path>
                                    </svg>
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-1 mt-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
    )
}

export default Stats
