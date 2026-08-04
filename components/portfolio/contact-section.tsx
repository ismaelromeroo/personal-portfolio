import { contact } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <footer className="flex flex-col items-center gap-3 py-6 text-center">
      <p className="text-sm text-muted-foreground">{contact.prompt}</p>
      <a
        href={`mailto:${contact.email}`}
        className="text-sm font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
      >
        {contact.ctaLabel} &rarr;
      </a>
    </footer>
  )
}
