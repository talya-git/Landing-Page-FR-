export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <img src="/media/logo.png" alt="Oren Cohen Group" className="h-16 w-16 rounded-full" />
        <div>
          <p className="font-heading text-lg tracking-[0.2em] text-foreground">A-Z BY OREN COHEN GROUP</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Votre Family Office pour l'immobilier en Israël. 30 ans d'excellence en immobilier de luxe.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oren Cohen Group. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
