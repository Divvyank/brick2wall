import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { Stakeholders } from "@/components/sections/Stakeholders";
import { MarketPrices } from "@/components/sections/MarketPrices";
import { TenderIntelligence } from "@/components/sections/TenderIntelligence";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ManufacturingCredibility } from "@/components/sections/ManufacturingCredibility";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { IndiaMap } from "@/components/sections/IndiaMap";
import { ProjectFinance } from "@/components/sections/ProjectFinance";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { WhomDoWeServe } from "@/components/sections/WhomDoWeServe";
import { DifferentiationMatrix } from "@/components/sections/DifferentiationMatrix";
import { International } from "@/components/sections/International";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

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
