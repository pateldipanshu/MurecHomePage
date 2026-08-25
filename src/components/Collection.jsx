import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import "./Collection.css";

export default function Collection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="collection" ref={sectionRef}>
      <motion.img
        className="collection__bg"
        src="https://murec.com/images/madhusudan.png"
        alt="MUREC Collection"
        loading="lazy"
        style={{ scale: bgScale, y: bgY }}
      />
      <div className="collection__scrim" />
      <div className="container collection__content">
        <Reveal>
          <p className="eyebrow">The Portfolio</p>
          <h2 className="collection__title">MUREC Collection</h2>
          <p className="collection__body">
            A portfolio shaped by legacy and guided by vision, the MUREC
            Collection is where every project reflects our way of building.
          </p>
          <a href="https://murec.com/Forest-Walk.php" className="btn btn-solid">
            Discover More <span className="btn-arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
