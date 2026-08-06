import { contact } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <footer className="flex flex-col items-center gap-3 py-6 text-center">
      <p className="text-sm text-muted-foreground">{contact.prompt}</p>
      <div className="flex flex-col items-center gap-1 text-sm font-medium text-foreground">
        <a
          href={`mailto:${contact.email}`}
          className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {contact.email}
        </a>
        <a
          href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
          className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {contact.phone}
        </a>
      </div>
    </footer>
  )
}
