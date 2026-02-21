"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LivePriceTicker } from "@/components/ui/ticker";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import removed

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

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass-card shadow-2xl" : "py-5 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col group pt-1">
                        <span className="text-2xl md:text-3xl font-serif leading-none tracking-[-0.04em] text-white">
                            Brick2Wall
                            <span className="text-primary font-serif italic ml-1">Infra</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <LivePriceTicker />

                        <div className="flex items-center gap-6 text-sm font-medium text-white/80">
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

                        <MagneticButton>
                            <Button variant="gold" size="sm" className="rounded-full px-6">
                                Request Quote
                            </Button>
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="size-6" />
                        </Button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-6 lg:hidden"
                    >
                        <div className="flex justify-center mb-4">
                            <LivePriceTicker />
                        </div>
                        {NAV_LINKS.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={item.name}
                            >
                                <Link
                                    href={item.href}
                                    className="text-3xl font-serif text-white hover:text-primary transition-colors border-b border-white/10 pb-4 block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Button variant="gold" size="lg" className="w-full text-lg py-6">
                                Request Quote
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
