"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LivePriceTicker } from "@/components/ui/ticker";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/#products" },
    { name: "International", href: "/#international" },
    { name: "Tenders", href: "/#tenders" },
    { name: "Project Finance", href: "/#project-finance" },
    { name: "Mills", href: "/#mills" }
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset" };
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden 
                    ${scrolled ? "py-3 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-5 bg-transparent"}`
                }
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-4">

                    {/* Left Side: Logo + Main Ticker */}
                    <div className="flex items-center gap-4 xl:gap-8 flex-1 shrink min-w-0">
                        {/* Logo: uses clamp so it never wraps prematurely */}
                        <Link href="/" className="flex flex-col group pt-1 shrink-0 z-50">
                            <span className="text-[clamp(1.2rem,2.5vw,1.875rem)] font-serif leading-none tracking-[-0.04em] text-white whitespace-nowrap">
                                Brick2Wall
                                <span className="text-primary font-serif italic ml-1">Infra</span>
                            </span>
                        </Link>

                        {/* DESKTOP TICKER (The one and only) */}
                        <div className="hidden min-[1200px]:block max-w-[300px] xl:max-w-[400px] overflow-hidden shrink">
                            <LivePriceTicker />
                        </div>
                    </div>

                    {/* Right Side: Links, CTA, Menu */}
                    <div className="flex items-center gap-4 xl:gap-6 shrink-0 z-50 ml-auto justify-end">

                        {/* Desktop Links */}
                        <div className="hidden min-[1200px]:flex items-center gap-4 xl:gap-6 text-sm font-medium text-white/80 whitespace-nowrap">
                            {NAV_LINKS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-primary transition-colors hover:scale-105 transform duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Request Quote Pill: Always visible, never squished */}
                        <MagneticButton>
                            <Button variant="gold" size="sm" className="rounded-full px-4 md:px-6 text-xs md:text-sm whitespace-nowrap shrink-0 border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                                Request Quote
                            </Button>
                        </MagneticButton>

                        {/* Hamburger toggle for Mobile + High Zoom */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="min-[1200px]:hidden text-white hover:bg-white/10 shrink-0"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </Button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile / High-Zoom Overlay Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#050507]/98 backdrop-blur-3xl pt-24 px-6 pb-10 flex flex-col overflow-y-auto min-[1200px]:hidden"
                    >
                        {/* Mobile Ticker Rendered here when desktop hidden */}
                        <div className="flex justify-center mb-8 shrink-0 max-w-full overflow-hidden border border-white/5 bg-white/5 rounded-full py-1.5 px-1 shadow-xl">
                            <LivePriceTicker />
                        </div>

                        <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
                            {NAV_LINKS.map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    key={item.name}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-[clamp(1.5rem,5vw,2.25rem)] font-serif text-white hover:text-primary transition-colors border-b border-white/10 pb-4 block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
