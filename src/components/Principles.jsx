import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import "./Principles.css";

const VALUES = [
  { label: "Trust", note: "Built into every agreement" },
  { label: "Quality", note: "Never traded for profit" },
  { label: "Transparency", note: "In word and in practice" },
  { label: "Innovation", note: "The foundation we build on" },
];

export default function Principles() {
  return (
    <section className="principles principles--dark perspective-wrap">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our Foundation</p>
          <h2 className="principles__title">Living by Principles</h2>
          <p className="principles__body">
            MUREC is guided by values that shape every decision — building
            trust, delivering quality, practicing transparency, and
            embracing innovation as the foundation of everything we create.
          </p>
          <a href="https://murec.com/principles.php" className="btn">
            Explore More <span className="btn-arrow">→</span>
          </a>
        </Reveal>

        <div className="principles__grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.1}>
              <TiltCard className="principles__item" max={8} scale={1.03}>
                <span className="principles__index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="principles__label">{v.label}</h3>
                <p className="principles__note">{v.note}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
