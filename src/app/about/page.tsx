import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedIndiaStatesMap } from "@/components/sections/AnimatedIndiaStatesMap";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Image from "next/image";

const LEADERS = [
    { name: "Nishant Garg", role: "Co-Founder & CEO", src: "/team1.png" },
    { name: "Shashank Garg", role: "Co-Founder & COO", src: "/team2.png" },
    { name: "Saad Maddas", role: "Technical Head", src: "/team3.png" },
    { name: "Nikita Garg", role: "Marketing Head", src: "/team5-1.png" },
    { name: "Trilok", role: "Advisor - Operations", src: "/team7-2.png" },
];

const ADVISORY = [
    { name: "Ajay Makhija", role: "Advisor - Governance", src: "/advisory1.png" },
    { name: "S. Somasundaram", role: "Advisor - Strategy", src: "/advisory2.png" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col relative w-full overflow-x-hidden pt-24">
            <Navbar />

            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0F]">
                <div className="absolute top-0 left-1/2 w-full h-[600px] bg-primary/10 -translate-x-1/2 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-[-0.04em] mb-6 drop-shadow-lg">
                        Our <span className="text-primary italic">Mission</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-sans leading-relaxed">
                        To architect a frictionless, completely transparent, and hyper-efficient infrastructure supply chain for the world's fastest-growing economy.
                    </p>
                </div>
            </section>

            {/* Company Profile & Map */}
            <section className="py-24 md:py-32 bg-[#050507] border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-[-0.04em] mb-12 drop-shadow-md">
                                Company <span className="text-primary italic">Profile</span>
                            </h2>
                            <div className="space-y-10 text-lg text-white/60 leading-relaxed max-w-xl">
                                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-500">
                                    <h3 className="text-2xl font-serif text-white mb-3">The Foundation</h3>
                                    <p>
                                        Brick2Wall was forged to orchestrate the notoriously opaque, hyper-fragmented Indian construction supply chain. What began as a bold aggregation framework has crystallized into a formidable, completely vertically integrated powerhouse.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-500">
                                    <h3 className="text-2xl font-serif text-white mb-3">The Operation</h3>
                                    <p>
                                        Now processing thousands of tonnes of critical infrastructure materials daily, our logistics engine powers landmark projects nationwide. We’ve eliminated intermediaries, forging iron-cast alliances exclusively with elite secondary manufacturing facilities that meet our exacting ISO-verified parameters.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-500">
                                    <h3 className="text-2xl font-serif text-white mb-3">The Vision</h3>
                                    <p>
                                        We are pioneering the digital foundation of modern India—engineering a future where absolute traceability, unyielding quality assurance, and aggressive cost-efficiency are standard. This is not just distribution; this is supply chain supremacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="scale-95 md:scale-100 origin-center">
                                <AnimatedIndiaStatesMap />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 md:py-32 bg-[#0A0A0F] relative">
                <div className="absolute inset-0 bg-grain opacity-5 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-[-0.04em] mb-6">
                            Our <span className="text-primary italic">Leadership</span>
                        </h2>
                        <p className="text-lg text-white/60 font-sans">
                            Guided by veterans in manufacturing, finance, and global logistics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
                        {LEADERS.map((leader, i) => (
                            <div key={i} className="group relative flex flex-col items-center">
                                {/* Outer container for Transform & Shadow */}
                                <div className="relative aspect-[3/4] w-full mb-4 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] rounded-2xl group/card">
                                    {/* Inner Masking Container specifically targeting Webkit Clipping Bug */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card bg-[#0A0A0F] border border-white/5 group-hover/card:border-primary/30 transition-colors duration-500" style={{ transform: "translateZ(0)", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                                            <Image
                                                src={leader.src}
                                                alt={leader.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                                                className="object-cover object-top filter grayscale opacity-80 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-90 mix-blend-multiply pointer-events-none z-10"></div>
                                        {/* A faux hard inner stroke to prevent sub-pixel bleeding during scale interpolation */}
                                        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none z-20"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{leader.name}</h3>
                                <p className="text-sm font-sans text-white/50 tracking-wide uppercase mt-1">{leader.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Advisory */}
                    <div className="text-center mb-12 mt-24">
                        <h3 className="text-3xl font-serif text-white opacity-80">Strategic Advisory</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {ADVISORY.map((advisor, i) => (
                            <div key={i} className="group relative flex flex-col items-center w-full sm:w-[280px]">
                                {/* Outer container for Transform & Shadow */}
                                <div className="relative aspect-[3/4] w-full mb-4 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] rounded-2xl group/card">
                                    {/* Inner Masking Container specifically targeting Webkit Clipping Bug */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card bg-[#0A0A0F] border border-white/5 group-hover/card:border-primary/30 transition-colors duration-500" style={{ transform: "translateZ(0)", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                                            <Image
                                                src={advisor.src}
                                                alt={advisor.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 280px"
                                                className="object-cover object-top filter grayscale opacity-80 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-90 mix-blend-multiply pointer-events-none z-10"></div>
                                        {/* A faux hard inner stroke to prevent sub-pixel bleeding during scale interpolation */}
                                        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none z-20"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{advisor.name}</h3>
                                <p className="text-sm font-sans text-white/50 tracking-wide uppercase mt-1">{advisor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 bg-[#050507] relative overflow-hidden text-center border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[-0.04em] mb-6">
                        Ready to <span className="text-primary italic">Transform</span> Your Supply Chain?
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                        Join the industry leaders who trust Brick2Wall Infra for uncompromising quality and scale.
                    </p>

                    <MagneticButton>
                        <Button variant="gold" size="lg" className="rounded-full px-8 py-6 text-lg">
                            Partner With Us
                        </Button>
                    </MagneticButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
