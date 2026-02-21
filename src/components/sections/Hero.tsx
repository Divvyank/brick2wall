"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Framer Motion Variants
    const textContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
    };

    const textItem = {
        hidden: { opacity: 0, y: 50, rotateX: 60 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring" as const, damping: 12, stiffness: 100 },
        },
    };

    return (
        <section
            ref={container}
            className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Background Parallax Layer */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0 transform-gpu will-change-transform isolate">
                {/* Deep gradient simulating industrial luxury MUST be at the bottom for isolation to work */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#050507] via-[#0a0a10] to-[#1a1a24]"></div>

                <div className="absolute inset-0 bg-grain z-10 mix-blend-overlay opacity-30"></div>

                {/* Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-plus-lighter opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px] opacity-50"></div>
            </motion.div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

            {/* Main Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center mt-20"
            >
                <motion.div
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-6 max-w-5xl"
                >
                    {/* Subheading / Tag */}
                    <motion.div
                        variants={textItem}
                        className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                        <span className="relative flex size-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2.5 bg-primary"></span>
                        </span>
                        <span className="text-sm md:text-base font-medium tracking-wide text-white/90 uppercase">
                            Engineering Value. Eliminating Inefficiency.
                        </span>
                    </motion.div>

                    {/* Massive Headline */}
                    <div className="overflow-hidden perspective-1000">
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[0.9] tracking-[-0.04em] text-white"
                        >
                            <motion.span variants={textItem} className="inline-block">The supply chain, </motion.span>
                            <motion.span variants={textItem} className="inline-block italic text-primary gold-gradient mr-2 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"> perfected.</motion.span>
                        </motion.h1>
                    </div>

                    {/* Authentic Mission Statement */}
                    <div className="overflow-hidden mt-8 mb-4 max-w-4xl mx-auto">
                        <motion.p
                            variants={textItem}
                            className="text-lg md:text-2xl text-white/70 font-sans leading-relaxed"
                        >
                            We are on a relentless mission to create value for stakeholders by compressing operational friction and financial bloat. <br className="hidden md:block" />By fusing engineering, data analytics, and technology, we enforce flawless execution across the entire construction material ecosystem.
                        </motion.p>
                    </div>

                    {/* CTAs */}
                    <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-6 mt-12 items-center">
                        <MagneticButton>
                            <Button variant="gold" size="lg" className="h-14 px-10 text-lg rounded-full">
                                Get Instant Quote
                            </Button>
                        </MagneticButton>
                        <MagneticButton>
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full backdrop-blur-md">
                                View Live Prices
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
