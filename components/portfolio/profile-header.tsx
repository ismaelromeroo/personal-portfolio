import Image from "next/image"
import { profile } from "@/lib/portfolio-data"

export function ProfileHeader() {
  return (
    <header className="flex items-center gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={profile.avatar || "/placeholder.svg"}
          alt={`${profile.name} portrait`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-sm text-muted-foreground">{profile.title}</p>

        <nav className="mt-1.5 flex items-center gap-2" aria-label="Social links">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-border bg-card/60 transition-colors hover:border-foreground/30"
            >
              <Image
                src={social.icon || "/placeholder.svg"}
                alt={`${social.label} icon`}
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
