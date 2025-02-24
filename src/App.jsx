import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import { useEffect, useContext } from "react";
import ScrollReveal from "scrollreveal";
import ResumeDownload from "./components/pdf/ResumeDocument";

import { ThemeProvider } from "./components/theme/ThemeContext";
import ResumeModal from "./components/ResumeModal";

const App = () => {
  useEffect(() => {
    // 📱 **Mobil menyuni faollashtirish**
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    };
    showMenu("nav-toggle", "nav-menu");

    // 🔗 **Mobil menyudagi link bosilganda menyuni yopish va active class berish**
    const navLink = document.querySelectorAll(".nav-link");

    function linkAction() {
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    // 🏃 **Skrin bo'ylab skroll qilinganda active menyuni o'zgartirish**
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", scrollActive);

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active");
        }
      });
    }

    // ✨ **ScrollReveal animatsiya sozlamalari**
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".home-title", {});
    sr.reveal(".home-scroll", { delay: 100 });

    sr.reveal(".about-img", { delay: 100 });
    sr.reveal(".about-subtitle", { delay: 100 });
    sr.reveal(".about-profession", { delay: 100 });
    sr.reveal(".about-text", { delay: 500 });
    sr.reveal(".about-social-icon", { delay: 100, interval: 100 });

    sr.reveal(".skills-subtitle", {});
    sr.reveal(".skills-name", { distance: "20px", delay: 50, interval: 100 });
    sr.reveal(".skills-img", { delay: 100 });

    sr.reveal(".portfolio-img", { interval: 100 });

    sr.reveal(".contact-subtitle", {});
    sr.reveal(".contact-text", { interval: 100 });
    sr.reveal(".contact-input", { delay: 100 });
    sr.reveal(".contact-button", { delay: 100 });
  }, []);

  return (
    <div>
      <Header />
      <ResumeDownload />

      <main>
        <ThemeProvider>
          <Home />
          <ResumeModal />
          <About />
          <Skills />
          <Contact />
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  );
};

export default App;
