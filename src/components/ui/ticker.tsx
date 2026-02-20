"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

const PRICES = [
    { name: "TMT Fe550D", price: "₹52,400/MT", trend: "up", change: "+1.2%" },
    { name: "HR Coil", price: "₹55,100/MT", trend: "down", change: "-0.5%" },
    { name: "MS Plate", price: "₹51,800/MT", trend: "up", change: "+0.8%" },
    { name: "Cement 53G", price: "₹340/Bag", trend: "up", change: "+2.1%" },
    { name: "Wire Rod", price: "₹49,000/MT", trend: "down", change: "-1.1%" },
];

export function LivePriceTicker() {
    return (
        <div className="flex w-full max-w-[400px] xl:max-w-[600px] overflow-hidden whitespace-nowrap bg-white/5 border border-white/10 rounded-full px-4 py-1.5 items-center">
            <div className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mr-4 shrink-0 flex items-center gap-1.5 pt-[1px]">
                <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
                </span>
                Live Prices
            </div>

            <div className="flex overflow-hidden relative w-full pt-[2px]">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {/* Double the array for seamless infinite scroll */}
                    {[...PRICES, ...PRICES, ...PRICES].map((item, i) => (
                        <div key={i} className="flex flex-row items-center gap-2 text-xs">
                            <span className="font-medium text-white">{item.name}</span>
                            <span className="text-white/70">{item.price}</span>
                            <span
                                className={`flex items-center text-[10px] font-bold ${item.trend === "up" ? "text-green-500" : "text-destructive"
                                    }`}
                            >
                                {item.trend === "up" ? (
                                    <TrendingUp className="size-3 mr-0.5" />
                                ) : (
                                    <TrendingDown className="size-3 mr-0.5" />
                                )}
                                {item.change}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
