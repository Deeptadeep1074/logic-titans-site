import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="logo-box">LT</div>
          <div>
            <h2 style={{ margin: 0 }}>Logic Titans</h2>
            <p style={{ margin: 0, fontSize: "13px", color: "#ccc" }}>
              AI • Bots • Apps • Automation
            </p>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#bots">Bots</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" style={{ marginTop: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          We Build Intelligent Bots & Apps
        </h1>
        <p style={{ color: "#ccc" }}>
          Custom AI/ML-powered chatbots and automation systems for HR,
          eCommerce, travel, and entertainment.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a className="btn" href="#bots">View Bots</a>
          <a className="btn" href="#contact">Request Quote</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ marginTop: "50px" }}>
        <h2>Our Services</h2>

        <div className="card">
          <strong>Bot Development</strong>
          <p>Custom chatbots, Zobots, and conversational AI.</p>
        </div>

        <div className="card">
          <strong>HR Automation</strong>
          <p>Recruitment bots, leave automation, employee support.</p>
        </div>

        <div className="card">
          <strong>eCommerce Bots</strong>
          <p>Product recommendations, order tracking, cart recovery.</p>
        </div>

        <div className="card">
          <strong>Travel Bots</strong>
          <p>Booking assistants, itinerary planning bots.</p>
        </div>

        <div className="card">
          <strong>AI/ML Systems</strong>
          <p>Predictive analytics & automation workflows.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ marginTop: "50px" }}>
        <h2>Contact Us</h2>

        <div className="card">
          <input placeholder="Your Name" style={{ width: "100%", padding: 10, marginBottom: 10 }} />
          <input placeholder="Email" style={{ width: "100%", padding: 10, marginBottom: 10 }} />
          <textarea placeholder="Message" rows={4} style={{ width: "100%", padding: 10 }}></textarea>

          <button
            className="btn"
            style={{ marginTop: "10px" }}
            onClick={() => {
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
          >
            Send
          </button>

          {sent && <p style={{ color: "lightgreen" }}>Message Sent!</p>}
        </div>
      </section>

      <footer style={{ marginTop: "60px", color: "#ccc", textAlign: "center" }}>
        © {new Date().getFullYear()} Logic Titans — AI & Automation
      </footer>
    </div>
  );
}

