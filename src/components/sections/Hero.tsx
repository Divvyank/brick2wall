"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
            // Strict 100vh constraint as requested to keep cinematic full-bleed feel.
            // Responsive pb-32 protects the Absolute scroll element from overlap.
            className="relative h-[100svh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-background pb-12 sm:pb-0"
        >
            {/* Background Parallax Layer */}
            {mounted && (
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0 transform-gpu will-change-transform isolate">
                    {/* Deep gradient simulating industrial luxury MUST be at the bottom for isolation to work */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050507] via-[#0a0a10] to-[#1a1a24]"></div>

                    <div className="absolute inset-0 bg-grain z-10 mix-blend-overlay opacity-30"></div>

                    {/* Glow Effects */}
                    <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-plus-lighter opacity-50"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/30 rounded-full blur-[100px] md:blur-[150px] opacity-50"></div>
                </motion.div>
            )}

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_80%,transparent_100%)] z-0 pointer-events-none"></div>

            {/* Main Content */}
            <motion.div
                style={mounted ? { opacity } : {}}
                className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center mt-12 md:mt-20 max-w-[100vw]"
            >
                <motion.div
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-5xl mx-auto"
                >
                    {/* Subheading / Tag */}
                    <motion.div
                        variants={textItem}
                        className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-2 xl:py-2.5 rounded-full backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-full overflow-hidden shrink-0"
                    >
                        <span className="relative flex size-2 sm:size-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 sm:size-2.5 bg-primary"></span>
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm xl:text-base font-medium tracking-widest text-white/90 uppercase whitespace-nowrap truncate">
                            <span className="hidden sm:inline">Engineering Value. </span>Eliminating Inefficiency.
                        </span>
                    </motion.div>

                    {/* Massive Headline - Perfectly Centered and Clamped */}
                    <div className="overflow-hidden perspective-1000 w-full px-2">
                        <motion.h1
                            className="text-[clamp(3.5rem,8vw,7.5rem)] font-serif leading-[0.95] tracking-tight sm:tracking-[-0.04em] text-white flex flex-col xl:inline-block w-[100%] items-center justify-center"
                        >
                            <motion.span variants={textItem} className="inline-block">The supply chain,</motion.span>
                            <motion.span variants={textItem} className="inline-block italic text-primary gold-gradient sm:ml-3 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] md:drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] mt-1 xl:mt-0"> perfected.</motion.span>
                        </motion.h1>
                    </div>

                    {/* Authentic Mission Statement */}
                    <div className="overflow-hidden mt-4 md:mt-6 mb-2 max-w-[95%] sm:max-w-4xl mx-auto">
                        <motion.p
                            variants={textItem}
                            className="text-[clamp(1rem,2vw,1.5rem)] text-white/70 font-sans leading-relaxed md:leading-relaxed mx-auto max-w-[800px]"
                        >
                            We are on a relentless mission to create value for stakeholders by compressing operational friction and financial bloat. <br className="hidden md:block" />By fusing engineering, data analytics, and technology, we enforce flawless execution across the entire construction material ecosystem.
                        </motion.p>
                    </div>

                    {/* CTAs - Stack Vertically on Narrow Screens, Gap Safely */}
                    <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 md:mt-10 items-center justify-center w-full z-20">
                        <MagneticButton className="w-full sm:w-auto">
                            <Button variant="gold" size="lg" className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                Get Instant Quote
                            </Button>
                        </MagneticButton>
                        <MagneticButton className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg rounded-full w-full sm:w-auto backdrop-blur-md border-white/20 hover:bg-white/5">
                                View Live Prices
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator - Safely pinned to the bottom. Hero min-height & padding avoids overlap! */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
