import { Reveal } from "@/components/reveal"


export function About() {
  return (
    <section id="about" className="relative border-b border-border/50 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Photo */}
        <Reveal className="order-2 md:order-2">
          <div className="group relative mx-auto max-w-sm" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
            <div className="absolute -inset-3 rounded-2xl border border-gold/25" />
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-gold/40 via-transparent to-gold/10 opacity-60 blur-[2px]" />
            <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 gold-glow" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/media/oren.jpeg"
                alt="Oren Cohen, Fondateur du Oren Cohen Group"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold/15 via-transparent to-transparent mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-5 right-1/2 translate-x-1/2 rounded-full border border-gold/30 bg-background px-6 py-2.5 text-center shadow-lg">
              <p className="font-heading text-sm text-foreground">Oren Cohen</p>
              <p className="text-[11px] tracking-[0.2em] text-gold">FONDATEUR</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="order-1 md:order-1" delay={120}>
          <span className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            Qui sommes-nous
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            Acheter un appartement n'est pas qu'une transaction - c'est un voyage profondément personnel.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Chez Oren Cohen Group, nous considérons l'acquisition immobilière comme un parcours personnel et nous nous engageons à vous offrir une expérience fluide et professionnelle à chaque étape - pour que vous vous sentiez en confiance et serein. De la planification financière initiale aux considérations juridiques, jusqu'à la concrétisation de votre vision.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ayant accompagné des milliers d'acquéreurs issus des communautés juives du monde entier et d'Israël au cours des trois dernières décennies, nous avons acquis une expérience qui nous permet de rendre le processus d'achat professionnel et agréable, vous menant à votre pendaison de crémaillère avec le sourire.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

