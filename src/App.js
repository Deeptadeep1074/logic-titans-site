import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 1500,
      easing: "ease",
    });

    sr.reveal(".hero", { origin: "left", opacity: 0 });
    sr.reveal(".explore-card", { interval: 200, origin: "bottom", opacity: 0 });
    sr.reveal(".box", { interval: 200 });
    sr.reveal(".member", { interval: 200 });
    sr.reveal(".contact-form", { origin: "bottom" });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
