"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";

export function DifferentiationMatrix() {
    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="py-24 md:py-32 bg-[#0A0A0F] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)]"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16 relative z-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-1.5 rounded-full mb-6"
                    >
                        <ShieldAlert className="size-4 text-primary" />
                        <span className="text-sm font-medium text-white/90">The B2W Advantage</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white tracking-[-0.04em] mb-6"
                    >
                        Burying the <span className="text-primary italic">Status Quo</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 font-sans"
                    >
                        How Brick2Wall Infra compares against traditional distributors and legacy B2B aggregators. We eliminate hidden margins and prioritize your bottom line.
                    </motion.p>
                </div>

                <motion.div
                    className="relative z-10 mx-auto max-w-5xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {/* Matrix Header */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 md:px-6 border-b border-white/10 mb-4 sticky top-0 bg-[#0A0A0F]/80 backdrop-blur-md z-20">
                        <div className="col-span-1 md:col-span-2 flex items-end pb-2">
                            <span className="text-white/40 text-sm md:text-base font-medium tracking-wider uppercase">Capability</span>
                        </div>
                        <div className="flex flex-col items-center justify-end pb-2 text-center">
                            <span className="text-white/40 text-xs md:text-sm mb-2">Legacy Models</span>
                            <span className="text-white/80 font-serif text-lg md:text-xl">Traditional</span>
                        </div>
                        <div className="flex flex-col items-center justify-end pb-2 text-center relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-t-2xl border-t border-x border-primary/20 -z-10"></div>
                            <span className="text-primary text-xs flex items-center gap-1 font-bold mb-2 uppercase tracking-widest">
                                The New Standard
                            </span>
                            <span className="text-white font-serif text-2xl drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Brick2Wall</span>
                        </div>
                    </div>

                    {/* Authentic Matrix Rows */}
                    {[
                        { tag: "Procurement Costs", desc: "We optimize cost by focusing holistically on continuous volume alongside price.", b2w: true, trad: "Price-Only Focus" },
                        { tag: "Supply Confidence", desc: "Providing secondary manufacturers with an absolute seal of confidence.", b2w: true, trad: "Opaque Sourcing" },
                        { tag: "Asset Visibility", desc: "Helping manufacturers showcase world-class production facilities and raw material superiority.", b2w: true, trad: false },
                        { tag: "Product Readiness", desc: "Providing customized, ready-to-use products tailored to exact site schematics.", b2w: true, trad: false },
                    ].map((row, i) => (
                        <motion.div key={i} variants={rowVariants} className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 md:px-6 border-b border-white/5 items-center relative group hover:bg-[#12121A] transition-colors rounded-xl">
                            <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                                <span className="text-white text-base md:text-lg font-medium mb-1">{row.tag}</span>
                                <span className="text-white/50 text-xs md:text-sm font-sans">{row.desc}</span>
                            </div>

                            <div className="flex items-center justify-center border-l border-white/5 pl-4">
                                {typeof row.trad === "boolean" ? (
                                    row.trad ? <Check className="size-5 text-white/30" /> : <X className="size-5 text-destructive/70" />
                                ) : (
                                    <span className="text-white/50 text-xs md:text-sm text-center">{row.trad}</span>
                                )}
                            </div>

                            <div className="flex items-center justify-center relative border-l border-white/5 pl-4">
                                <div className="absolute -inset-y-4 -inset-x-4 bg-primary/10 border-x border-primary/20 -z-10 group-last:rounded-b-2xl group-last:border-b"></div>
                                {row.b2w === true ? (
                                    <div className="size-8 md:size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                        <Check className="size-4 md:size-5 text-primary" />
                                    </div>
                                ) : (
                                    <span className="text-primary font-bold text-sm text-center">{row.b2w}</span>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Authentic Impact Metrics */}
                    <motion.div
                        variants={rowVariants}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { val: "15%", label: "Cost Reduction" },
                            { val: "1.5X", label: "Asset Utilization" },
                            { val: "5X", label: "FI Credit Lines" },
                            { val: "1.5X", label: "Fleet Utilization" },
                        ].map((metric, i) => (
                            <div key={i} className="glass-card p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                                <span className="text-3xl font-serif text-primary mb-2 gold-gradient bg-clip-text text-transparent">{metric.val}</span>
                                <span className="text-white/60 text-xs uppercase tracking-wider leading-relaxed">{metric.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
