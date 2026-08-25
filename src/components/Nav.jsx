import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Nav.css";

const LINKS = [
  { label: "About Us", href: "https://murec.com/about.php" },
  { label: "Our Legacy", href: "https://murec.com/legacy.php" },
  { label: "The Collection", href: "https://murec.com/Forest-Walk.php" },
  { label: "Careers", href: "https://murec.com/career.php" },
  { label: "Media", href: "https://murec.com/news.php" },
  { label: "Blogs", href: "https://murec.com/Blog.php" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__mark">
          MUREC
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="https://murec.com/contact.php" className="btn btn-solid nav__cta">
            Contact Us
          </a>
          <button
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="https://murec.com/contact.php" className="btn btn-solid nav__mobile-cta">
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
