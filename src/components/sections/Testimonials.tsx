"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

const TESTIMONIALS = [
    {
        name: "Rajesh Kumar",
        role: "MD, RK Infrastructures Ltd",
        quote: "Switching to Brick2Wall saved us over ₹2.4 Cr on our latest highway project. The 60-day credit limit was approved in hours, not weeks.",
        rating: 5,
        location: "Mumbai"
    },
    {
        name: "Sandeep Singh",
        role: "Director, SS Constructions",
        quote: "The transparency is unmatched. Before B2W, we relied on opaque distributor pricing. Now we buy direct from primary mills with perfect MTC documentation.",
        rating: 5,
        location: "Delhi NCR"
    },
    {
        name: "Amit Patel",
        role: "Procurement Head, Apex Build",
        quote: "Their tender intelligence tool helped us win a ₹150 Cr water treatment project. The AI matched it to our exact credentials when we had missed it completely.",
        rating: 5,
        location: "Ahmedabad"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-[#050507] relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30 pointer-events-none transform-gpu"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white tracking-[-0.04em] mb-4"
                    >
                        Built by the <span className="text-primary italic">Best in the Industry</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/50 max-w-2xl mx-auto font-sans"
                    >
                        Don&apos;t just take our word for it. Join 2000+ top-tier EPCs and contractors who have turbocharged their operations.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <TiltCard className="h-full">
                                <div className="glass-card border border-white/10 p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group">
                                    <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                                        <Quote className="size-32" />
                                    </div>

                                    <div className="flex gap-1 mb-6 relative z-10">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="size-4 text-primary fill-primary" />
                                        ))}
                                    </div>

                                    <p className="text-white/80 font-serif text-xl leading-relaxed mb-8 flex-grow relative z-10">
                                        &quot;{t.quote}&quot;
                                    </p>

                                    <div className="relative z-10">
                                        <div className="font-bold text-white tracking-wide">{t.name}</div>
                                        <div className="text-primary text-sm font-medium">{t.role}</div>
                                        <div className="text-white/40 text-xs mt-1">{t.location}</div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
