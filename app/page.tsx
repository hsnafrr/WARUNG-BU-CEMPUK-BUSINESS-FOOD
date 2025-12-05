import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
