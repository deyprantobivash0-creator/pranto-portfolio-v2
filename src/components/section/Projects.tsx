import FadeIn from "../animations/FadeIn";
import "../../styles/projects.css";
export default function Projects() {
  return (
    <FadeIn delay={0.15}>
<section className="projects" id="projects">

<div className="projects-container">

<div className="section-header">

<span className="section-tag">

PROJECTS

</span>

<h2>

Featured AI Systems

<span>

Built for Real Business Problems

</span>

</h2>

<p>

A selection of production-ready AI applications focused on automation, customer experience, lead generation, and business operations.

</p>

</div>

<div className="projects-grid">

<div className="project-card featured glass">

<div className="project-label">

FEATURED PROJECT

</div>

<div className="project-image-placeholder">
    Coming Soon
</div>

<h3>

<div className="project-status completed">
    Production Ready
</div>

SupportPilot AI


</h3>

<p>

An AI-powered CRM and customer support platform with ticket management, AI reply generation, customer memory, analytics dashboard, and business automation.

</p>

<div className="tech-list">

<span>Python</span>

<span>Flask</span>

<span>Gemini API</span>

<span>JavaScript</span>

<span>HTML</span>

<span>CSS</span>

</div>

<div className="project-buttons">

<a href="https://github.com/deyprantobivash0-creator" target="_blank">

GitHub

</a>

<a href="#contact">

Case Study

</a>

</div>

</div>

<div className="project-card">

  <div className="project-image-placeholder">
    Coming Soon
</div>

<h3>
  <div className="project-status completed">
    Completed
</div>

CargoMind AI

</h3>

<p>

Freight forwarding AI assistant for shipment tracking, quotation generation, and logistics workflow automation.

</p>

</div>

<div className="project-card">

<div className="project-image-placeholder">
    Coming Soon
</div>

<h3>

<div className="project-status completed">
    Completed
</div>

LeadFlow AI

</h3>

<p>

AI-powered lead generation system with automated prospect research and personalized outreach.

</p>

</div>

<div className="project-card">

  <div className="project-image-placeholder">
    Coming Soon
</div>

<h3>

<div className="project-status completed">
    Completed
</div>

ResumePilot AI

</h3>

<p>

Professional resume optimization platform using AI to improve ATS score and hiring success.

</p>

</div>

<div className="project-card">

  <div className="project-image-placeholder">
    Coming Soon
</div>

<h3>

<div className="project-status progress">
    In Development
</div>

AgencyPlanner AI

</h3>

<p>

Internal AI operating system for Planning Business, GTM strategy & cost calculation.

</p>

</div>

</div>

</div>

</section>
</FadeIn>
  );
}