"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ListChecks, Landmark, Trophy, ArrowRight } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        title: "Project Due Diligence",
        description: "Conducting rigorous due diligence on the infrastructure project to build a high-trust relationship with the Anchor."
    },
    {
        icon: ListChecks,
        title: "Brand Matching",
        description: "Identifying optimal product brand combinations by cross-referencing project details with our proprietary recommendation engine."
    },
    {
        icon: Landmark,
        title: "Credit Assessment",
        description: "Assessing in-principle credit limits to contractors based on verified project cash flows and the contractor's financial resilience."
    },
    {
        icon: Trophy,
        title: "Business Execution",
        description: "Winning business and commencing seamless contractor engagement to ensure frictionless delivery schedules."
    }
];

export function HowWeWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#050507] relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em] mb-6"
                    >
                        How We <span className="text-primary italic">Operate</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 font-sans max-w-2xl mx-auto"
                    >
                        A systematic, data-driven bottom-up approach to underwriting construction materials execution and financing.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
                        ></motion.div>
                    </div>

                    <div className="flex flex-col">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.title} className="relative w-full pb-12 md:pb-24 last:pb-0 group">

                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 shrink-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A0A0F] border border-primary/30 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:border-primary/60 transition-all duration-300">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                                        >
                                            <Icon className="size-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                        </motion.div>
                                    </div>

                                    {/* Content Card Wrapper */}
                                    <div className={`w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className={`w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}
                                        >
                                            <div className="glass-card w-full max-w-[420px] p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 group-hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] group-hover:-translate-y-1 transition-all duration-300 bg-[#0A0A0F]/80 hover:bg-[#12121A]">
                                                {/* Subtle Gold Hover Glow */}
                                                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                <div className={`flex flex-col gap-4 ${isEven ? 'md:items-end md:text-right items-start text-left' : 'items-start text-left'}`}>
                                                    <div className="flex items-center gap-4 text-white/40">
                                                        <span className="font-serif text-4xl text-white/10 group-hover:text-primary/30 transition-colors">0{index + 1}</span>
                                                    </div>
                                                    <h3 className="text-2xl font-serif text-white group-hover:text-primary/90 transition-colors">{step.title}</h3>
                                                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
