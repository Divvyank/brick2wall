"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
    { name: "ICICI Bank", src: "/partner-1.png" },
    { name: "Aditya Birla Finance", src: "/partner-2.png" },
    { name: "Axis Bank", src: "/partner-3.png" },
    { name: "IndusInd Bank", src: "/partner-4.png" },
    { name: "YES Bank", src: "/partner-5.png" },
];

export function PartnersMarquee() {
    return (
        <section className="py-24 md:py-32 bg-[#0A0A0F] overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-20 md:mb-24 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em]">
                    Empowered by Leading <span className="text-primary italic">Financial Partners</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden w-full group">
                {/* Left/Right Luxe Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: [0, -1600] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                    style={{ willChange: "transform" }}
                    className="flex gap-8 md:gap-12 whitespace-nowrap min-w-max items-center py-8 transform-gpu"
                >
                    {/* Duplicate the array multiple times for seamless ultra-wide infinite scroll */}
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-5 group/card cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-48 md:w-64 h-[90px] rounded-[1.5rem] md:rounded-3xl border border-white/10 bg-[#12121A]/80 transition-all duration-700 ease-out transform-gpu group-hover/card:-translate-y-2 group-hover/card:scale-[1.06] group-hover/card:bg-[#1A1A24] group-hover/card:shadow-[0_20px_40px_rgba(212,175,55,0.15),_inset_0_0_0_1px_rgba(212,175,55,0.4)] px-6">
                                <div className="relative w-full h-[50px] md:h-[62px]">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        fill
                                        sizes="200px"
                                        className="object-contain filter grayscale opacity-70 transition-all duration-700 ease-out transform-gpu group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                    />
                                </div>
                            </div>
                            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] font-medium text-white/30 uppercase group-hover/card:text-primary transition-colors duration-500">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
