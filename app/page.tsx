import { DiagonalLines } from "@/components/ui/diagonal-lines"
import { ProfileHeader } from "@/components/portfolio/profile-header"
import { ExperienceList } from "@/components/portfolio/experience-list"
import { ProjectGrid } from "@/components/portfolio/project-grid"
import { ContactSection } from "@/components/portfolio/contact-section"
import { nowRoles, previousRoles } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col px-4 pb-16">
        <div className="relative flex flex-col pt-10 md:pt-20 lg:pt-32">
          {/* Curved-line background scoped to the top section's own height */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
          >
            <div className="flex h-full w-full items-center justify-center">
              <DiagonalLines />
            </div>
          </div>

          <ProfileHeader />
          <ExperienceList label="Now" roles={nowRoles} revealDelay={140} />
          <ExperienceList label="Previously" roles={previousRoles} revealDelay={190} />
        </div>

        <div className="pt-12">
          <ProjectGrid />
        </div>

        <div className="pt-16">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
