import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import "./Associations.css";

// Rendered as styled wordmarks rather than hot-linked images: the source
// logos are served from murec.com's own CDN and it blocks cross-origin
///hotlinked requests from other domains, which is why tiles were randomly
// blank. Text wordmarks always render, everywhere, reliably.
const PARTNERS = [
  { name: "ICICI Bank", tag: "Banking Partner" },
  { name: "Bobby Mukherji & Associates", tag: "Interior Design" },
  { name: "Design Forum International", tag: "Architecture" },
  { name: "Bajaj Finserv", tag: "Housing Finance" },
  { name: "V Cert", tag: "Compliance" },
];

const TRACK = [...PARTNERS, ...PARTNERS];

export default function Associations() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  return (
    <section className="assoc" ref={sectionRef}>
      <motion.img
        className="assoc__bg"
        src="https://murec.com/images/madhusudan.png"
        alt=""
        loading="lazy"
        style={{ y: bgY, scale: bgScale }}
      />
      <div className="assoc__scrim" />

      <div className="container assoc__content">
        <Reveal>
          <p className="eyebrow assoc__eyebrow">Our Associations</p>
          <h2 className="assoc__title">Trusted by Names That Set the Standard</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="assoc__marquee">
            <div className="assoc__track">
              {TRACK.map((p, i) => (
                <div className="assoc__chip" key={i}>
                  <span className="assoc__chip-name">{p.name}</span>
                  <span className="assoc__chip-tag">{p.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
