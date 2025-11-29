import React from "react";
import DeeptadeepImg from "../assets/Deeptadeep.jpg";
import DipyamanImg from "../assets/Dipyaman.jpg";

function Team() {
  return (
    <section id="team">
      <h2>Meet Our Team</h2>

      <div className="team-members">

        {/* Deeptadeep */}
        <div className="team-member member">
          <img src={DeeptadeepImg} alt="Deeptadeep" />
          <h3>Deeptadeep Mitra</h3>
          <p>Team Lead / AI Developer</p>
        </div>

        {/* Dipyaman */}
        <div className="team-member member">
          <img src={DipyamanImg} alt="Dipyaman" />
          <h3>Dipyaman Bar</h3>
          <p>Co-Lead / FullStack Developer</p>
        </div>

      </div>
    </section>
  );
}

export default Team;
