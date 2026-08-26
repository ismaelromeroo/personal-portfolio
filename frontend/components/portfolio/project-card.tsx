import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

export function ProjectCard({ project }: { project: Project }) {
  const { media } = project

  const content = (
    <article className="group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
        {!media ? (
          <div className="flex h-full w-full items-center justify-center bg-card">
            <span className="text-lg font-semibold tracking-tight text-muted-foreground">
              {project.title}
            </span>
          </div>
        ) : project.isVideo ? (
          <video
            className="h-full w-full object-cover"
            src={media}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={media}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-md object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        )}
        {project.status ? (
          <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex-1 pb-4 pt-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <h3 className="shrink-0 text-lg font-medium tracking-wide text-neutral-100">
            {project.title}
          </h3>
          {project.href ? (
            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-100" />
          ) : null}
          <span className="inline-flex shrink-0 items-center text-base tracking-wide text-[#9da0a3]">
            {`- ${project.role}`}
          </span>
          <span className="shrink-0 text-sm tracking-wide text-[#9da0a3] sm:ml-auto">
            {project.year}
          </span>
        </div>

        <p className="mt-1 text-pretty text-sm tracking-wide text-[#9da0a3]">
          {project.description}
        </p>
      </div>
    </article>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-md outline-none ring-offset-4 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </a>
    )
  }

  return content
}
