import { Reveal } from "@/components/reveal"
import { Users, HelpCircle, Languages, ShieldAlert, MapPin, Briefcase } from "lucide-react"

const pains = [
  { icon: ShieldAlert, text: "Réglementations locales complexes difficiles à décrypter depuis l'étranger" },
  { icon: Users, text: "Coordination de nombreux professionnels qui ne parlent pas votre langue" },
  { icon: Languages, text: "Barrières linguistiques et différences culturelles dans les affaires" },
  { icon: HelpCircle, text: "Incertitude quant à la fiabilité des professionnels locaux" },
  { icon: MapPin, text: "Prendre des décisions critiques à des milliers de kilomètres" },
  { icon: Briefcase, text: "Le fardeau d'être votre propre « chef de projet » à distance" },
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            Le Défi
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            Acheter un bien de luxe à Jérusalem ne ressemble à aucun autre achat.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            La combinaison de réglementations locales complexes et des défis uniques auxquels font face les acheteurs étrangers crée un paysage qui exige une expertise approfondie et un accompagnement de confiance. C'est pourquoi vous avez besoin de la bonne personne au bon endroit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-border/70 bg-background/60 p-6 transition-colors hover:border-gold/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="pt-1.5 leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <p className="font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            Quelqu'un en qui vous pouvez avoir confiance — expérimenté et profondément enraciné dans cette ville.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
