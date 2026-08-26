import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { profile } from "@/lib/portfolio-data"

/** Tooltip shown above a social icon on hover. */
function IconTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-150 group-hover/icon:opacity-100">
      {label}
    </span>
  )
}

export function ProfileHeader() {
  return (
    <header className="flex items-center gap-2">
      <Reveal delay={100}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={256}
          height={256}
          className="block h-24 w-24 rounded-lg object-cover"
          style={{ objectPosition: "50% 38%" }}
          priority
        />
      </Reveal>

      <div className="flex flex-1 flex-col justify-center">
        <Reveal delay={100}>
          <h1 className="text-3xl font-medium text-foreground">{profile.name}</h1>
        </Reveal>
        <Reveal delay={110}>
          <p className="text-base text-muted-foreground">{profile.title}</p>
        </Reveal>

        <Reveal delay={120}>
          <nav className="mt-1.5 inline-flex items-center" aria-label="Social links">
            {profile.socials.map((social, index) => {
              const tilt = index % 2 === 0 ? "-rotate-6" : "rotate-6"
              const tiltClass = `${tilt} transition-transform duration-300 ease-out group-hover/icon:rotate-0`

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group/icon relative inline-block ${index > 0 ? "ml-1" : ""}`}
                >
                  {social.label === "LinkedIn" ? (
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#0A66C2] text-base font-semibold text-white ring-1 ring-white/20 ${tiltClass}`}
                    >
                      in
                    </span>
                  ) : social.icon ? (
                    <span
                      className={`block h-6 w-6 overflow-hidden rounded-lg ring-1 ring-white/20 ${
                        social.label === "GitHub" ? "bg-black" : ""
                      } ${tiltClass}`}
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={48}
                        height={48}
                        className={`h-full w-full object-cover ${
                          social.label === "GitHub" ? "rounded-full" : ""
                        }`}
                      />
                    </span>
                  ) : null}
                  <IconTooltip label={social.label} />
                </a>
              )
            })}
          </nav>
        </Reveal>
      </div>
    </header>
  )
}
