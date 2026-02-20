"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
    {
        question: "How is pricing determined for materials?",
        answer: "Pricing is synchronized directly with the primary and secondary mills in real-time. We only charge a transparent, flat logistics and handling fee per MT, completely eliminating standard distributor markups."
    },
    {
        question: "Do you provide credit for all purchases?",
        answer: "Yes, subject to a one-time digital underwriting process. Top-tier EPCs and contractors can unlock up to ₹50 Cr in revolving credit lines for 30, 60, or 90 days at rates as low as 6-8% annually."
    },
    {
        question: "How can I be sure of the material quality?",
        answer: "Every batch of steel or cement we deliver comes with a digitally verifiable Mill Test Certificate (MTC). For TMT bars, we guarantee ISI mark compliance and exact sectional weights."
    },
    {
        question: "What is the typical delivery SLA?",
        answer: "With our network of 4,200+ active trucks and direct mill relationships, we guarantee dispatch within 48 hours for standard materials across 26 states."
    },
    {
        question: "How does the AI Tender Match work?",
        answer: "Our engine scans over 50 million government tenders daily. By analyzing your company's past work orders, financials, and location coverage, it identifies the tenders where you have the highest statistical probability of winning."
    }
];

export function FAQ() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <HelpCircle className="size-4 text-primary" />
                        <span className="text-sm font-medium text-white/80">Clear & Transparent</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white tracking-[-0.04em]"
                    >
                        Frequently Asked <span className="text-primary italic">Questions</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {FAQS.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="bg-white/5 border border-white/10 rounded-xl px-6 py-2 data-[state=open]:bg-white/10 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
