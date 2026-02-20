"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Factory, FileSpreadsheet, Ruler, Truck } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { Card } from "@/components/ui/card";

const TIMELINE = [
    { icon: Factory, title: "Sourced from Mill", desc: "Grade A billets with documented chemical composition via direct integration." },
    { icon: Ruler, title: "Precision Rolling", desc: "Monitored dimensions ensuring uniform rib structure and exact weight/length ratio." },
    { icon: FileSpreadsheet, title: "MTC Generated", desc: "100% transparent Mill Test Certificates attached to every single batch digitally." },
    { icon: Truck, title: "Direct to Project", desc: "Bypassing distributors to provide 15% cost savings straight to your site." }
];

export function ManufacturingCredibility() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0F]">
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 -translate-y-1/2 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2 md:p-4">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>

                                {/* Simulated Floating Badges */}
                                <motion.div
                                    className="absolute top-10 right-10 flex items-center gap-2 bg-[#12121A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    <BadgeCheck className="size-5 text-green-400" />
                                    <span className="text-sm font-medium text-white">ISO 9001:2015</span>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-1/4 left-5 flex items-center gap-2 bg-[#12121A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl"
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                >
                                    <FileSpreadsheet className="size-5 text-primary" />
                                    <span className="text-sm font-medium text-white">100% MTC Verified</span>
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-serif text-white mb-2 leading-tight">
                                        From 30+ World-Class <br /> Mills & Plants
                                    </h3>
                                    <p className="text-white/60">We don&apos;t just aggregate. We manufacture, quality-control, and orchestrate the entire supply chain.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-[-0.04em] mb-4">
                                Traceable <span className="text-primary italic">Excellence</span>
                            </h2>
                            <p className="text-lg text-white/60 max-w-lg">
                                The traditional infrastructure supply chain is broken. We rebuilt it from the ground up to ensure quality, transparency, and radical efficiency.
                            </p>
                        </motion.div>

                        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
                            {TIMELINE.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[45px] md:-left-[53px] top-1 rounded-full p-2 bg-[#0A0A0F] border border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                        <item.icon className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/60 leading-relaxed max-w-md">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
