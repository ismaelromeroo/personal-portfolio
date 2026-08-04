import { BackgroundPaths } from "@/components/ui/background-paths"
import { ProfileHeader } from "@/components/portfolio/profile-header"
import { ExperienceList } from "@/components/portfolio/experience-list"
import { ProjectGrid } from "@/components/portfolio/project-grid"
import { ContactSection } from "@/components/portfolio/contact-section"
import { nowRoles, previousRoles } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Fixed animated flowing-line background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <BackgroundPaths />
      </div>
      {/* Subtle vignette so foreground text stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-14 px-6 py-16 md:py-24">
        <div className="flex flex-col gap-10">
          <ProfileHeader />
          <ExperienceList label="Now" roles={nowRoles} />
          <ExperienceList label="Previously" roles={previousRoles} />
        </div>

        <ProjectGrid />

        <ContactSection />
      </div>
    </main>
  )
}
