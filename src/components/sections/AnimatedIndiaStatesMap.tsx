"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import statesData from "@/data/india-states.json";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.3
        }
    }
};

const stateVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" }
    }
};

const pulseVariants: any = {
    hidden: { opacity: 0.1 },
    visible: {
        opacity: [0.1, 0.8, 0.1],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export function AnimatedIndiaStatesMap() {
    return (
        <div className="relative w-full max-w-xl xl:max-w-2xl mx-auto aspect-[500/550] bg-[#050507]">
            {/* Deep Dark Background Matching Site */}
            <div className="absolute inset-0 bg-[#0F0F12] border border-white/5 rounded-[40px] glass-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>

                <svg viewBox="0 0 500 550" preserveAspectRatio="none" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <defs>
                        <linearGradient id="goldAmberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#F97316" stopOpacity="0.85" />
                        </linearGradient>
                        <filter id="softGlow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Map States Container */}
                    <motion.g
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {statesData.states.map((state) => (
                            <g key={state.id} style={{ transformOrigin: "center" }}>
                                {/* Base Dark Path */}
                                <path
                                    d={state.path}
                                    fill="#0F0F12"
                                    stroke="rgba(212, 175, 55, 0.2)"
                                    strokeWidth="0.6"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                                {/* Staggered Golden Glowing Path Overlay */}
                                <motion.path
                                    d={state.path}
                                    fill="url(#goldAmberGradient)"
                                    stroke="rgba(212, 175, 55, 0.8)"
                                    strokeWidth="0.6"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    variants={stateVariants}
                                />
                            </g>
                        ))}
                    </motion.g>

                    {/* Gentle Pulse Animaion overlay layer to make it feel alive */}
                    <motion.g
                        variants={pulseVariants}
                        initial="hidden"
                        animate="visible"
                        className="pointer-events-none"
                    >
                        {statesData.states.map((state) => (
                            <path
                                key={`glow-${state.id}`}
                                d={state.path}
                                fill="url(#goldAmberGradient)"
                                opacity="0.1"
                                filter="url(#softGlow)"
                            />
                        ))}
                    </motion.g>
                </svg>

                {/* Cities Pins */}
                {statesData.pins.map((city, i) => (
                    <motion.div
                        key={city.name}
                        className="absolute flex flex-col items-center group cursor-pointer z-10"
                        style={{ top: `${city.y}%`, left: `${city.x}%` }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
                    >
                        <div className="relative flex justify-center items-center">
                            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary/40 group-hover:bg-primary/60 transition-colors"></span>
                            <div className="relative size-2.5 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,1)] border-[2px] border-[#0A0A0F] group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                        <div className="absolute top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-[10px] font-bold text-white whitespace-nowrap bg-[#12121A]/90 px-2 py-1 rounded backdrop-blur-md border border-white/20 shadow-xl">
                                {city.name}
                            </span>
                        </div>
                    </motion.div>
                ))}

                {/* Elegant Legend */}
                <motion.div
                    className="absolute bottom-6 right-6 flex items-center gap-3 bg-[#12121A]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, ease: "easeOut" }}
                >
                    <div className="relative size-3.5 rounded-sm bg-gradient-to-br from-[#D4AF37] to-[#F97316] shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
                    <span className="text-xs font-serif text-white tracking-wide">Order Fulfilled States</span>
                </motion.div>
            </div>
        </div>
    );
}
