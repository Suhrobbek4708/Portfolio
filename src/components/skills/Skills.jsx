import "./Skills.css";

const Skills = () => (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container bd-grid">
        <div className="skills-box">
          <h3 className="skills-subtitle">Development</h3>
          {["HTML", "CSS", "JavaScript",  "React", ].map((skill) => (
            <span key={skill} className="skills-name">{skill}</span>
          ))}
          <h3 className="skills-subtitle">Design</h3>
          {["Figma", "Adobe XD", "Photoshop"].map((design) => (
            <span key={design} className="skills-name">{design}</span>
          ))}
        </div>
        <div className="skills-img">
          <img src="https://i.postimg.cc/fL7Z1bFw/skill.jpg" alt="skills" />
        </div>
      </div>
    </section>
  );
  
  export default Skills;