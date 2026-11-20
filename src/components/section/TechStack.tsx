import FadeIn from "../animations/FadeIn";
import "../../styles/techstack.css";

const skillGroups = [
  {
    title: "AI Agents & RAG",
    skills: [
      "AI Agents",
      "Large Language Models (LLMs)",
      "RAG",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Claude",
      "Gemini",
      "Ollama",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "Flask", "REST APIs", "JSON"],
  },
  {
    title: "Automation & Integrations",
    skills: [
      "n8n",
      "Workflow Automation",
      "Webhooks",
      "API Integrations",
      "Zapier",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "SQLite", "SQLAlchemy"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    title: "Development & Deployment",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Render"],
  },
];

export default function TechStack() {
  return (
    <FadeIn delay={0.2}>
      <section className="tech-stack" id="tech" aria-labelledby="tech-title">
        <div className="tech-container">
          <div className="section-header tech-header">
            <span className="section-tag">TECH STACK</span>
            <h2 id="tech-title">Tech Stack</h2>
            <p>
              Tools I use to build AI agents, connect business workflows, and
              ship web applications.
            </p>
          </div>

          <div className="tech-grid">
            {skillGroups.map((group) => (
              <article className="tech-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tech-skills" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
