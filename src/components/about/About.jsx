import "./About.css";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title">About</h2>
    <div className="about-container bd-grid">
      <div className="about-img">
        <h2>
          My Name Is Sukhrobbek. <br />
          Web Developer
        </h2>
      </div>
      <div>

        <p className="about-text">
          I am Sukhrobbek Olimjonov, I am 17 years old. I`m a frontend developer 
          with a passion for creating digital solutions. I enjoy building 
          websites and web applications that are both functional and visually 
          appealing. I`m skilled in a variety of programming languages and 
          technologies, including HTML, CSS, JavaScript, React, and  I`m 
          always eager to learn new things and improve my skills. I`m a hard 
          worker and a team player. I`m excited to work on new projects and 
          contribute to the success of your team.
        </p>
        <div className="about-social">
          <a href="#" className="about-social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" className="about-social-icon">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" className="about-social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
