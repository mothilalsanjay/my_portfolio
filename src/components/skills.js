import React from 'react';

const skillsData = [
  {
    title: 'HTML',
    description:
      'I have a strong understanding of HTML and its semantic elements, which allows me to structure websites that are easy to maintain and accessible. I\'m familiar with the latest HTML5 elements and attributes, which are essential for modern web development.',
  },
  {
    title: 'CSS',
    description:
      'I am proficient in CSS and have experience in creating responsive, mobile-first layouts using modern techniques like Flexbox and CSS Grid and the ability to create custom animations and transitions to enhance user experiences.',
    },
  {
    title: 'JavaScript',
    description:
      'I have a strong understanding of JavaScript and its core concepts. I am a seasoned front-end developer with a strong command of JavaScript, the dynamic scripting language that powers interactive and feature-rich web applications.'
   },
  {
    title: 'React',
    description:
      'I\'m skilled in React and its ecosystem, including state management with React\'s Context API and hooks like useState, useEffect, and useReducer. I also have experience building dynamic and scalable web applications using React Router for navigation and component libraries like Material UI.',
    },
  {
    title: 'Bootstrap',
    description:
      'I am proficient in using Bootstrap to quickly build responsive and mobile-first websites. I leverage its grid system, components, and utility classes to create fast, clean, and consistent designs.',
    },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section" style={{ padding: "2rem", backgroundColor: "#24221b" }}>
      <h2 className="text-center" style={{ fontSize: "2.5rem", marginBottom: "1rem" ,color:"#16d108"}}>My Skills</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div className="col-md-4 " key={index} style={{ marginBottom: "2rem" }}>
            <div className="card" style={{ border: "1px solid #028f00", borderRadius: "10px",backgroundColor:"#33322e" }}>
              <div className="card-body">
                <h3 className="card-title" style={{ fontSize: "2rem", color: "#028f00"  }}>{skill.title}</h3>
                <p className="card-text" style={{ fontSize: "1.2rem", lineHeight: "1.8" ,color:"white" ,textalign:"center"}}>
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
