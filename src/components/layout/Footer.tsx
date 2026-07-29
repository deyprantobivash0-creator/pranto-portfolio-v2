import FadeIn from "../animations/FadeIn";
import "../../styles/footer.css";
export default function Footer() {
  return (
    <FadeIn delay={0.3}>
    <footer className="footer">

<div className="footer-container">

<div className="footer-left">

<h2>

Pranto Dey

</h2>

<p>

AI Systems Engineer

</p>

<p className="footer-description">

Building production-ready AI systems that automate business operations, improve customer experience, and drive measurable growth.

</p>

</div>

<div className="footer-links">

<h3>

Quick Links

</h3>

<a href="#home">Home</a>

<a href="#about">About</a>

<a href="#services">Services</a>

<a href="#projects">Projects</a>

<a href="#tech">Tech Stack</a>

<a href="#contact">Contact</a>

</div>

<div className="footer-social">

<h3>

Connect

</h3>

<a
href="https://linkedin.com/in/bivash-dey-pranta-30b05b392"
target="_blank"
rel="noreferrer"
>

LinkedIn

</a>

<a
href="https://github.com/deyprantobivash0-creator"
target="_blank"
rel="noreferrer"
>

GitHub

</a>

<a href="mailto:deyprantobivash0@gmail.com">

Email

</a>

<a
href="https://wa.me/8801708778830"
target="_blank"
rel="noreferrer"
>

WhatsApp

</a>

</div>

</div>

<div className="footer-bottom">

<p>

© 2026 Pranto Dey • AI Systems Engineer. All Rights Reserved.

</p>

</div>

</footer>
</FadeIn>
  );
}