/**
 * Profile facts shared by the home, research and about pages.
 * Keeping them here means a role change or new award is edited once.
 */

export type ContactLink = {
  label: string;
  href: string;
  /** Text shown next to the label on the about page */
  handle: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:salomondiei08@gmail.com", handle: "salomondiei08@gmail.com", external: false },
  { label: "GitHub", href: "https://github.com/salomondiei08", handle: "salomondiei08", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/salomondiei", handle: "in/salomondiei", external: true },
];

export const resumeHref = "/Salomon_Academic_Resume.pdf";

export type NowItem = {
  role: string;
  place: string;
  detail: string;
};

export const nowItems: NowItem[] = [
  {
    role: "Assistant Researcher",
    place: "KOREATECH, DICE Lab",
    detail: "Memory systems for AI agents, with Prof. Oh Heung Son.",
  },
  {
    role: "M.S. Artificial Intelligence",
    place: "KOREATECH",
    detail: "GKS scholar, Sep 2024 to present.",
  },
  {
    role: "CTO",
    place: "Sikili",
    detail: "Agentic automation and internal tools. Seed $800K, $0 to $200K ARR in year one.",
  },
];

export type ResearchInterest = {
  title: string;
  description: string;
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Agent memory",
    description:
      "Persistent memory layers that let an agent retain context, recall past episodes, and apply what it learned to new situations instead of starting from scratch.",
  },
  {
    title: "Continual self-improvement",
    description:
      "Feedback loops in which agents evaluate their own outputs, notice recurring failure patterns, and change their behaviour over time without a human in the loop.",
  },
  {
    title: "Agent efficiency",
    description:
      "Lower latency, better tool use and better decisions, so that long-horizon tasks finish reliably and with fewer failures.",
  },
  {
    title: "Autonomous research agents",
    description:
      "Agents that propose hypotheses, run experiments, evaluate results and write up what they found, with minimal human supervision.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "CTO and Supply Manager",
    company: "Sikili",
    period: "2024 to now",
    location: "Remote",
    description:
      "Early team member at a seed-stage startup ($800K raised). Designed and deployed the internal tools and automation systems behind growth from $0 to $200K ARR in the first year.",
  },
  {
    role: "Software Engineer",
    company: "BUI Corporation",
    period: "2024",
    location: "Côte d'Ivoire",
    description:
      "Mobile and backend development with cross-functional teams on a shared, scalable architecture.",
  },
  {
    role: "Technical Lead, Mobile",
    company: "Futurafric IA",
    period: "2023 to 2024",
    location: "Côte d'Ivoire",
    description:
      "Led the mobile team end to end, from UI design to release, and set the team's cross-platform engineering practices in Flutter.",
  },
  {
    role: "Software Engineer",
    company: "Casys Technologies",
    period: "2021 to 2022",
    location: "Côte d'Ivoire",
    description:
      "Built a CLI that automates smart card encoding with JavaCard and Batch, making the process three times faster.",
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  note: string;
};

export const education: Education[] = [
  {
    degree: "M.S. Artificial Intelligence",
    school: "Korea University of Technology and Education (KOREATECH)",
    period: "2024 to now",
    note: "DICE Lab. Global Korea Scholarship.",
  },
  {
    degree: "B.Eng. Software Engineering",
    school: "Institut Ivoirien de Technologie",
    period: "2020 to 2023",
    note: "Software development and computer science.",
  },
];

export type Award = {
  year: string;
  title: string;
};

export const awards: Award[] = [
  { year: "2024", title: "Global Korea Scholarship (GKS)" },
  { year: "2023", title: "Google Cloud Certified Associate Cloud Engineer" },
  { year: "2023", title: "1st Runner Up, Best Overall App, Supabase Flutter Hackathon" },
  { year: "2023", title: "1st Prize, INPHB Freelance Hackathon" },
  { year: "2022", title: "1st Prize, Orange CI 5G Challenge" },
  { year: "2021", title: "10,000 Codeurs Ambassador" },
];

export const languages = ["French", "English", "Korean"];
