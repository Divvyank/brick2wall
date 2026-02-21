"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!inView) return;

        let startTimestamp: number;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * (to - from) + from));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
}

const STATS = [
    { value: 125, suffix: "+", label: "Clients Served" },
    { value: 1, suffix: "L+", label: "Cr Order Book" },
    { value: 15, suffix: "+", label: "Mill Partners" },
    { value: 500, suffix: "+", label: "Cr Credit Book" },
    { value: 180, suffix: "+", label: "Projects Executed" },
    { value: 20, suffix: "+", label: "Indian States" },
    { value: 15, suffix: "%", prefix: "Upto ", label: "Saved Procurement Costs" },
    { value: 8, suffix: "%", prefix: "6-", label: "Finance Cost Drops" },
];

export function AnimatedStats() {
    return (
        <section className="py-20 md:py-32 bg-[#050507] relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-white tracking-tight"
                    >
                        The Scale of <span className="italic text-primary">Trust</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-y md:divide-y-0 divide-white/10 p-4 md:p-0">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`flex flex-col items-center justify-center text-center ${i !== 0 ? 'pt-8 md:pt-0' : ''}`}
                        >
                            <div className="text-4xl md:text-5xl lg:text-5xl font-serif text-white mb-2 gold-gradient drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                <Counter from={0} to={stat.value} duration={2.5} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm md:text-base text-white/60 font-medium tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
