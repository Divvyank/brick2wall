"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CITIES = [
    { name: "Delhi", top: "25%", left: "45%" },
    { name: "Mumbai", top: "60%", left: "30%" },
    { name: "Bangalore", top: "80%", left: "40%" },
    { name: "Kolkata", top: "50%", left: "70%" },
    { name: "Chennai", top: "85%", left: "48%" },
    { name: "Ahmedabad", top: "45%", left: "25%" },
    { name: "Hyderabad", top: "65%", left: "45%" },
    { name: "Pune", top: "62%", left: "32%" },
    { name: "Lucknow", top: "35%", left: "55%" },
    { name: "Jaipur", top: "35%", left: "35%" },
];

export function IndiaMap() {
    return (
        <section className="py-24 md:py-32 relative bg-[#050507] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <MapPin className="size-4 text-primary" />
                        <span className="text-sm font-medium text-white/80">Pan-India Network</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white tracking-[-0.04em] mb-6"
                    >
                        Delivering to <span className="text-primary italic">26 States</span> & <br className="hidden md:block" /> 7 Union Territories.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 font-sans max-w-2xl mx-auto"
                    >
                        A formidable logistics engine moving thousands of tonnes daily. Integrated tracing, direct mill lifting, and hyper-local fulfillment.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video mt-12">
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl glass-card overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

                        {/* Simulated Nodes / Map Points */}
                        {CITIES.map((city, i) => (
                            <motion.div
                                key={city.name}
                                className="absolute flex flex-col items-center"
                                style={{ top: city.top, left: city.left }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                            >
                                <div className="relative flex justify-center items-center">
                                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary opacity-30"></span>
                                    <div className="relative size-3 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,1)] border-2 border-[#050507]"></div>
                                </div>
                                <span className="absolute top-4 text-[10px] sm:text-xs font-bold text-white/70 whitespace-nowrap bg-[#0A0A0F]/80 px-2 py-0.5 rounded backdrop-blur border border-white/10 mt-1">
                                    {city.name}
                                </span>
                            </motion.div>
                        ))}

                        {/* Connections (Abstract SVG lines) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))' }}>
                            <motion.path
                                d="M 45% 25% Q 35% 42% 30% 60% T 40% 80%"
                                fill="none"
                                stroke="url(#grad1)"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            />
                            <motion.path
                                d="M 45% 25% Q 55% 37% 70% 50% T 48% 85%"
                                fill="none"
                                stroke="url(#grad1)"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
                            />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    {/* Floating Data Card */}
                    <motion.div
                        className="absolute -bottom-6 -right-2 md:bottom-10 md:-right-10 bg-[#12121A] border border-white/10 p-6 rounded-2xl shadow-2xl glass-card max-w-[250px]"
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 1.2 }}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 text-xs uppercase font-medium tracking-wider">Active Logistics</span>
                            <span className="text-3xl font-serif text-white">4,200+</span>
                            <span className="text-sm text-primary font-medium mt-1">Trucks In-Transit</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
