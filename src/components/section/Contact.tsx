import FadeIn from "../animations/FadeIn";
import "../../styles/contact.css";
export default function Contact() {
  return (
    <FadeIn delay={0.25}>
    <section className="contact" id="contact">

<div className="contact-container">

<div className="section-header">

<span className="section-tag">

CONTACT

</span>

<h2>

Let's Build Your

<span>

Next AI System

</span>

</h2>

<p>

Whether you're looking to automate operations, improve customer support, or build intelligent AI solutions, I'd love to discuss your project.

</p>

</div>

<div className="contact-grid">

<div className="contact-card glass">

<h3>Email</h3>

<a href="mailto:deyprantobivash0@gmail.com">

deyprantobivash0@gmail.com

</a>

</div>

<div className="contact-card glass">

<h3>LinkedIn</h3>

<a
href="https://linkedin.com/in/bivash-dey-pranta-30b05b392"
target="_blank"
rel="noreferrer"
>

Connect on LinkedIn

</a>

</div>

<div className="contact-card glass">

<h3>GitHub</h3>

<a
href="https://github.com/deyprantobivash0-creator"
target="_blank"
rel="noreferrer"
>

View GitHub

</a>

</div>

<div className="contact-card glass">

<h3>WhatsApp</h3>

<a
href="https://wa.me/8801708778830"
target="_blank"
rel="noreferrer"
>

Chat on WhatsApp

</a>

</div>

</div>

<div className="contact-cta">

<h2>

Ready to automate your business?

</h2>

<p>

Let's discuss your project and explore how AI can transform your operations.

</p>

<a
href="mailto:deyprantobivash0@gmail.com"
className="contact-button"
>

Start a Conversation

</a>

</div>

</div>

</section>
</FadeIn>
  );
}