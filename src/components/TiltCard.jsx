import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps any card content with a subtle, premium 3D pointer-tilt effect.
 * Pure hover/pointer interaction — safe to nest inside a Reveal (scroll-in) wrapper.
 */
export default function TiltCard({
  children,
  className = "",
  as: Tag = motion.div,
  max = 10,
  scale = 1.02,
  glare = true,
}) {
  const ref = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const sx = useSpring(px, springCfg);
  const sy = useSpring(py, springCfg);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Tag
      ref={ref}
      className={`tilt-3d ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden="true"
          className="tilt-3d__glare"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 55%)`,
          }}
        />
      )}
    </Tag>
  );
}
