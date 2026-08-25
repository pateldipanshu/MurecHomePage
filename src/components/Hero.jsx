import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const numeralRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section className="hero perspective-wrap" id="top" ref={sectionRef}>
      <motion.video
        className="hero__video"
        src="https://murec.com/images/homevideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://murec.com/images/madhusudan.webp"
        style={{ scale: videoScale, y: videoY }}
      />
      <div className="hero__scrim" />

      <motion.span
        className="hero__numeral"
        aria-hidden="true"
        style={{ rotateZ: numeralRotate, opacity: contentOpacity }}
      >
        78
      </motion.span>

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          78+ Years of Legacy
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          The Legacy
          <br />
          Beyond Compare
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          For over seven decades, we stood for perseverance, integrity, and
          nation-building through enterprise. Every step was guided by one
          oath — quality before profit, trust before everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <a href="https://murec.com/about.php" className="btn btn-solid">
            Learn More <span className="btn-arrow">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <span className="hero__scroll-line" />
        Explore
      </motion.div>
    </section>
  );
}
