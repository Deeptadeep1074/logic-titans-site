import React from "react";

function Team() {
  return (
    <section id="team">
      <h2>Meet Our Team</h2>

      <div className="team-members">
        <div className="team-member member">
          <img src="https://i.imgur.com/xa2F8dL.png" alt="Deeptadeep" />
          <h3>Deeptadeep Mitra</h3>
          <p>Team Lead / AI Developer</p>
        </div>

        <div className="team-member member">
          <img src="https://i.imgur.com/N6M1pnJ.png" alt="Dipyaman" />
          <h3>Dipyaman Bar</h3>
          <p>Co-Lead / FullStack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
