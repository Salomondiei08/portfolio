import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Salomon Diei | AI Engineer, KOREATECH Student, CTO at Sikili",
  description: "Salomon Diei is an AI Engineer and researcher at Korea University of Technology and Education (KOREATECH), CTO at Sikili. GKS Scholar, Google Cloud Certified, winner of Gorange 5G Hackathon. Experienced in Flutter, Python, FastAPI, Machine Learning. Based in Cheonan, South Korea.",
  keywords: [
    "Salomon Diei biography",
    "KOREATECH AI student",
    "Sikili CTO",
    "GKS scholarship recipient",
    "Korean Government Scholarship",
    "AI engineer South Korea",
    "Cheonan software developer",
    "Institut Ivoirien de Technologie alumni",
    "Google Cloud Certified engineer",
    "Flutter mobile developer",
    "Gorange 5G hackathon winner",
    "Ivorian tech entrepreneur",
    "Futurafric technical lead",
  ],
};

const experience = [
  {
    role: "Research Assistant",
    company: "Korea University of Technology and Education (KOREATECH)",
    period: "Sep 2024 - Present",
    description:
      "Conducting research in artificial intelligence and machine learning. Focus on deep learning algorithms, computer vision, and natural language processing. Contributing to academic publications and collaborative research projects.",
    highlights: ["AI Research", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    role: "Technical Lead (Fullstack)",
    company: "Freelance",
    period: "Jun 2023 - Aug 2024",
    description:
      "Led development of multiple web and mobile applications for clients. Architected scalable solutions using modern frameworks and cloud infrastructure. Managed end-to-end project delivery from requirements to deployment.",
    highlights: ["Project Management", "Full-Stack Development", "Cloud Architecture", "Client Relations"],
  },
  {
    role: "Flutter Developer",
    company: "Freelance",
    period: "Feb 2023 - Jun 2023",
    description:
      "Developed cross-platform mobile applications for iOS and Android. Implemented modern UI/UX designs, integrated REST APIs, and optimized app performance. Delivered multiple successful projects with high client satisfaction.",
    highlights: ["Flutter", "Mobile Development", "API Integration", "UI/UX Design"],
  },
];

const education = [
  {
    degree: "M.S. Artificial Intelligence",
    school: "Korea University of Technology and Education (KOREATECH)",
    year: "Sep 2024 - Present",
    focus: "AI & Machine Learning Research",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Institut Ivoirien de Technologie",
    year: "Sep 2020 - Jun 2023",
    focus: "Software Development & Computer Science",
  },
];

const certifications = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
];

const awards = [
  "GKS (Korean Government Scholarship) Recipient - 2024",
  "1st Place - Gorange 5G Hackathon - 2022",
  "Top 10 - GDG DevFest Hackathon - 2022",
  "1st Place - Djamo x Epitech Hackathon - 2022",
  "10,000 Codeurs Ambassador - 2021",
];

const skills = {
  languages: ["Python", "Dart", "JavaScript", "TypeScript", "Java", "C#", "SQL"],
  frameworks: ["Flutter", "FastAPI", "Vue.js", "Express.js", ".NET"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Docker", "Terraform", "GCP", "Git"],
  areas: ["Mobile Development", "AI/ML", "Backend Development", "Cloud Architecture"],
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/20 shrink-0">
            <Image
              src="/images/salomon.JPG"
              alt="Salomon Diei"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Salomon Diei</h1>
            <p className="text-lg text-primary">AI Engineer & Researcher</p>
            <p className="text-muted-foreground mt-2">
              Cheonan-si, South Korea
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m an AI engineer and researcher currently pursuing my Master&apos;s degree in
            Artificial Intelligence at Korea University of Technology and Education (KOREATECH),
            supported by the prestigious Korean Government Scholarship (GKS).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As CTO at Sikili, I lead technical strategy while balancing my academic research in AI
            and machine learning. My background spans fullstack development, mobile apps with Flutter,
            and cloud architecture as a Google Cloud Certified Associate Cloud Engineer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m passionate about building innovative solutions that make a real impact.
            My hackathon wins and industry experience drive me to constantly push boundaries
            and explore new technologies.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="flex gap-4">
          <Button asChild>
            <a href="mailto:salomondiei08@gmail.com">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="/Salomon_Academic_Resume.pdf"
              download="Salomon_Diei_Resume.pdf"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Experience
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          {experience.map((job, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((highlight, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Education
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-5">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-primary text-sm">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground">{edu.focus}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">03.</span>
          Certifications
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">GCP</span>
                </div>
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">04.</span>
          Awards & Recognition
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{award}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">05.</span>
          Skills & Technologies
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6 space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm text-muted-foreground capitalize mb-2">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Connect */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">06.</span>
          Connect
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:salomondiei08@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">@</span>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">salomondiei08@gmail.com</p>
                </div>
              </a>
              <a
                href="https://github.com/salomondiei08"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">GH</span>
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">@salomondiei08</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/salomondiei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">IN</span>
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">in/salomondiei</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">📍</span>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">South Korea</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
