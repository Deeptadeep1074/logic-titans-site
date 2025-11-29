import React from "react";

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>

      <div className="service-boxes">
        <div className="service-box box">
          <i className="fa-solid fa-robot"></i>
          <h3>AI Chatbots</h3>
          <p>Powerful AI bots built with NLP, ML and automation.</p>
        </div>

        <div className="service-box box">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Web Development</h3>
          <p>Modern, responsive & high-performance websites.</p>
        </div>

        <div className="service-box box">
          <i className="fa-solid fa-cloud"></i>
          <h3>Cloud Integration</h3>
          <p>Automation, optimization & enterprise cloud workflows.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
