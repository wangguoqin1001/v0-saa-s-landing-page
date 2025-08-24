import { Hero } from "@/components/hero"
import { ProductHighlights } from "@/components/product-highlights"
import { PricingTiers } from "@/components/pricing-tiers"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductHighlights />
        <PricingTiers />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
