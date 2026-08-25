import { useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import "./Partners.css";

const PARTNERS = [
  {
    name: "Bobby Mukherji",
    firm: "Bobby Mukherji & Associates",
    photo: "https://www.murec.com/images/team_2.webp",
    quote:
      "We are engaged to conceptualize the interiors for Murec's clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: "Goonmeet Ji",
    firm: "Design Forum International",
    photo: "https://www.murec.com/images/team_3.webp",
    quote:
      "We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark — an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function PartnerAvatar({ name, photo }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="partners__photo partners__photo--fallback" aria-hidden="true">
        {initials(name)}
      </div>
    );
  }

  return (
    <img
      className="partners__photo"
      src={photo}
      alt={name}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}

export default function Partners() {
  return (
    <section className="partners partners--dark perspective-wrap">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Collaborators</p>
          <h2 className="partners__title">From Our Partners</h2>
        </Reveal>

        <div className="partners__grid">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} className="partners__reveal">
              <TiltCard className="partners__card" max={6} scale={1.015}>
                <PartnerAvatar name={p.name} photo={p.photo} />
                <p className="partners__quote">&ldquo;{p.quote}&rdquo;</p>
                <div className="partners__footer">
                  <span className="partners__name">{p.name}</span>
                  <span className="partners__firm">{p.firm}</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
