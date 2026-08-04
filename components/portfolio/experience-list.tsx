import Image from "next/image"
import type { RoleItem } from "@/lib/portfolio-data"

interface ExperienceListProps {
  label: string
  roles: RoleItem[]
}

function RoleRow({ role }: { role: RoleItem }) {
  const inner = (
    <>
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-border bg-card">
        {role.logo ? (
          <Image
            src={role.logo || "/placeholder.svg"}
            alt={`${role.org} logo`}
            fill
            sizes="32px"
            className="object-contain p-0.5"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground"
          >
            {role.org.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-pretty">
        {role.role}
        {" — "}
        <span className="font-medium text-foreground">{role.org}</span>
        {role.note ? <span className="text-muted-foreground">{` · ${role.note}`}</span> : null}
      </span>
    </>
  )

  const className =
    "flex items-center gap-3 text-sm text-foreground/90 transition-colors"

  if (role.href) {
    return (
      <a
        href={role.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} rounded-md hover:text-foreground`}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export function ExperienceList({ label, roles }: ExperienceListProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {roles.map((role, index) => (
          <li key={`${role.role}-${index}`}>
            <RoleRow role={role} />
          </li>
        ))}
      </ul>
    </section>
  )
}
