import { projects } from "@/lib/portfolio-data"
import { ProjectCard } from "@/components/portfolio/project-card"

export function ProjectGrid() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Engineering
        </h2>
        <p className="text-sm text-muted-foreground">Things I&apos;ve built and shipped.</p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
