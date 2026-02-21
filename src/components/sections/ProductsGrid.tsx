"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle2 } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "TMT Bars", "Structural Steel", "MS Pipes & Plates", "Cement"];

const PRODUCTS = [
    { id: 1, name: "TMT Fe500D", category: "TMT Bars", grades: "Fe500D, Fe550D, Fe600", mills: "Primary & Secondary", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "MS Angles", category: "Structural Steel", grades: "IS 2062", mills: "SAIL, JSPL, RINL", img: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "MS Plates", category: "MS Pipes & Plates", grades: "IS 2062 E250/E350", mills: "SAIL, Jindal, AMNS", img: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Cement 53G", category: "Cement", grades: "OPC 53, PPC", mills: "Ultratech, Ambuja, Shree", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, name: "MS Channels", category: "Structural Steel", grades: "IS 2062", mills: "SAIL, JSPL, RINL", img: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, name: "Wire Rods", category: "TMT Bars", grades: "IS 7887", mills: "JSW, Tata, RINL", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" }
];

export function ProductsGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = PRODUCTS.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
    );

    return (
        <section id="products" className="py-24 md:py-32 relative bg-background overflow-hidden min-h-screen">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] opacity-50 pointer-events-none transform-gpu"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-[-0.04em] mb-4">
                            Our <span className="text-primary italic">Materials</span>
                        </h2>
                        <p className="text-lg text-white/60 font-sans">
                            A comprehensive catalog of construction raw materials, sourced directly from manufacturers with guaranteed MTCs and traceablity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 w-full md:w-auto"
                    >
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[500px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, type: "spring" }}
                            >
                                <TiltCard className="h-full">
                                    <Card className="glass-card overflow-hidden h-full group border-white/5 hover:border-primary/20 transition-colors p-0 rounded-2xl">
                                        <div className="h-64 relative overflow-hidden bg-[#12121A]">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10"></div>
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 transform-gpu"
                                            />
                                            <div className="absolute top-4 right-4 z-20">
                                                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                                    {product.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-6 left-6 z-20 w-full pr-12">
                                                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-col gap-4 mb-8">
                                                <div>
                                                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Available Grades</span>
                                                    <span className="text-white/80 font-medium text-sm flex items-center gap-2">
                                                        <CheckCircle2 className="size-4 text-green-400" /> {product.grades}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Trusted Mills</span>
                                                    <span className="text-white/80 font-medium text-sm flex items-center gap-2">
                                                        <CheckCircle2 className="size-4 text-primary" /> {product.mills}
                                                    </span>
                                                </div>
                                            </div>

                                            <Button variant="outline" className="w-full justify-between hover:bg-white/10 border-white/10 group/btn bg-[#1A1A24]">
                                                Add to Bulk Inquiry
                                                <Plus className="size-4 text-primary group-hover/btn:rotate-90 transition-transform" />
                                            </Button>
                                        </div>
                                    </Card>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
