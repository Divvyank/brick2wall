"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Calculator, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const STEPS = [
    { title: "Apply & Get Approved", desc: "Digital onboarding in 10 minutes. Limit setup up to ₹50 Cr based on Project Work Order." },
    { title: "Procure Materials", desc: "Buy steel, cement, and aggregates directly through B2W platform using your credit limit." },
    { title: "90-Day Credit Period", desc: "Get up to 90 days of clean credit at effective rates of 6-8% p.a. vs market 18%." },
    { title: "Cashflow Freed", desc: "Reinvest your working capital into project execution and accelerate billing milestones." }
];

export function ProjectFinance() {
    const [activeStep, setActiveStep] = useState(0);
    const [purchaseAmount, setPurchaseAmount] = useState<number>(500); // in lakhs (5 Cr)

    // Calculations
    const traditionalInterest = purchaseAmount * 0.18 * (90 / 365);
    const b2wInterest = purchaseAmount * 0.08 * (90 / 365);
    const savings = traditionalInterest - b2wInterest;

    return (
        <section id="project-finance" className="py-24 md:py-32 bg-[#050507] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">

                    {/* Stepper Logic */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8 lg:pr-12"
                    >
                        <div>
                            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-[-0.04em] mb-4">
                                Scale Faster with <br />
                                <span className="text-primary italic">Project Finance</span>
                            </h2>
                            <p className="text-lg text-white/60 font-sans">
                                Unlock working capital directly tied to your project work orders. No collateral required for Top-Tier EPCs.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {STEPS.map((step, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-6 relative cursor-pointer group ${activeStep === i ? "opacity-100" : "opacity-50 hover:opacity-80"} transition-opacity duration-300`}
                                    onClick={() => setActiveStep(i)}
                                >
                                    {/* Line connector */}
                                    {i !== STEPS.length - 1 && (
                                        <div className="absolute left-[19px] top-10 bottom-[-24px] w-px bg-white/10 group-hover:bg-primary/30 transition-colors"></div>
                                    )}

                                    <div className={`shrink-0 size-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-500 ${activeStep === i ? "bg-primary text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "bg-white/10 text-white/50"
                                        }`}>
                                        {i + 1}
                                    </div>

                                    <div className="flex flex-col pb-4">
                                        <h3 className={`text-xl font-serif mb-2 transition-colors duration-300 ${activeStep === i ? "text-white" : "text-white/70"}`}>
                                            {step.title}
                                        </h3>
                                        <AnimatePresence>
                                            {activeStep === i && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-white/50 text-sm md:text-base pr-4"
                                                >
                                                    {step.desc}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <MagneticButton className="inline-block">
                                <Button variant="outline" className="h-12 px-6 rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                    Check Eligibility <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Interactive Calculator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full relative"
                    >
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[100px] pointer-events-none"></div>

                        <Card className="glass-card border-white/10 p-6 md:p-8 rounded-3xl relative z-10 w-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Calculator className="size-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Value Engineering ROI</h3>
                                    <p className="text-white/40 text-sm">Calculate your exact capital savings (90-Day Credit)</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-4">
                                    <span className="text-white/80 font-medium">Purchase Value</span>
                                    <span className="text-xl font-bold text-white tracking-tight">₹{purchaseAmount} Lakhs</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="5000"
                                    step="50"
                                    value={purchaseAmount}
                                    onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-white/40 mt-2 font-mono">
                                    <span>₹50L</span>
                                    <span>₹25Cr</span>
                                    <span>₹50Cr</span>
                                </div>
                            </div>

                            {/* Before/After Diagrams */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#1A1A24]/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                    <span className="text-white/40 text-xs uppercase tracking-wider mb-2">Traditional (18%)</span>
                                    <span className="text-2xl font-serif text-white/50 strike-through line-through opacity-70">
                                        ₹{traditionalInterest.toFixed(2)}L
                                    </span>
                                    <span className="text-[10px] text-destructive mt-1">Interest Cost</span>
                                </div>

                                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="text-primary/80 text-xs uppercase tracking-wider mb-2">B2W Infra (8%)</span>
                                    <span className="text-3xl font-serif text-white font-bold gold-gradient relative z-10">
                                        ₹{b2wInterest.toFixed(2)}L
                                    </span>
                                    <span className="text-[10px] text-primary mt-1 relative z-10">Interest Cost</span>
                                </div>
                            </div>

                            {/* Savings Total */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between mb-8">
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-sm mb-1">Total Clean Savings</span>
                                    <span className="text-4xl font-serif text-green-400 font-bold">
                                        ₹{savings.toFixed(2)}L
                                    </span>
                                </div>
                                <div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="size-6 text-green-400" />
                                </div>
                            </div>

                            <Button className="w-full h-14 text-lg bg-primary text-black hover:bg-primary/90 font-bold rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                Apply for B2W Credit
                            </Button>

                        </Card>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
