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
  /** Replace with your avatar, e.g. "/images/avatar.png" after adding it to /public. */
  avatar: "/placeholder.svg?height=128&width=128",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ismaelromeroo", icon: "/logos/linkedin.jpg" },
    { label: "GitHub", href: "https://github.com/ismaelromeroo", icon: "/logos/github.webp" },
    { label: "Instagram", href: "https://instagram.com", icon: "/logos/instagram.webp" },
  ] as SocialLink[],
}

export const nowRoles: RoleItem[] = [
  {
    role: "B.S. Computer Science & Statistics",
    org: "University of North Florida",
    note: "3.93/4.0 GPA",
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
    note: "Medical AI benchmarking · publication in progress",
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
      "A voice-first intake agent (ElevenLabs) that captures symptoms into structured triage fields, with a Gemini pipeline assigning each patient an ESI (1–5) acuity score to cut ER wait times. Patient and admin dashboards built on Supabase.",
    media: "/logos/firstin.jpg",
    href: "https://devpost.com/software/hackabull-h9rgxl",
  },
  {
    title: "Mitig8",
    role: "Dependency-Upgrade Risk MCP Server",
    year: "2026",
    description:
      "An MCP server that answers \u201Cwhat breaks if I upgrade this dependency,\u201D citing changelog evidence in Claude Code. Built on a hybrid retrieval layer (dense + BM25 + RRF) for citation-grounded migration risk analysis.",
    media: "/placeholder.svg?height=400&width=640",
    status: "In progress",
  },
]

export const contact = {
  prompt: "Want to build something together or just want to say hi?",
  ctaLabel: "Let's chat",
  email: "ism.romerr@gmail.com",
}
