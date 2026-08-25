import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import "./Igbc.css";

export default function Igbc() {
  return (
    <section className="igbc perspective-wrap">
      <div className="container igbc__inner">
        <Reveal className="igbc__badge-wrap" x={-30}>
          <TiltCard className="igbc__badge" max={14} scale={1.05} glare={false}>
            <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="130" cy="130" r="128" stroke="var(--sage)" strokeWidth="1" opacity="0.5" />
              <circle cx="130" cy="130" r="98" stroke="var(--sage)" strokeWidth="1" opacity="0.35" />
              <path
                d="M130 66C107 88 92 112 92 140c0 24 17 44 38 44s38-20 38-44c0-28-15-52-38-74Z"
                stroke="var(--sage)"
                strokeWidth="1.4"
              />
              <path d="M130 92v92" stroke="var(--sage)" strokeWidth="1.2" opacity="0.7" />
              <text
                x="130"
                y="228"
                textAnchor="middle"
                fill="var(--sage)"
                fontFamily="Manrope, sans-serif"
                fontSize="11"
                letterSpacing="3"
              >
                IGBC CERTIFIED
              </text>
            </svg>
          </TiltCard>
        </Reveal>

        <Reveal className="igbc__text" delay={0.15}>
          <p className="eyebrow eyebrow--sage">Design Philosophy</p>
          <h2 className="igbc__title">IGBC Certified Design Philosophy</h2>
          <p className="igbc__body">
            The first MUREC collection is envisioned to align with IGBC
            certification standards, reflecting a commitment to responsible
            development. From efficient resource planning to healthier
            living environments, the project integrates sustainability as a
            core design principle — thoughtfully, quietly, and with
            long-term impact in mind.
          </p>
          <a href="https://murec.com/Design-Philosophy.php" className="btn btn--sage">
            Discover More <span className="btn-arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
