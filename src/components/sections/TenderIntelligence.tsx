"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MapPin, Calendar, Briefcase, Zap } from "lucide-react";

const TENDERS = [
    {
        id: "T-2024-MH-089",
        title: "Construction of 4-Lane Highway (NH-66) Package II",
        authority: "NHAI",
        state: "Maharashtra",
        value: "₹850 Cr",
        deadline: "15 Oct 2024",
        match: 98,
    },
    {
        id: "T-2024-UP-112",
        title: "Development of Greenfield Airport Infrastructure",
        authority: "AAI",
        state: "Uttar Pradesh",
        value: "₹1,200 Cr",
        deadline: "22 Oct 2024",
        match: 94,
    },
    {
        id: "T-2024-GJ-044",
        title: "Water Treatment Plant Expansion Phase 3",
        authority: "GWSSB",
        state: "Gujarat",
        value: "₹345 Cr",
        deadline: "05 Nov 2024",
        match: 89,
    },
];

export function TenderIntelligence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

    return (
        <section ref={containerRef} id="tenders" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0F]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] opacity-30 transform-gpu pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 lg:pr-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full w-fit border border-secondary/30">
                            <Zap className="size-4 text-primary" />
                            <span className="text-sm font-medium">B2W BidAssist™ AI</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-serif tracking-[-0.04em] leading-[1.1] text-white">
                            Win More Projects.
                            <br />
                            <span className="text-white/40 italic">Effortlessly.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/60 font-sans max-w-xl">
                            Access <strong className="text-white">50M+ Government Tenders</strong> across India. Our AI matches your exact capabilities, past experience, and financial capacity to tenders you have the highest probability of winning.
                        </p>

                        <ul className="flex flex-col gap-4 mt-4 text-white/80">
                            {['Daily AI-matched tender alerts', 'Competitor bidding history analysis', 'Tender drafting & compliance assistance'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <div className="size-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <MagneticButton className="inline-block">
                                <Button variant="gold" size="lg" className="h-14 px-8 text-lg rounded-full">
                                    Explore AI Tender Match
                                </Button>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Cards Parallax Display */}
                    <div className="relative h-[600px] lg:h-[700px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F] z-20 pointer-events-none"></div>

                        <motion.div style={{ y: y1 }} className="absolute left-0 md:left-[10%] top-0 z-10 w-full md:w-[85%]">
                            <TiltCard>
                                {/* Added transform-gpu to fix Chromium Windows backdrop-blur rendering corruption */}
                                <Card className="relative transform-gpu p-6 md:p-8 bg-[#12121A]/90 border-white/10 shadow-2xl backdrop-blur-md">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                                            {TENDERS[0].match}% AI Match
                                        </span>
                                        <span className="text-white/40 text-sm font-mono">{TENDERS[0].id}</span>
                                    </div>

                                    <h3 className="text-2xl font-serif text-white mb-6 leading-tight">
                                        {TENDERS[0].title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 text-xs uppercase tracking-wider">Estimated Value</span>
                                            <span className="text-2xl font-bold text-white tracking-tight">{TENDERS[0].value}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 text-xs uppercase tracking-wider">Authority</span>
                                            <span className="text-white font-medium flex items-center gap-2">
                                                <Briefcase className="size-4 text-primary" /> {TENDERS[0].authority}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 text-xs uppercase tracking-wider">Location</span>
                                            <span className="text-white font-medium flex items-center gap-2">
                                                <MapPin className="size-4 text-primary" /> {TENDERS[0].state}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 text-xs uppercase tracking-wider">Deadline</span>
                                            <span className="text-white font-medium flex items-center gap-2">
                                                <Calendar className="size-4 text-destructive" /> {TENDERS[0].deadline}
                                            </span>
                                        </div>
                                    </div>

                                    <Button variant="outline" className="w-full justify-between group border-white/20 hover:bg-white/10 hover:text-white">
                                        View Tender Details
                                        <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                                    </Button>
                                </Card>
                            </TiltCard>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="absolute right-0 md:right-[5%] top-[150px] z-0 w-full md:w-[80%] opacity-60 scale-95 blur-[1px]">
                            {/* Added transform-gpu to fix Chromium Windows backdrop-blur rendering corruption */}
                            <Card className="relative transform-gpu p-6 md:p-8 bg-[#12121A]/80 border-white/5 shadow-xl pointer-events-none">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                                        {TENDERS[1].match}% AI Match
                                    </span>
                                    <span className="text-white/40 text-sm font-mono">{TENDERS[1].id}</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-6">
                                    {TENDERS[1].title}
                                </h3>
                                <div className="flex gap-4 mb-4">
                                    <div className="flex-1 bg-white/5 h-12 rounded-md"></div>
                                    <div className="flex-1 bg-white/5 h-12 rounded-md"></div>
                                </div>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
