import Reveal from "./Reveal";
import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <Reveal as="h2" className="cta__title">
          Get in Touch
        </Reveal>
        <Reveal delay={0.12} className="cta__body">
          <p>Looking to collaborate, invest, or simply know more? Reach out and let's connect.</p>
        </Reveal>
        <Reveal delay={0.24}>
          <a href="https://murec.com/contact.php" className="btn btn-solid">
            Contact Us <span className="btn-arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
