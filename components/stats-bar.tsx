"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 31, suffix: "", label: "Années d'excellence en immobilier de luxe" },
  { value: 2000, suffix: "+", label: "Clients satisfaits en Israël et dans le monde" },
  { value: 30, suffix: "+", label: "Fournisseurs de premier plan en Israël" },
]

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])

  return value
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const count = useCountUp(value, run)
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-heading text-4xl font-bold tracking-tight tabular-nums text-gold-gradient sm:text-5xl md:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 max-w-[14rem] text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-card/40 py-14 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 sm:grid-cols-3 sm:gap-6 md:px-8"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="relative flex justify-center sm:[&:not(:last-child)]:after:absolute sm:[&:not(:last-child)]:after:-right-3 sm:[&:not(:last-child)]:after:top-1/2 sm:[&:not(:last-child)]:after:h-12 sm:[&:not(:last-child)]:after:w-px sm:[&:not(:last-child)]:after:-translate-y-1/2 sm:[&:not(:last-child)]:after:bg-border/70"
            style={run ? { animation: `count-in 0.6s ease ${i * 120}ms both` } : { opacity: 0 }}
          >
            <Stat value={s.value} suffix={s.suffix} label={s.label} run={run} />
          </div>
        ))}
      </div>
    </section>
  )
}
