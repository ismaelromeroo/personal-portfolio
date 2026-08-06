import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

export function ProjectCard({ project }: { project: Project }) {
  const hasMedia = Boolean(project.media) && !project.media.startsWith("/placeholder.svg")

  const content = (
    <article className="group flex flex-col gap-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
        {project.isVideo ? (
          <video
            className="h-full w-full object-cover"
            src={project.media}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : hasMedia ? (
          <Image
            src={project.media || "/placeholder.svg"}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-card">
            <span className="text-lg font-semibold tracking-tight text-muted-foreground">
              {project.title}
            </span>
          </div>
        )}
        {project.status ? (
          <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex items-baseline justify-between gap-3">
        <h3 className="flex items-center gap-1 text-sm text-foreground">
          <span className="font-semibold">{project.title}</span>
          {project.href ? <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground" /> : null}
          <span className="text-muted-foreground">{` · ${project.role}`}</span>
        </h3>
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>

      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
    </article>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl outline-none ring-offset-4 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </a>
    )
  }

  return content
}
