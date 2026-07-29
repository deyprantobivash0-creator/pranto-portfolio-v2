import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-tag">
            ⚡ Available for AI Automation Projects
          </div>

          <h1 className="hero-title">
            Building
            <span> AI Systems </span>
            That Help
            <br />
            Businesses Scale Faster.
          </h1>

          <p className="hero-description">
            I'm <strong>Pranto Dey</strong>, an Agentic AI Systems Engineer
            specializing in AI agents, workflow automation, intelligent business
            software, CRM systems, and logistics automation that eliminate manual
            work and create measurable business value.
          </p>

          <div className="hero-buttons">

            <PrimaryButton href="https://wa.me/8801708778830">
              Book Free Strategy Call
            </PrimaryButton>

            <SecondaryButton href="/resume/Resume_of_Dey.pdf">
              Download Resume
            </SecondaryButton>

          </div>

          <div className="hero-stats">

            <div className="stat-card glass">
              <h2>5+</h2>
              <p>AI Products</p>
            </div>

            <div className="stat-card">
              <h2>20+</h2>
              <p>Automations</p>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <p>Custom Solutions</p>
            </div>

            <div className="stat-card">
              <h2>24/7</h2>
              <p>Business Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          <div className="image-glow"></div>

          <div className="image-frame">

            <img
              src="/images/pranto.jpg.jpg"
              alt="Pranto Dey"
              className="profile-image"
            />

          </div>

          <div className="floating-card card-one">
            🤖 AI Agents
          </div>

          <div className="floating-card card-two">
            ⚙ Workflow Automation
          </div>

          <div className="floating-card card-three">
            📊 Business Intelligence
          </div>

        </div>

      </div>
    </section>
  );
}