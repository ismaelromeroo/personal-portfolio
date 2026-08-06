// ---------------------------------------------------------------------------
// Edit everything in this file to make the portfolio your own.
// Logos live in /public/logos. Swap the paths below to update them.
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string
  href: string
  /** Path to an icon in /public. */
  icon: string
}

export interface RoleItem {
  /** e.g. "Software Engineer Intern" */
  role: string
  /** e.g. "Company Name" */
  org: string
  /** optional trailing note, e.g. "AI Studio" */
  note?: string
  /** optional logo path in /public/logos */
  logo?: string
  /** optional external link */
  href?: string
}

export interface Project {
  title: string
  role: string
  year: string
  description: string
  /** Path to an image or video in /public. Leave blank to show a placeholder. */
  media: string
  /** Set to true if `media` points to a video file. */
  isVideo?: boolean
  href?: string
  /** Small label shown as a status pill, e.g. "In progress". */
  status?: string
}

export const profile = {
  name: "Ismael Romero",
  title: "Software Engineer",
  avatar: "/images/avatar.jpg",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ismaelromeroo", icon: "" },
    { label: "GitHub", href: "https://github.com/ismaelromeroo", icon: "/logos/github.png" },
    { label: "Instagram", href: "https://www.instagram.com/ismaaeel.md/", icon: "/logos/instagram.png" },
  ] as SocialLink[],
}

export const nowRoles: RoleItem[] = [
  {
    role: "B.S. Computer Science & Statistics — 3.93/4.0 GPA",
    org: "UNF",
    logo: "/logos/unf.webp",
  },
]

export const previousRoles: RoleItem[] = [
  {
    role: "Product Management Intern",
    org: "Stillwater Insurance",
    note: "Power BI · SAS",
    logo: "/logos/stillwater.webp",
  },
  {
    role: "Software Engineering Intern",
    org: "BlendedXR",
    note: "AR/XR Operator Console",
    logo: "/logos/blendedxr.webp",
  },
  {
    role: "AI Researcher",
    org: "Independent Research",
    note: "Medical AI benchmarking · in collaboration with Dr. Hoyt (NSU), D'Amario (NSU), and MIT · publication in progress",
    // Add the publication link here once it's published:
    // href: "https://...",
  },
]

// Selected engineering work. Swap `media`/`href` to update.
export const projects: Project[] = [
  {
    title: "FirstIn",
    role: "AI-Powered Patient Triage",
    year: "2026",
    description:
      "A voice-first intake agent that triages patient symptoms into a structured ESI (1–5) acuity score to cut ER wait times.",
    media: "/logos/firstin.jpg",
    href: "https://devpost.com/software/hackabull-h9rgxl",
  },
  {
    title: "Mitig8",
    role: "Dependency-Upgrade Risk MCP Server",
    year: "2026",
    description:
      "An MCP server that tells you what breaks if you upgrade a dependency, citing changelog evidence right in coding agent.",
    media: "/placeholder.svg?height=400&width=640",
    status: "In progress",
  },
]

export const contact = {
  prompt: "Want to build something together or just want to say hi?",
  email: "ism.romerr@gmail.com",
  phone: "904-927-6679",
}
