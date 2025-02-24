import React from "react";
import "./Home.css";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio.pdf.pdf"; // public papkadagi PDF fayl
    link.download = "portfolio_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="home-container bd-grid">
        <h1 className="home-title">
          <span>Hi,</span>
          I`M <br />
          <span>FRONTEND</span> <br />
          DEVELOPER <br />
        </h1>

        <button onClick={handleDownload} className="btn">
          Resume
        </button>

        <div className="home-scroll">
          <a href="#about" className="home-scroll-link">
            <i className="bx bx-up-arrow-alt"></i>← SCROLL DOWN
          </a>
        </div>
      </div>
      {/* <div className="home-img">
        <h1 className="home-name">
          <span>OLIMJONOV</span> <br /> SUKHROBBEK
        </h1>
      </div> */}
    </section>
  );
};

export default Home;
