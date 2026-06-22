import { Reveal } from "@/components/reveal"
import { Phone, Mail } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

const CONTACTS = [
  {
    label: "WhatsApp",
    sub: "Réponse rapide et discrète",
    href: "https://wa.me/972545596052",
    icon: WhatsAppIcon,
  },
  {
    label: "Appelez-nous",
    sub: "+972-2-663-4070",
    href: "tel:+97226634070",
    icon: Phone,
  },
  {
    label: "Email",
    sub: "marketing@orencohengroup.com",
    href: "mailto:marketing@orencohengroup.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <img src="/media/a-z.png" alt="A-Z by Oren Cohen Group" className="mx-auto h-20 w-auto" />
          <h2 className="mt-7 font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            Parlez avec notre équipe A-Z dès aujourd'hui
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Que vous commenciez tout juste à explorer le marché immobilier de luxe à Jérusalem ou que vous travailliez déjà avec nous, choisissez le moyen le plus pratique pour nous contacter et nous serons ravis de vous accompagner.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group hover-lift flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-7 text-center shadow-lg backdrop-blur-sm hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold/10"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <c.icon className="h-7 w-7" />
                </span>
                <span className="flex flex-col">
                  <span className="font-heading text-lg font-semibold text-foreground">{c.label}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{c.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
