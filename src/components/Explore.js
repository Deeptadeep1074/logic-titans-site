import React from "react";

function Explore() {
  return (
    <section id="explore" className="explore-section">

      <h2 className="explore-title">Explore Our Solutions</h2>

      <div className="explore-boxes">

        <div className="explore-card">
          <i className="fa-solid fa-brain"></i>
          <h3>AI Automation</h3>
          <p>Smart AI systems designed to automate business workflows effortlessly.</p>
        </div>

        <div className="explore-card">
          <i className="fa-solid fa-shield-halved"></i>
          <h3>Secure Integrations</h3>
          <p>Enterprise-grade encrypted connections with seamless API workflows.</p>
        </div>

        <div className="explore-card">
          <i className="fa-solid fa-gauge-high"></i>
          <h3>High Performance</h3>
          <p>Optimized architecture ensuring speed, precision and reliability.</p>
        </div>

      </div>

    </section>
  );
}

export default Explore;
