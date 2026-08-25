import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import "./SplitSection.css";

export default function SplitSection({
  eyebrow,
  title,
  body,
  cta,
  image,
  reverse = false,
  tone = "default",
}) {
  const frameRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [reverse ? -14 : 14, 0, reverse ? 14 : -14]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 0.86]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className={`split ${reverse ? "split--reverse" : ""} split--${tone} perspective-wrap`}>
      <div className="container split__inner">
        <Reveal className="split__media" x={reverse ? 30 : -30}>
          <motion.div
            className="split__frame"
            ref={frameRef}
            style={{ rotateY, scale, transformPerspective: 1200 }}
          >
            <motion.img src={image} alt="" loading="lazy" style={{ y: imgY }} />
          </motion.div>
        </Reveal>

        <Reveal className="split__text" delay={0.15}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="split__title">{title}</h2>
          <p className="split__body">{body}</p>
          {cta && (
            <a href={cta.href} className="btn split__cta">
              {cta.label} <span className="btn-arrow">→</span>
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
