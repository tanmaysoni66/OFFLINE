import React from "react";
import HeroSection from "./components/HeroSection";
import TrustStats from "./components/TrustStats";
import WhyChooseUs from "./components/WhyChooseUs";
import CommercialModels from "./components/CommercialModels";
import MushroomComparison from "./components/MushroomComparison";
import ROICalculator from "./components/ROICalculator";
import CriticalParameters from "./components/CriticalParameters";
import ProductionSOP from "./components/ProductionSOP";
import CompostUnits from "./components/CompostUnits";
import TestimonialsSection from "./components/TestimonialsSection";
import MarketplaceSection from "./components/MarketplaceSection";
import ResourcesKnowledgeHub from "./components/ResourcesKnowledgeHub";
import StatesSection from "./components/StatesSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 1. Hero Section with Live 3D & Status Indicators */}
      <HeroSection />

      {/* 2. Key Trust Specifications & Stats */}
      <TrustStats />

      {/* 3. Why Choose Us & 360° Infrastructure Showcase */}
      <WhyChooseUs />

      {/* 4. Commercial Turnkey Models (Model A/B/C/D + Interactive Estimator) */}
      <CommercialModels />

      {/* 5. Mushroom Species Comparison (Button vs Oyster vs Milky vs Cordyceps) */}
      <MushroomComparison />

      {/* 6. Dynamic Financial ROI & CapEx/OpEx Calculator */}
      <ROICalculator />

      {/* 7. Critical Microclimate Growth Parameters */}
      <CriticalParameters />

      {/* 8. Step-by-Step Commercial Production SOP Timeline */}
      <ProductionSOP />

      {/* 9. Commercial Compost Units & Pasteurization Tunnels */}
      <CompostUnits />

      {/* 10. Verified Grower Testimonials & Case Studies */}
      <TestimonialsSection />

      {/* 11. B2B Spawn, Fresh Wholesale & Export Marketplace */}
      <MarketplaceSection />

      {/* 12. Knowledge Hub, Downloadable Guides & Agronomy FAQs */}
      <ResourcesKnowledgeHub />

      {/* 13. Pan-India 28 States & UTs Consultation Directory */}
      <StatesSection />

      {/* 14. Turnkey Consultation Request & Direct Advisory CTA */}
      <CTASection />
    </div>
  );
}
