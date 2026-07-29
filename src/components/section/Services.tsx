import FadeIn from "../animations/FadeIn";
import "../../styles/services.css";
export default function Services() {
  return (
    <FadeIn delay={0.1}>
   <section className="services" id="services">

<div className="services-container">

<div className="section-header">

<span className="section-tag">

SERVICES

</span>

<h2>

AI Solutions Built

<span>

For Modern Businesses

</span>

</h2>

<p>

From intelligent AI agents to complete business automation systems, I build scalable solutions that reduce manual work, improve customer experience, and accelerate business growth.

</p>

</div>

<div className="services-grid">

<div className="service-card glass">

<div className="service-icon">🤖</div>

<h3>AI Chatbots</h3>

<p>

Custom GPT-powered assistants for customer support, sales, FAQs, and internal operations.

</p>

</div>

<div className="service-card">

<div className="service-icon">💬</div>

<h3>AI Customer Support</h3>

<p>

Automated ticket management, knowledge base integration, CRM workflows, and 24/7 customer service.

</p>

</div>

<div className="service-card">

<div className="service-icon">⚙</div>

<h3>CRM Automation</h3>

<p>

Automate customer management, lead tracking, follow-ups, reporting, and business workflows.

</p>

</div>

<div className="service-card">

<div className="service-icon">📈</div>

<h3>AI Sales Systems</h3>

<p>

Lead generation, outreach automation, email personalization, qualification, and pipeline management.

</p>

</div>

<div className="service-card">

<div className="service-icon">🚀</div>

<h3>AI Lead Generation</h3>

<p>

Find qualified prospects, enrich contact data, and automate outreach using AI-powered workflows.

</p>

</div>

<div className="service-card">

<div className="service-icon">📊</div>

<h3>AI Dashboards</h3>

<p>

Interactive business dashboards with real-time KPIs, analytics, reporting, and AI insights.

</p>

</div>

<div className="service-card">

<div className="service-icon">🔄</div>

<h3>Workflow Automation</h3>

<p>

Automate repetitive business processes using Python, APIs, AI agents, and custom integrations.

</p>

</div>

<div className="service-card">

<div className="service-icon">🚚</div>

<h3>Supply Chain AI</h3>

<p>

AI-powered freight forwarding, logistics tracking, shipment automation, and supply chain optimization.

</p>

</div>

</div>

</div>

</section>
</FadeIn>
  );
}