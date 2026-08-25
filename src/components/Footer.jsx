import "./Footer.css";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586724462166" },
  { label: "YouTube", href: "https://www.youtube.com/@Murec_official" },
  { label: "Instagram", href: "https://www.instagram.com/murec_official/" },
];

const LINKS = [
  { label: "About Us", href: "https://murec.com/about.php" },
  { label: "Our Legacy", href: "https://murec.com/legacy.php" },
  { label: "The Collection", href: "https://murec.com/Forest-Walk.php" },
  { label: "Careers", href: "https://murec.com/career.php" },
  { label: "Blogs", href: "https://murec.com/Blog.php" },
  { label: "Contact Us", href: "https://murec.com/contact.php" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__mark">MUREC</span>
          <p className="footer__tag">Madhusudan Urban Real Estate Collection</p>
        </div>

        <nav className="footer__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <h4>Corporate Address</h4>
          <p>Madhusudan, 2nd Floor, Riana Towers, 51-52, Noida Sector 136, Uttar Pradesh - 201301</p>
          <h4>Email</h4>
          <p>
            <a href="mailto:info@murec.com">info@murec.com</a>
          </p>
          <h4>Phone Number</h4>
          <p>
            <a href="tel:+919717773229">+91 97177 73229</a>
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__disclaimer">
          This website is purely conceptual and not a legal document. All layouts, specifications,
          amenities, and visuals are subject to change as may be decided by MUREC or the competent
          authority. No information herein shall be construed as an offer, solicitation, or invitation to
          purchase. Interested parties are requested to verify all details directly with MUREC before
          making any commitments.
        </p>

        <div className="footer__meta">
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
          <p className="footer__copy">Copyright © 2026 MUREC · Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
