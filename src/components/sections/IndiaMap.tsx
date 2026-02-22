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

import mapData from "@/data/maps.json";

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

                <div className="relative w-full max-w-2xl mx-auto aspect-[500/550] mt-12 bg-[#050507]">
                    {/* Abstract Container Background */}
                    <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-[40px] glass-card overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>

                        {/* High Quality India SVG */}
                        <svg viewBox="0 0 500 550" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                            <motion.path
                                d={mapData.india.path}
                                fill="#0F0F12"
                                stroke="#D4AF37"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Highly Accurate Pins */}
                        {mapData.india.pins.map((city, i) => (
                            <motion.div
                                key={city.name}
                                className="absolute flex flex-col items-center group cursor-pointer z-10"
                                style={{ top: `${city.y}%`, left: `${city.x}%` }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + i * 0.1, type: "spring" }}
                            >
                                <div className="relative flex justify-center items-center">
                                    <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-primary/40 group-hover:bg-primary/60 transition-colors"></span>
                                    <div className="relative size-3.5 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,1)] border-[3px] border-[#0A0A0F] group-hover:scale-150 transition-transform duration-300"></div>
                                </div>
                                <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <span className="text-xs font-bold text-white whitespace-nowrap bg-[#12121A]/90 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20 shadow-xl">
                                        {city.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
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
