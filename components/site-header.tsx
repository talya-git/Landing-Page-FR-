"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

const links = [
  { href: "#about", label: "Qui sommes-nous" },
  { href: "#problem", label: "Le défi" },
  { href: "#solution", label: "La solution" },
  { href: "#services", label: "Services" },
  { href: "#overseas", label: "Clients à l'étranger" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a href="#about" className="flex items-center gap-3">
          <img src="/media/logo.png" alt="Oren Cohen Group" className="h-11 w-11 rounded-full md:h-12 md:w-12" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-heading text-sm tracking-[0.25em] text-foreground">A-Z</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">OREN COHEN GROUP</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground md:px-5"
        >
          <Phone className="h-4 w-4" />
          <span>Consultation gratuite</span>
        </a>
      </div>
    </header>
  )
}
