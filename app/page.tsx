import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { ProductCategories } from "@/components/product-categories"
import { PromotionsSection } from "@/components/promotions-section"
import { AboutPreview } from "@/components/about-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ProductCategories />
        <AboutPreview />
        <PromotionsSection />
      </main>
      <Footer />
    </div>
  )
}
