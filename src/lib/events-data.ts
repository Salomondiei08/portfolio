export type PortfolioEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  organizer: string;
  href: string;
  tags: string[];
  attendees?: number;
};

export const events: PortfolioEvent[] = [
  {
    id: "general-catalyst-proximal-dinner",
    title: "General Catalyst × Proximal ICML Dinner",
    date: "2026-07-08",
    time: "6:30 PM",
    location: "T.A.K., Gangnam, Seoul",
    description: "An intimate dinner bringing researchers and engineers together during ICML week at T.A.K., a modern Korean restaurant led by Chef Oh Jun-tak.",
    organizer: "General Catalyst & Proximal",
    href: "https://luma.com/y1i0ohtp",
    tags: ["ICML 2026", "Networking", "Dinner"],
  },
  {
    id: "ai-x-education",
    title: "ICML 2026: AI × Education",
    date: "2026-07-08",
    time: "7:00 – 10:00 PM",
    location: "Seoul",
    description: "A gathering for researchers, builders, and educators working on practical and research-level questions around AI applications in education.",
    organizer: "Sungman Cho & Goobong Jeong",
    href: "https://luma.com/61aacz14",
    tags: ["ICML 2026", "AI", "Education"],
  },
  {
    id: "icml-pilates-brunch",
    title: "ICML Pilates + Brunch",
    date: "2026-07-09",
    time: "7:30 – 11:00 AM",
    location: "KSTET, Seoul",
    description: "An early morning mat Pilates session followed by brunch — a fitness and social gathering for the ICML crowd.",
    organizer: "Michael Chang (OpenAI)",
    href: "https://partiful.com/e/yrCrHdhhUllizQgewtRY",
    tags: ["ICML 2026", "Social", "Wellness"],
  },
  {
    id: "ml2-networking-lunch",
    title: "ICML 2026 Networking Lunch @ ML2",
    date: "2026-07-09",
    location: "Seoul",
    description: "A casual lunch gathering for researchers, engineers, and friends from the ICML community, hosted by the Machine Learning Lab.",
    organizer: "ML2 (Machine Learning Lab)",
    href: "https://luma.com/jgjhzhly",
    tags: ["ICML 2026", "Networking", "Lunch"],
  },
  {
    id: "cantina-labs-cocktail",
    title: "Cantina Labs @ ICML 2026 Cocktail Evening",
    date: "2026-07-09",
    location: "Private venue, Seoul",
    description: "A private networking event for researchers, founders, and builders shaping the future of video generation, multimodal AI, and interactive media.",
    organizer: "Cantina Labs",
    href: "https://luma.com/2kzz8fox",
    tags: ["ICML 2026", "AI", "Networking"],
  },
  {
    id: "vetto-kbbq",
    title: "Cold Drinks & SOTA Korean BBQ @ ICML",
    date: "2026-07-09",
    location: "Seoul",
    description: "A private dinner featuring Korean barbecue and cold drinks — nothing like great food and good company to close out busy conference days.",
    organizer: "Vetto AI",
    href: "https://luma.com/7h1uxi6i",
    tags: ["ICML 2026", "Social", "Dinner"],
  },
  {
    id: "saturday-robotics-lunch",
    title: "Saturday Robotics × ICML Private Lunch",
    date: "2026-07-09",
    location: "Seoul",
    description: "An exclusive lunch for researchers, founders, engineers, and investors building the future of robotics, world models, embodied AI, and foundation models.",
    organizer: "Saturday Robotics",
    href: "https://luma.com/khqg11gt",
    tags: ["ICML 2026", "Robotics", "Networking"],
  },
  {
    id: "taigr-afterparty",
    title: "TAIGR 2026 Workshop Afterparty",
    date: "2026-07-10",
    location: "Seoul",
    description: "A drinks reception hosted by the Technical AI Governance Research group, for networking with Technical AI Governance enthusiasts after ICML.",
    organizer: "TAIG @ ICML",
    href: "https://luma.com/1wiotk0y",
    tags: ["ICML 2026", "AI Governance", "Networking"],
  },
  {
    id: "ai4science-afterparty",
    title: "AI4Science @ ICML Afterparty",
    date: "2026-07-10",
    location: "Seoul",
    description: "A casual gathering for the AI4Science crowd — drinks and food with people who think ML can change how science gets done.",
    organizer: "AI for Science Workshop @ ICML 2026",
    href: "https://luma.com/0kkypzso",
    tags: ["ICML 2026", "AI for Science", "Social"],
    attendees: 471,
  },
  {
    id: "gdg-deepmind-meetup",
    title: "Google DeepMind Research × GDG AI for Science Meetup",
    date: "2026-07-11",
    time: "1:00 – 5:00 PM",
    location: "Google Korea Office, Gangnam Finance Center, Seoul",
    description: "A meetup exploring AI's contributions to scientific research, featuring sessions on AI in the human era, research acceleration, and multimodal foundation models.",
    organizer: "GDG AI for Science – Korea",
    href: "https://gdg.community.dev/events/details/google-gdg-ai-for-science-korea-presents-google-deepmind-research-x-gdg-ai-for-science-meetup-1/",
    tags: ["DeepMind", "AI for Science", "Google"],
  },
];
