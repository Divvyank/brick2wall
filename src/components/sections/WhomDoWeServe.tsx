"use client";

import { motion } from "framer-motion";
import { HardHat, Train, Plane, Zap, Droplet, Radio, Building } from "lucide-react";

const SUBSECTORS = [
    { name: "Roads & Highways", icon: HardHat },
    { name: "Railways", icon: Train },
    { name: "Aviation", icon: Plane },
    { name: "Power", icon: Zap },
    { name: "Oil & Gas", icon: Droplet },
    { name: "Telecom", icon: Radio },
    { name: "Urban Development", icon: Building },
];

export function WhomDoWeServe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 md:py-32 bg-[#0A0A0F] relative overflow-hidden border-t border-white/5">
            {/* Abstract Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Narrative Side */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em] mb-6">
                                Focus on the <br />
                                <span className="text-primary italic gold-gradient drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]" suppressHydrationWarning>$100Bn+</span> Sector
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed">
                                Brick2Wall Infra exclusively focuses on the massive Indian Infrastructure sector. With variable participation from Large, Medium, and Small enterprises across the country, we have developed unparalleled intelligence to precisely ascertain consumption and procurement requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-700 transform-gpu pointer-events-none"></div>
                            <p className="text-white/90 font-medium text-lg leading-relaxed relative z-10">
                                &ldquo;By decoding complex project lifecycles, we predict material demand with absolute accuracy, enabling just-in-time delivery and crushing holding costs.&rdquo;
                            </p>
                        </motion.div>
                    </div>

                    {/* Subsectors Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                    >
                        {SUBSECTORS.map((sector) => {
                            const Icon = sector.icon;
                            return (
                                <motion.div
                                    key={sector.name}
                                    variants={itemVariants}
                                    className="glass-card aspect-square rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center hover:bg-[#151520] hover:border-primary/30 transition-all duration-300 group cursor-default shadow-lg"
                                >
                                    <div className="size-12 md:size-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                                        <Icon className="size-6 text-white/50 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-white/80 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                                        {sector.name}
                                    </span>
                                </motion.div>
                            );
                        })}

                        {/* Blank decorative block to fill 8th spot in 3x3 or 2x4 grid context visually */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card aspect-square rounded-2xl border border-transparent flex items-center justify-center p-6 text-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"
                        >
                            <div className="w-8 h-px bg-white/20"></div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
