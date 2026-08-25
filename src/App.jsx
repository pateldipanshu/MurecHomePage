import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SplitSection from "./components/SplitSection";
import Principles from "./components/Principles";
import Collection from "./components/Collection";
import Igbc from "./components/Igbc";
import Associations from "./components/Associations";
import Partners from "./components/Partners";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <SplitSection
          eyebrow="Our Story"
          title="The Legacy Beyond Compare"
          body="For over seven decades, we stood for perseverance, integrity, and nation-building through enterprise. Every step was guided by one oath: quality before profit, trust before everything."
          cta={{ label: "Our History", href: "https://murec.com/legacy.php" }}
          image="https://murec.com/images/madhusudan.webp"
        />

        <Principles />

        <Collection />

        <Igbc />

        <Associations />

        <Partners />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
