import React from "react";
// import "./Skills.css"; // Import the CSS file for styles

const skillsData = [
  {
    title: "Web Development",
    description: "Skilled in HTML, CSS, JavaScript, and various web development frameworks  for creating responsive and visually appealing websites.",
    imageUrl: "https://res.cloudinary.com/dqvewferm/image/upload/v1726631521/photo-1618044619888-009e412ff12a_yg5ypb.webp"
  },
  {
    title: "Software Development",
    description: "Proficient in full-stack software development, with experience in building, deploying, and maintaining applications using Django framework as backend and React as frontend technologies.",
    imageUrl: "https://res.cloudinary.com/dqvewferm/image/upload/v1726632086/pexels-photo-546819_yzdmxh.jpg"
  }
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>Skills & Expertise</h2>
      <p>Proficient in various programming languages and development tools</p>

      {skillsData.map((skill, index) => (
        <div
          className={`skill ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="skill-image">
            <img src={skill.imageUrl} alt={skill.title} />
          </div>
          <div className="skill-description">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
