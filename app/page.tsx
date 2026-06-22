import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { About } from "@/components/about"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Services } from "@/components/services"
import { Overseas } from "@/components/overseas"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Subtle film grain over the whole page */}
      <div className="pointer-events-none fixed inset-0 z-[55] bg-grain opacity-[0.035] mix-blend-soft-light" />

      <ScrollProgress />
      <SiteHeader />
      <Hero />
      <StatsBar />
      <About />
      <Problem />
      <Solution />
      <Services />
      <Overseas />
      <Contact />
      <SiteFooter />

      {/* Mobile sticky CTA */}
      <a
        href="#contact"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-full bg-gold py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl shadow-gold/30 lg:hidden"
      >
        לתיאום שיחת ייעוץ אישית
      </a>
    </main>
  )
}
