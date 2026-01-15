import {
  Hero,
  About,
  TechStack,
  Experience,
  Projects,
  Publications,
  Contact,
  Navigation,
  Footer,
} from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-5 pb-20">
          {/* About Section with Grid */}
          <section id="about" className="py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <About />
              <TechStack />
              <Experience />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects-section" className="py-10">
            <Projects />
          </section>

          {/* Publications Section */}
          <section id="publications" className="py-10">
            <Publications />
          </section>

          {/* Contact Section */}
          <section className="py-10">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
