"use client";

import { motion } from "framer-motion";
import { Recycle, Globe, Server, Link as LinkIcon, MapPin } from "lucide-react";
import mapData from "@/data/maps.json";

const FERROUS = [
    "Melting scrap", "Heavy Melting scrap", "Shredded scrap", "Sheared scrap",
    "Cast Iron Borings", "Turning", "Plates & Structures", "Blue steel",
    "Tin Plate Sheet Loose", "Used Can Bales", "Light Melting scrap",
    "Special Melting scrap", "Bushelling Bundles", "Bush loose"
];

const NON_FERROUS = [
    "Melting scrap", "Mixed Motors", "Aluminum Cast", "Aluminum TT",
    "Full Compressor", "Stainless Steel"
];

const OFFICES = [
    { name: "Singapore HQ", top: "54%", left: "78%", hq: true },
    { name: "Australia", top: "75%", left: "85%" },
    { name: "Vietnam", top: "50%", left: "75%" },
    { name: "Taiwan", top: "45%", left: "80%" },
    { name: "UK", top: "30%", left: "48%" },
    { name: "Dominican Republic", top: "45%", left: "28%" },
    { name: "Chile", top: "70%", left: "30%" }
];

export function International() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section id="international" className="pt-32 pb-24 bg-[#020202] relative overflow-hidden border-t border-white/10">
            {/* Background Metallic Texture Simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1a24_0%,#020202_70%)] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 backdrop-blur-md"
                    >
                        <Globe className="size-4 text-primary" />
                        <span className="text-sm md:text-base font-medium tracking-widest text-white/90 uppercase">Singapore-Based Global Subsidiary</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white tracking-[-0.04em] mb-8 leading-none"
                    >
                        Brick2Wall <br className="md:hidden" />
                        <span className="text-primary italic drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">International</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/70 font-sans leading-relaxed"
                    >
                        Building sustainable trade partnerships in the global commodity industry. Focusing unequivocally on the <span className="text-white font-medium">&ldquo;Commodities of the Future&rdquo;</span>—Recycled Steel and Non-Ferrous Waste.
                    </motion.p>
                </div>

                {/* Circular Economy Animation */}
                <div className="mb-32 relative">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-serif text-white mb-4">The Circular Economy Model</h3>
                        <p className="text-white/50 max-w-2xl mx-auto">An integrated value chain providing customized solutions for Scrapyard Owners and Steel Manufacturers globally.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto relative">
                        {/* Animated dashed line connecting them */}
                        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-px border-t-2 border-dashed border-white/20 -z-10 -translate-y-1/2">
                            <div className="h-full bg-primary/50 w-full origin-left animate-pulse"></div>
                        </div>

                        {[
                            { icon: Recycle, label: "Scrapyard" },
                            { icon: Server, label: "Processors" },
                            { icon: Globe, label: "Steel Mills" },
                            { icon: LinkIcon, label: "Infrastructure" }
                        ].map((node, i) => (
                            <motion.div
                                key={node.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="flex flex-col items-center gap-4 relative"
                            >
                                <div className="size-24 md:size-32 rounded-full border border-primary/30 bg-[#0A0A0F]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)] group hover:border-primary transition-colors hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                                    <node.icon className="size-8 md:size-10 text-primary group-hover:scale-110 transition-transform" />

                                    {/* Orbiting element */}
                                    <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_10s_linear_infinite]"></div>
                                </div>
                                <span className="text-white/80 font-medium tracking-wide">{node.label}</span>
                                {i < 3 && <div className="h-8 w-px bg-white/20 md:hidden block"></div>}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scrap Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32">
                    {/* Ferrous */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                            <h3 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Ferrous Scrap</h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {FERROUS.map((item) => (
                                    <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Non-Ferrous */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 h-full relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                            <h3 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Non-Ferrous Scrap</h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {NON_FERROUS.map((item) => (
                                    <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-secondary/20 hover:text-white hover:border-secondary/50 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Global Map */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-white mb-4">Trusted Partnerships & Global Presence</h3>
                        <p className="text-white/50">Bridging the gap between secondary mills and global scrapyards.</p>
                    </div>

                    <div className="relative aspect-[2/1] w-full max-w-6xl mx-auto bg-[#0A0A0F]/20 rounded-3xl border border-white/5 overflow-hidden glass-card">
                        {/* Background subtle grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px]"></div>

                        {/* Real World SVG */}
                        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                            <motion.path
                                d={mapData.world.path}
                                fill="#0F0F12"
                                stroke="#D4AF37"
                                strokeWidth="0.5"
                                strokeOpacity="0.3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                            />

                            {/* Animated Connection Lines from Singapore HQ (Left: 78.8%, Top: 50.8% approx based on our D3 mapping) */}
                            {mapData.world.pins.filter(p => !p.hq).map((city, i) => {
                                const hq = mapData.world.pins.find(p => p.hq);
                                if (!hq) return null;

                                // Coordinates mapping to viewBox [1000, 500]
                                const startX = (hq.x * 1000) / 100;
                                const startY = (hq.y * 500) / 100;
                                const endX = (city.x * 1000) / 100;
                                const endY = (city.y * 500) / 100;

                                // Draw a curved path
                                const controlPointY = Math.min(startY, endY) - 50;

                                return (
                                    <motion.path
                                        key={`line-${city.name}`}
                                        d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${controlPointY} ${endX} ${endY}`}
                                        fill="none"
                                        stroke="url(#lineGrad)"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.6 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                                    />
                                );
                            })}

                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Interactive Pins */}
                        {mapData.world.pins.map((office, i) => (
                            <motion.div
                                key={office.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                                className={`absolute rounded-full z-20 group cursor-pointer flex justify-center items-center`}
                                style={{
                                    top: `${office.y}%`,
                                    left: `${office.x}%`,
                                    width: office.hq ? '24px' : '12px',
                                    height: office.hq ? '24px' : '12px',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {/* Ripple Background */}
                                <div className={`absolute inset-0 rounded-full animate-ping opacity-50 ${office.hq ? 'bg-primary' : 'bg-white'}`}></div>

                                {/* Core Dot */}
                                <div className={`relative rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] border-[2px] border-[#0A0A0F] group-hover:scale-150 transition-transform duration-300 ${office.hq ? 'size-4 bg-primary' : 'size-2 bg-white'}`}></div>

                                {/* Tooltip */}
                                <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                                    <div className="bg-[#12121A]/90 border border-white/20 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-xl backdrop-blur-md">
                                        {office.name}
                                        {office.hq && <span className="block text-primary text-[10px] uppercase font-bold mt-0.5">Headquarters</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
