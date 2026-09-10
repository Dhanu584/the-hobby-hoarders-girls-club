/* Home.jsx */

import { useEffect, useState } from "react";
import "./Home.css";

import image01 from "../assets/image02.png";

import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";
import img07 from "../assets/img07.jpg";
import img08 from "../assets/img08.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
];

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /* =================================
     SCROLL ANIMATION
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const progress = Math.min(
        Math.max(scrollY / 300, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =================================
     INITIAL LOGO ENTRANCE
  ================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoReady(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  /* =================================
     MOUSE PARALLAX
  ================================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* =================================
     SINGLE-PAGE NAVIGATION
     
     App.jsx sections:
     home
     about
     skills
     work
     contact
  ================================= */

  const handleNavigation = (section) => {
    setMenuOpen(false);

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =================================
     LOGO SCROLL TRANSITION

     Large hero logo starts in the center
     and moves upward into navbar.
  ================================= */

  const logoScale =
    1 - scrollProgress * 0.72;

  const logoTop =
    `calc(43vh - ${scrollProgress * 43}vh + ${scrollProgress * 36}px)`;

  const logoStyle = {
    top: logoTop,

    transform: `
      translate(-50%, -50%)
      scale(${logoScale})
    `,
  };

  /* =================================
     HERO LOGO OPACITY
  ================================= */

  const logoOpacity = Math.max(
    0,
    1 - scrollProgress * 1.12
  );

  /* =================================
     NAVBAR LOGO
     
     It appears only after the large
     hero logo has almost reached navbar.
  ================================= */

  const navbarLogoVisible =
    scrollProgress > 0.90;

  const universeStyle = {
    "--mx": mousePosition.x,
    "--my": mousePosition.y,
  };

  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}

      <header className="home-navbar">

        {/* MENU BUTTON */}

        <button
          className="menu-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <span className="menu-lines">
            <span></span>
            <span></span>
          </span>

          <span className="menu-text">
            MENU
          </span>
        </button>


        {/* NAVBAR LOGO */}

        <div className="navbar-logo-space">

          <span
            className={
              navbarLogoVisible
                ? "nav-logo visible"
                : "nav-logo"
            }
          >
            The Hobby Hoarders Girls Club
          </span>

        </div>


        {/* NAVBAR CTA */}

        <button
  className="home-nav-cta"
  onClick={() => handleNavigation("contact")}
  aria-label="Contact"
>
  ✉
</button>

      </header>


      {/* =================================
          OVERLAY
      ================================= */}

      <div
        className={
          menuOpen
            ? "sidebar-overlay show"
            : "sidebar-overlay"
        }
        onClick={() => setMenuOpen(false)}
      />


      {/* =================================
          SIDEBAR
      ================================= */}

      <aside
        className={
          menuOpen
            ? "website-sidebar open"
            : "website-sidebar"
        }
      >

        {/* SIDEBAR TOP */}

        <div className="sidebar-top">

          <div className="sidebar-brand">
            The Hobby Hoarders
            <span>♡</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            ×
          </button>

        </div>


        {/* NAVIGATION */}

        <nav className="sidebar-navigation">

          {/* HOME */}

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("home")
            }
            type="button"
          >
            <span>01</span>
            Home
          </button>


          {/* ABOUT */}

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("about")
            }
            type="button"
          >
            <span>02</span>
            About Us
          </button>


          {/* OUR HOBBIES */}

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("skills")
            }
            type="button"
          >
            <span>03</span>
            Our Hobbies
          </button>


          {/* EVENTS */}

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("work")
            }
            type="button"
          >
            <span>04</span>
            Events
          </button>


          {/* JOIN THE CLUB */}

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("contact")
            }
            type="button"
          >
            <span>05</span>
            Join the Club
          </button>

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <p>
            For girls with too many hobbies
            and not enough time.
          </p>

          <div className="sidebar-flower">
            ✿
          </div>

        </div>

      </aside>


      {/* =================================
          HOME PAGE
      ================================= */}

      <main
        className="home-page"
        id="home"
      >

        <section
          className="logo-stage"
          style={{
            ...universeStyle,

            backgroundImage: `
              linear-gradient(
                rgba(232, 164, 188, 0.72),
                rgba(232, 164, 188, 0.72)
              ),
              url(${image01})
            `,
          }}
        >

          {/* =================================
              BACKGROUND GRID
          ================================= */}

          <div className="home-grid"></div>


          {/* =================================
              BACKGROUND SHAPES
          ================================= */}

          <div className="home-shape shape-one"></div>

          <div className="home-shape shape-two"></div>

          <div className="home-shape shape-three"></div>


          {/* =================================
              VERTICAL WORDS
          ================================= */}

          <div className="vertical-text left-text">
            GIRLHOOD
          </div>

          <div className="vertical-text right-text">
            HOBBIES
          </div>


          {/* =================================
              CREATIVE UNIVERSE
          ================================= */}

          <div className="creative-universe">

            <div className="orbit orbit-one"></div>

            <div className="orbit orbit-two"></div>


            <div className="floating-flower flower-one">
              ✿
            </div>

            <div className="floating-flower flower-two">
              ❀
            </div>


            <div className="floating-spark spark-one">
              ✦
            </div>

            <div className="floating-spark spark-two">
              ✧
            </div>


            <div className="floating-heart">
              ♡
            </div>

          </div>


          {/* =================================
              MAIN THHGC LOGO
          ================================= */}

          <div
            className={`thhgc-logo ${logoReady ? "logo-ready" : ""}`}
            style={{
              ...logoStyle,
              opacity: logoReady ? logoOpacity : 0,
            }}
          >

            <div className="logo-main-text">

              <span>
                The
              </span>

              <strong>
                Hobby Hoarders
              </strong>

              <strong>
                Girls Club
              </strong>

              <div className="logo-est">
                EST. 2025
              </div>

            </div>

          </div>


          {/* =================================
              TAGLINE
          ================================= */}

          <div
            className="home-intro"
            style={{
              opacity: Math.max(
                0,
                1 - scrollProgress * 2.5
              ),
            }}
          >

            <span className="intro-line"></span>

            <p>
              For the girls with too many hobbies
              and not enough time.
            </p>

            <span className="intro-line"></span>

          </div>


          {/* =================================
              FILM STRIP
          ================================= */}

          <div
            className="moving-images-wrapper"
            style={{
              opacity: Math.max(
                0,
                1 - scrollProgress * 2.2
              ),
            }}
          >

            <div className="film-strip">

              {/* TOP FILM HOLES */}

              <div className="film-holes top-holes"></div>


              {/* MOVING IMAGES */}

              <div className="moving-images">

                {[...images, ...images].map(
                  (image, index) => (

                    <div
                      className="film-frame"
                      key={index}
                    >

                      <div className="film-frame-image">

                        <img
                          src={image}
                          alt="THHGC hobby memory"
                        />

                      </div>

                    </div>

                  )
                )}

              </div>


              {/* BOTTOM FILM HOLES */}

              <div className="film-holes bottom-holes"></div>

            </div>

          </div>


          {/* =================================
              SCROLL INDICATOR
          ================================= */}

          <div
            className="scroll-indicator"
            style={{
              opacity:
                1 - scrollProgress * 3,
            }}
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line"></div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Home;