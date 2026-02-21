"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Factory, Truck, Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";

const STAKEHOLDERS = [
    {
        icon: Building2,
        title: "Infrastructure Firms",
        description: "Empowering EPCs with intelligent procurement.",
        benefits: [
            "Optimize procurement cost",
            "Enable timely works execution",
            "Reduce working capital management burden",
        ]
    },
    {
        icon: Factory,
        title: "Manufacturers",
        description: "Connecting quality producers directly to large-scale demand.",
        benefits: [
            "Higher asset utilization",
            "Expand catchment area",
            "Broaden consumer base",
        ]
    },
    {
        icon: Truck,
        title: "Logistics Partners",
        description: "Streamlining the movement of heavy infrastructure materials.",
        benefits: [
            "Optimize fleet utilization by opening newer markets",
            "Predictable volume and routing",
            "Reduced idle time",
        ]
    },
    {
        icon: Landmark,
        title: "Financiers",
        description: "Providing secure, data-backed lending opportunities.",
        benefits: [
            "Add a precise layer of risk assessment",
            "Mitigate default risk through escrowed material supply",
            "Tap into high-yield, short-term EPC cycles",
        ]
    }
];

export function Stakeholders() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const cardVariants: any = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em] mb-6"
                    >
                        Value for Our <span className="text-primary italic">Stakeholders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 font-sans"
                    >
                        Our ecosystem aligns incentives across the entire supply chain, ensuring that every participant—from mill to site—achieves unprecedented efficiency.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STAKEHOLDERS.map((group, index) => {
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={group.title}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15 }}
                                className="group relative h-full"
                            >
                                <div className="absolute -inset-px bg-gradient-to-b from-primary/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Card className="h-full bg-[#0A0A0F]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col relative z-10 hover:bg-[#12121A] transition-colors overflow-hidden">

                                    {/* Top Icon & Title */}
                                    <div className="mb-6 relative">
                                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="size-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-2">{group.title}</h3>
                                        <p className="text-sm text-white/50">{group.description}</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6"></div>

                                    {/* Benefits */}
                                    <ul className="space-y-4 mt-auto">
                                        {group.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-1 flex size-1.5 rounded-full bg-primary/60 shrink-0"></span>
                                                <span className="text-sm text-white/80 leading-snug">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
