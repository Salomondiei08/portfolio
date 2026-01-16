import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Research | Salomon Diei - AI Engineer Portfolio",
  description: "AI and machine learning research at Korea University of Technology and Education.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="text-muted-foreground max-w-2xl">
          Currently pursuing a Master&apos;s degree in Artificial Intelligence at Korea University
          of Technology and Education (KOREATECH), supported by the Korean Government Scholarship (GKS).
        </p>
      </div>

      {/* Current Status */}
      <Card className="bg-gradient-to-br from-primary/10 via-card to-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">AI</span>
            </div>
            <div>
              <Badge className="mb-2">In Progress</Badge>
              <h2 className="text-xl font-semibold">M.S. in Artificial Intelligence</h2>
              <p className="text-primary">Korea University of Technology and Education</p>
              <p className="text-sm text-muted-foreground mt-2">
                2024 - Present | Cheonan-si, South Korea
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Interests */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Research Interests
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring supervised and unsupervised learning techniques,
                  with focus on practical applications in mobile and web platforms.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Natural Language Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Building intelligent conversational systems and text analysis tools,
                  including GPT-powered applications like Helper AI.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Computer Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Image recognition and processing applications for mobile platforms,
                  including 360-degree virtual tour technologies.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">AI-Powered Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Integrating AI/ML capabilities into production applications,
                  including recommendation systems and intelligent matching.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Applied Research */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Applied Research Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">AI-Powered Service Matching</h3>
                  <p className="text-primary text-sm">Alladjai Project</p>
                </div>
                <Badge variant="secondary">MTN MoMo Hackathon Winner</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Developed intelligent algorithms for matching users with service providers
                based on location, availability, ratings, and user preferences. The system
                optimizes for both user satisfaction and provider efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Recommendation Systems</Badge>
                <Badge variant="secondary" className="text-xs">Matching Algorithms</Badge>
                <Badge variant="secondary" className="text-xs">Mobile AI</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">Conversational AI Assistant</h3>
                  <p className="text-primary text-sm">Helper AI Project</p>
                </div>
                <Badge variant="secondary">GPT-4 Integration</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Built an intelligent chatbot application leveraging GPT-4 for natural
                language understanding and generation. Features include context-aware
                responses, multi-turn conversations, and multi-language support.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">LLMs</Badge>
                <Badge variant="secondary" className="text-xs">NLP</Badge>
                <Badge variant="secondary" className="text-xs">Flutter</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">360° Virtual Tourism</h3>
                  <p className="text-primary text-sm">TourCI Project</p>
                </div>
                <Badge variant="secondary">Computer Vision</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Implemented immersive 360-degree virtual tour experiences for cultural
                and tourism applications. Combines computer vision techniques with
                interactive mobile interfaces for seamless exploration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">360° Imaging</Badge>
                <Badge variant="secondary" className="text-xs">Interactive Media</Badge>
                <Badge variant="secondary" className="text-xs">Tourism Tech</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Academic Background */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">03.</span>
          Academic Background
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="bg-card border-border">
            <CardContent className="p-5">
              <Badge className="mb-2">Current</Badge>
              <h3 className="font-semibold">M.S. Artificial Intelligence</h3>
              <p className="text-primary text-sm">KOREATECH</p>
              <p className="text-sm text-muted-foreground mt-2">
                GKS Scholarship Recipient
              </p>
              <p className="text-xs text-muted-foreground">2024 - Present</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-5">
              <Badge variant="secondary" className="mb-2">Completed</Badge>
              <h3 className="font-semibold">B.S. Software Engineering</h3>
              <p className="text-primary text-sm">Institut Ivoirien de Technologie</p>
              <p className="text-sm text-muted-foreground mt-2">
                Côte d&apos;Ivoire
              </p>
              <p className="text-xs text-muted-foreground">2020 - 2023</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Research */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Future Research Directions</h3>
          <p className="text-sm text-muted-foreground">
            As I continue my Master&apos;s studies, I aim to contribute to research in:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Mobile-first AI applications for emerging markets
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Efficient ML models for resource-constrained environments
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              AI-powered solutions for African technology ecosystems
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Cross-platform intelligent applications
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
