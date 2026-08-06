import Image from "next/image"
import { CornerDownRight } from "lucide-react"
import type { RoleItem } from "@/lib/portfolio-data"

interface ExperienceListProps {
  label: string
  roles: RoleItem[]
}

function RoleRow({ role }: { role: RoleItem }) {
  const inner = (
    <>
      <CornerDownRight aria-hidden="true" className="mr-2 h-4 w-4 shrink-0 text-[#75787b]" />
      <span className="text-pretty leading-6 text-[#9da0a3]">
        {role.role}
        {role.logo ? (
          <Image
            src={role.logo}
            alt={`${role.org} logo`}
            width={14}
            height={14}
            className="mx-0.5 ml-1.5 inline-block h-3.5 w-3.5 rounded-sm object-cover align-[-2px]"
          />
        ) : null}{" "}
        <span className="text-neutral-200">{role.org}</span>
        {role.note ? <span className="ml-1.5">{`- ${role.note}`}</span> : null}
      </span>
    </>
  )

  const className = "flex items-center text-base transition-colors"

  if (role.href) {
    return (
      <a
        href={role.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:text-foreground`}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export function ExperienceList({ label, roles }: ExperienceListProps) {
  return (
    <section className="pt-4">
      <h2 className="text-base font-normal uppercase text-neutral-200">{label}</h2>
      <ul className="flex flex-col">
        {roles.map((role, index) => (
          <li key={`${role.role}-${index}`}>
            <RoleRow role={role} />
          </li>
        ))}
      </ul>
    </section>
  )
}
