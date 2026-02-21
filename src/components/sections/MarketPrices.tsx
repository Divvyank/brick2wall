"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BellRing } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const MARKET_DATA = [
    { id: 1, material: "TMT Fe500D", brand: "Primary", price: "₹51,200", unit: "/ MT", change: "+1.2%", trend: "up" },
    { id: 2, material: "TMT Fe550D", brand: "Secondary", price: "₹48,500", unit: "/ MT", change: "-0.5%", trend: "down" },
    { id: 3, material: "Structural Steel", brand: "Angles/Channels", price: "₹53,800", unit: "/ MT", change: "+0.8%", trend: "up" },
    { id: 4, material: "MS Plates", brand: "IS 2062", price: "₹52,400", unit: "/ MT", change: "+2.1%", trend: "up" },
    { id: 5, material: "MS Pipes", brand: "ERW", price: "₹56,000", unit: "/ MT", change: "-1.1%", trend: "down" },
    { id: 6, material: "Cement", brand: "OPC 53 Grade", price: "₹340", unit: "/ Bag", change: "0.0%", trend: "neutral" },
];

export function MarketPrices() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 }
        },
    };

    return (
        <section id="prices" className="py-24 md:py-32 relative bg-background overflow-hidden z-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.04em] mb-4 text-white">
                            Live <span className="text-primary italic">Market</span> Rates
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-sans">
                            Real-time pricing from 30+ top-tier mills and manufacturing plants. Transparent, AI-verified, and always up-to-date.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <MagneticButton>
                            <Button variant="outline" className="rounded-full h-12 px-6 gap-2 text-white border-white/20 hover:bg-white/10 hover:text-primary transition-all">
                                <BellRing className="size-4" />
                                Get WhatsApp Alerts
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {MARKET_DATA.map((item) => (
                        <motion.div key={item.id} variants={cardVariants}>
                            <TiltCard>
                                <Card className="h-full border-white/5 overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors duration-700 transform-gpu pointer-events-none"></div>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-white/60 text-sm font-medium uppercase tracking-wider">
                                            {item.brand}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-2xl font-serif text-white">{item.material}</h3>
                                            <div className="flex items-end justify-between">
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl lg:text-4xl font-bold tracking-tight text-white">{item.price}</span>
                                                    <span className="text-white/50 text-sm font-medium">{item.unit}</span>
                                                </div>
                                                <div className={`flex flex-col items-end ${item.trend === "up" ? "text-green-500" :
                                                    item.trend === "down" ? "text-destructive" :
                                                        "text-white/50"
                                                    }`}>
                                                    <span className="flex items-center text-sm font-bold bg-white/5 px-2 py-1 rounded-md mb-1">
                                                        {item.trend === "up" && <TrendingUp className="size-3 mr-1" />}
                                                        {item.trend === "down" && <TrendingDown className="size-3 mr-1" />}
                                                        {item.trend === "neutral" && <span className="mr-1">-</span>}
                                                        {item.change}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
