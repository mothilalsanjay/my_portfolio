import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const isMobile = window.innerWidth <= 500;
  return (
    <section id="about-me" className="about" >
      <h2 style={{ margin: "1rem", fontSize: "2.5rem" }}>About Me</h2>
      <p style={{ fontSize: isMobile ? "1rem" : "1.2rem",
          lineHeight: isMobile ? "1.6" : "1.8", maxWidth: "800px", margin: "0 auto" }}>
        Hello! I'm <strong>Mothilal Sanjay</strong>, a self-motivated and detail-oriented <strong>Front-End Developer</strong> with a strong passion for creating visually appealing and functional websites.
        <br />
        I have a background in <strong>Mechanical Engineering</strong> and transitioned into the world of web development driven by my curiosity and love for building things that people can interact with.
        <br />
        Over the past few months, I have been honing my skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>, and <strong>BootStrap </strong>developing projects that showcase my creativity and technical abilities.
      </p>
      <p style={{  fontSize: isMobile ? "1rem" : "1.2rem",
          lineHeight: isMobile ? "1.6" : "1.8", maxWidth: "800px", margin: "1rem auto" }}>
        I'm excited to contribute to real-world projects, solve challenging problems, and learn new technologies as I grow as a developer.
        In my free time, I enjoy exploring design trends, learning about new web technologies, and experimenting with coding challenges to sharpen my skills.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/contact" style={{ color: "#fff", backgroundColor: "#028f00", textDecoration: "none", padding: "0.5rem 1rem", borderRadius: "5px", fontSize: "1rem", fontWeight: "bold" }}>
          Let's Connect
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
