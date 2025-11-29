import React from "react";

function Hero() {

  // Smooth scroll to EXPLORE section
  const scrollToExplore = () => {
    const section = document.getElementById("explore");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">

      <div className="hero-content">
        <h1 className="hero-title">
          Your Technology. Our Innovation.
        </h1>

        <p className="hero-subtitle">
          Logic Titans builds intelligent AI solutions with precision,
          performance, and creativity. Unlock next-gen automation with our
          advanced SalesIQ bot built for the CliqTrix 2025 challenge.
        </p>

        <button className="btn explore-btn" onClick={scrollToExplore}>
          Explore More
        </button>

        <div className="scroll-arrow"></div>
      </div>

    </section>
  );
}

export default Hero;
