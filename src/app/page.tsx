import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

const AnimatedStats = dynamic(() => import("@/components/sections/AnimatedStats").then(mod => mod.AnimatedStats), { ssr: true });
const Stakeholders = dynamic(() => import("@/components/sections/Stakeholders").then(mod => mod.Stakeholders), { ssr: true, loading: () => <div className="h-screen" /> });
const MarketPrices = dynamic(() => import("@/components/sections/MarketPrices").then(mod => mod.MarketPrices), { ssr: true, loading: () => <div className="h-[800px]" /> });
const TenderIntelligence = dynamic(() => import("@/components/sections/TenderIntelligence").then(mod => mod.TenderIntelligence), { ssr: true, loading: () => <div className="min-h-screen" /> });
const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork").then(mod => mod.HowWeWork), { ssr: true, loading: () => <div className="h-screen" /> });
const ManufacturingCredibility = dynamic(() => import("@/components/sections/ManufacturingCredibility").then(mod => mod.ManufacturingCredibility), { ssr: true, loading: () => <div className="h-[800px]" /> });
const BrandsMarquee = dynamic(() => import("@/components/sections/BrandsMarquee").then(mod => mod.BrandsMarquee), { ssr: true, loading: () => <div className="h-[400px]" /> });
const IndiaMap = dynamic(() => import("@/components/sections/IndiaMap").then(mod => mod.IndiaMap), { ssr: true, loading: () => <div className="h-screen" /> });
const ProjectFinance = dynamic(() => import("@/components/sections/ProjectFinance").then(mod => mod.ProjectFinance), { ssr: true, loading: () => <div className="h-screen" /> });
const PartnersMarquee = dynamic(() => import("@/components/sections/PartnersMarquee").then(mod => mod.PartnersMarquee), { ssr: true, loading: () => <div className="h-[400px]" /> });
const ProductsGrid = dynamic(() => import("@/components/sections/ProductsGrid").then(mod => mod.ProductsGrid), { ssr: true, loading: () => <div className="min-h-screen" /> });
const WhomDoWeServe = dynamic(() => import("@/components/sections/WhomDoWeServe").then(mod => mod.WhomDoWeServe), { ssr: true, loading: () => <div className="h-[900px]" /> });
const DifferentiationMatrix = dynamic(() => import("@/components/sections/DifferentiationMatrix").then(mod => mod.DifferentiationMatrix), { ssr: true, loading: () => <div className="min-h-screen" /> });
const International = dynamic(() => import("@/components/sections/International").then(mod => mod.International), { ssr: true, loading: () => <div className="h-screen" /> });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), { ssr: true, loading: () => <div className="h-[600px]" /> });
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ), { ssr: true, loading: () => <div className="h-[800px]" /> });
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AnimatedStats />

      <Stakeholders />

      <MarketPrices />
      <TenderIntelligence />

      <HowWeWork />

      <ManufacturingCredibility />
      <BrandsMarquee />
      <IndiaMap />
      <ProjectFinance />
      <PartnersMarquee />
      <ProductsGrid />

      <WhomDoWeServe />

      <DifferentiationMatrix />

      <International />

      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
