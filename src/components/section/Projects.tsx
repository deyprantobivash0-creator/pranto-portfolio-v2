import FadeIn from "../animations/FadeIn";
import "../../styles/projects.css";

const projects = [
  {
    name: "SupportPilot AI",
    description:
      "A customer support workspace with ticket management, AI reply suggestions, customer context, and analytics.",
    image: "/images/projects/supportpilot-ai.webp",
    alt: "Illustration of a support inbox with a reply draft and customer context",
  },
  {
    name: "Agency Planner",
    description:
      "An internal planning workspace for business strategy, go-to-market timelines, and cost calculations.",
    image: "/images/projects/agency-planner.webp",
    alt: "Illustration of a planning timeline, cost chart, and grouped strategy cards",
  },
  {
    name: "CargoMind AI",
    description:
      "A freight forwarding assistant for shipment tracking, quotation generation, and logistics workflows.",
    image: "/images/projects/cargomind-ai.webp",
    alt: "Illustration of a shipment route, tracking steps, and quotation panel",
  },
];

export default function Projects() {
  return (
    <FadeIn delay={0.15}>
      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-container">
          <div className="section-header projects-header">
            <span className="section-tag">PROJECTS</span>
            <h2 id="projects-title">Selected Projects</h2>
            <p>AI tools for sales, support, planning, and logistics.</p>
          </div>

          <div className="projects-list">
            <article className="project-card project-featured">
              <div className="project-featured-copy">
                <span className="project-label">Signature project</span>
                <h3>LeadForge Engine</h3>
                <p className="project-featured-description">
                  An AI SDR platform for B2B outbound, built to help sales teams
                  organize and research prospects in one workspace.
                </p>
                <p className="project-evidence">
                  V1 staging passed all six smoke checks, covering login,
                  dashboard access, lead browsing and search, session refresh,
                  and logout.
                </p>
                <a
                  className="project-cta"
                  href="https://leadforge-web-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View product website <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="project-featured-art">
                <img
                  src="/images/projects/leadforge-engine.webp"
                  alt="Illustration of a prospect list and selected lead profile in a sales workspace"
                  width="1280"
                  height="800"
                />
              </div>
            </article>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card project-secondary" key={project.name}>
                  <div className="project-art">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width="960"
                      height="600"
                      loading="lazy"
                    />
                  </div>
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
