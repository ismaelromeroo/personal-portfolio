import { DiagonalLines } from "@/components/ui/diagonal-lines"
import { ProfileHeader } from "@/components/portfolio/profile-header"
import { ExperienceList } from "@/components/portfolio/experience-list"
import { ProjectGrid } from "@/components/portfolio/project-grid"
import { ContactSection } from "@/components/portfolio/contact-section"
import { nowRoles, previousRoles } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col px-4 pt-10 pb-16 md:pt-20 lg:pt-32">
        <div className="relative flex flex-col">
          {/* Curved-line background scoped to the top section; fades out toward its bottom edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2 md:-top-20 lg:-top-32"
            style={{
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          >
            <DiagonalLines />
          </div>

          <ProfileHeader />
          <ExperienceList label="Now" roles={nowRoles} />
          <ExperienceList label="Previously" roles={previousRoles} />
        </div>

        <div className="pt-24">
          <ProjectGrid />
        </div>

        <div className="pt-16">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
