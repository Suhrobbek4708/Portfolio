import "./Footer.css"
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer section">
        <div className="footer-container bd-grid">
            <div className="footer-data">
                <h2 className="footer-title">O / S</h2>
                <p className="footer-text">I`m Suhrobbek Doe and this is my personal website</p>
            </div>

            <div className="footer-data">   
                <h2 className="footer-title">O / S</h2>
                <ul>
                    <li><a href="#home" className="footer-link">Home</a></li>
                    <li><a href="#about" className="footer-link">About</a></li>
                    <li><a href="#skills" className="footer-link">Skills</a></li>
                    <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
            </div>

            <div className="footer-data">
                <h2 className="footer-title">FOLLOW</h2>

                <a href="https://www.instagram.com/ol1mjonovv._.1?igsh=ZDNudWlpdHlpOTk0" className="footer-social"><FaInstagram /></a>
                <a href="https://t.me/suhrobbek_web" className="footer-social"><BsTelegram /></a>
                <a href="https://github.com/Suhrobbek4708" className="footer-social"><IoLogoGithub /></a>
                <a href="https://www.linkedin.com/in/suhrobbek-olimjonov-828779346/" className="footer-social"><FaLinkedin /></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer
