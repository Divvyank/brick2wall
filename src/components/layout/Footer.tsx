"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
    return (
        <>
            <section className="relative bg-[#050507] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="bg-[#12121A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none transform-gpu"></div>

                        <div className="flex-1 max-w-2xl relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em] mb-6 leading-[1.1]">
                                Ready to engineer value <br />
                                <span className="text-primary italic">for your next project?</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 max-w-lg">
                                Upload your BOQ or enter project details to get an instant AI-processed quote across 50+ categories with locked-in logistics.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MagneticButton className="inline-block w-full sm:w-auto">
                                    <Button variant="gold" size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-none">
                                        Instant Quote in &lt;60s <ArrowRight className="ml-2 size-5" />
                                    </Button>
                                </MagneticButton>
                                <MagneticButton className="inline-block w-full sm:w-auto">
                                    <Button variant="glass" size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto text-white">
                                        Talk to an Expert
                                    </Button>
                                </MagneticButton>
                            </div>
                        </div>

                        <div className="w-full md:w-[400px] shrink-0 glass-card p-6 md:p-8 rounded-2xl border border-white/10 relative z-10">
                            <h3 className="text-2xl font-serif text-white mb-6">Quick Contact</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name / Company"
                                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <span className="text-white/40">₹</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Approx Project Value"
                                        className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <Button className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold mt-2">
                                    Request Callback
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="flex flex-col gap-6">
                            <span className="text-3xl font-serif tracking-[-0.04em] text-white">
                                Brick2Wall<span className="text-primary italic ml-1">Infra</span>
                            </span>
                            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                                Value Engineers for India&apos;s Infrastructure. Empowering EPCs with direct-from-mill pricing, intelligent logistics, and project finance.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold tracking-wider text-sm uppercase mb-2">Platform</h4>
                            {[
                                { name: "Products & Categories", href: "/#products" },
                                { name: "Live Market Prices", href: "/" },
                                { name: "Tender Intelligence", href: "/#tenders" },
                                { name: "Project Finance (6-8%)", href: "/#project-finance" },
                                { name: "Bulk Inquiry", href: "#" }
                            ].map(link => (
                                <Link key={link.name} href={link.href} className="text-white/50 hover:text-primary transition-colors text-sm">{link.name}</Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold tracking-wider text-sm uppercase mb-2">Company</h4>
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Manufacturing Partners", href: "/#mills" },
                                { name: "Careers", href: "#" },
                                { name: "News & Press", href: "#" },
                                { name: "Contact Us", href: "#" }
                            ].map(link => (
                                <Link key={link.name} href={link.href} className="text-white/50 hover:text-primary transition-colors text-sm">{link.name}</Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold tracking-wider text-sm uppercase mb-2">Connect</h4>
                            <div className="flex items-start gap-3 mt-1 text-white/50 text-sm">
                                <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                                <span><strong>Gurgaon HQ:</strong> Brick2Wall, 5th Floor, 448 -<br />451 Rao Gajraj Singh Marg,<br />Udyog Vihar Phase V Rd, Gurugram, Haryana 122016</span>
                            </div>
                            <div className="flex items-start gap-3 mt-2 text-white/50 text-sm">
                                <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                                <span><strong>Chennai:</strong> WeWork Olympia Cyberspace<br />No 21/22, Alandur Road, Arulayiammanpet,<br />2nd Street, Guindy, Chennai 600032</span>
                            </div>
                            <div className="flex items-start gap-3 mt-2 text-white/50 text-sm">
                                <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                                <span><strong>Singapore HQ:</strong> 60 Paya Lebar Road<br />#09-43 Paya Lebar Square, SG 409051</span>
                            </div>
                            <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-3 text-white/50 text-sm">
                                    <Phone className="size-4 shrink-0 text-primary" />
                                    <span>+91 124-4544227</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/50 text-sm">
                                    <Mail className="size-4 shrink-0 text-primary" />
                                    <span>helpdesk@brick2wall.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-xs text-center md:text-left">
                            &copy; {new Date().getFullYear()} Brick2Wall Infra Pvt. Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-white/30 hover:text-white/80 text-xs transition-colors">Privacy Policy</a>
                            <a href="#" className="text-white/30 hover:text-white/80 text-xs transition-colors">Terms of Service</a>
                            <a href="#" className="text-white/30 hover:text-white/80 text-xs transition-colors">Vendor Agreement</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
