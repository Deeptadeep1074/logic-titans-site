import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill all fields");
      return;
    }

    setStatus("Sending...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw9j-za0YwPEzkG-WHqnIUAyOYtD72htTwoQB8eOfd9P_BaXx0FSx-93iGHR7AeXGYjSw/exec", {
        method: "POST",
        mode: "no-cors", // prevent CORS issues
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed! Try again later.");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button className="btn" onClick={handleSubmit}>
          Send Message
        </button>

        {status && (
          <p style={{ marginTop: "12px", fontWeight: "600" }}>{status}</p>
        )}
      </div>
    </section>
  );
}

export default Contact;
