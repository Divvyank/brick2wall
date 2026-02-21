"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    { name: "JSW Steel", src: "/jsw.png" },
    { name: "Maithan Steel", src: "/maithan.png" },
    { name: "Nilkanth", src: "/nilakanth.png" },
    { name: "Pulkit TMT", src: "/pulkit.png" },
    { name: "Rungta Mines", src: "/rungta.png" },
    { name: "SAIL", src: "/brand-1.png" },
    { name: "Jindal Panther", src: "/brand-2.png" },
    { name: "Shyam Steel", src: "/brand-5.png" },
    { name: "Nakoda Steel", src: "/brand-7.png" },
    { name: "Afstar", src: "/brand-10.png" },
    { name: "Rama TMT", src: "/rama-1.png" },
    { name: "Rashmi Group", src: "/brand-4.png" },
];

export function BrandsMarquee() {
    return (
        <section className="py-24 md:py-32 bg-[#050507] overflow-hidden relative border-y border-white/5">
            <div className="absolute inset-0 bg-grain opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-20 md:mb-24 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em]">
                    Sourced from <span className="text-primary italic">World-Class Brands</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden w-full group">
                {/* Left/Right Luxe Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#050507] via-[#050507]/90 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#050507] via-[#050507]/90 to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: [0, -3200] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 45,
                    }}
                    style={{ willChange: "transform" }}
                    className="flex gap-8 md:gap-12 whitespace-nowrap min-w-max items-center py-8 transform-gpu"
                >
                    {/* Duplicate the array 3 times for seamless ultra-wide infinite scroll */}
                    {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-5 group/card cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-48 md:w-64 h-[90px] rounded-[1.5rem] md:rounded-3xl border border-white/10 bg-[#0A0A0F]/80 transition-all duration-700 ease-out transform-gpu group-hover/card:-translate-y-2 group-hover/card:scale-[1.06] group-hover/card:bg-[#12121A] group-hover/card:shadow-[0_20px_40px_rgba(212,175,55,0.15),_inset_0_0_0_1px_rgba(212,175,55,0.4)] px-6">
                                <div className="relative w-full h-[50px] md:h-[62px]">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        sizes="200px"
                                        className="object-contain filter grayscale opacity-70 transition-all duration-700 ease-out transform-gpu group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                    />
                                </div>
                            </div>
                            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] font-medium text-white/30 uppercase group-hover/card:text-primary transition-colors duration-500">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
