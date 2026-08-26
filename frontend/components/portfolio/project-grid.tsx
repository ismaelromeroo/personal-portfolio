import { projects } from "@/lib/portfolio-data"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Reveal } from "@/components/ui/reveal"

export function ProjectGrid() {
  return (
    <section className="flex flex-col gap-6">
      <Reveal delay={400}>
        <div>
          <h2 className="text-3xl font-medium text-white/90">Engineering</h2>
          <p className="text-base text-[#9da0a3]">Things I&apos;ve built and shipped.</p>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
