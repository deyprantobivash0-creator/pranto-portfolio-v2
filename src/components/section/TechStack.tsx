import FadeIn from "../animations/FadeIn";
import "../../styles/techstack.css";
export default function TechStack() {
  return (
    <FadeIn delay={0.2}>
    <section className="tech-stack" id="tech">

<div className="tech-container">

<div className="section-header">

<span className="section-tag">

TECH STACK

</span>

<h2>

Technologies I Use

<span>

To Build AI Systems

</span>

</h2>

<p>

A modern toolkit for designing, developing, and deploying production-ready AI automation systems.

</p>

</div>

<div className="tech-grid">

<div className="tech-card glass">

<h3>AI</h3>

<div className="tech-badges">

<span>OpenAI</span>

<span>Google Gemini</span>

<span>LLMs</span>

<span>Prompt Engineering</span>

<span>AI Agents</span>

</div>

</div>

<div className="tech-card glass backend-card">

<h3>Backend</h3>

<div className="tech-badges">

<span>Python</span>

<span>Flask</span>

<span>REST API</span>

<span>JSON</span>

<span>SQLite</span>

<span>PostgreSQL</span>

</div>

</div>

<div className="tech-card glass">

<h3>Frontend</h3>

<div className="tech-badges">

<span>React</span>

<span>TypeScript</span>

<span>HTML5</span>

<span>CSS3</span>

<span>JavaScript</span>

</div>

</div>

<div className="tech-card glass">

<h3>Tools</h3>

<div className="tech-badges">

<span>Git</span>

<span>GitHub</span>

<span>VS Code</span>

<span>Vercel</span>

<span>Render</span>

</div>

</div>

</div>

</div>

</section>
</FadeIn>
  );
}