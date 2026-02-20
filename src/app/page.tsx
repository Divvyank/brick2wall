import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarketPrices } from "@/components/sections/MarketPrices";
import { TenderIntelligence } from "@/components/sections/TenderIntelligence";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { ManufacturingCredibility } from "@/components/sections/ManufacturingCredibility";
import { IndiaMap } from "@/components/sections/IndiaMap";
import { ProjectFinance } from "@/components/sections/ProjectFinance";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { DifferentiationMatrix } from "@/components/sections/DifferentiationMatrix";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AnimatedStats />
      <MarketPrices />
      <TenderIntelligence />
      <ManufacturingCredibility />
      <IndiaMap />
      <ProjectFinance />
      <ProductsGrid />
      <DifferentiationMatrix />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
