import React, { useEffect, useRef } from "react";
import "./About.css";

import founderImg from "../assets/dhanu1.jpeg";

import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const openMenu = () => {
    window.dispatchEvent(new CustomEvent("open-sidebar"));
  };

  return (
    <main className="about-page">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className="about-navbar">

        <button
          className="about-menu"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>

        <div className="about-nav-logo">
          The Hobby Hoarders Girls Club
        </div>

        <button className="about-join">
          Join the Club ↗
        </button>

      </nav>


      {/* =========================================
          SECTION 01
          OUR STORY
      ========================================= */}

      <section
        className="about-intro-section about-reveal"
        ref={addToRefs}
      >
        <div className="about-top-decoration">
          <span className="about-top-line"></span>
          <span className="about-spark spark-left">✦</span>
          <span className="about-spark spark-mid">✧</span>
          <span className="about-spark spark-right">✦</span>
          <span className="about-top-dot"></span>
        </div>

        <div className="about-section-number">
          01 / OUR STORY
        </div>

        <div className="about-intro-decoration">
          ♡
        </div>

        <div className="about-intro-content">

          <p className="about-eyebrow">
            A LITTLE CORNER FOR GIRLS
          </p>

          <h1>
            A little corner for girls
            <br />
            who want to{" "}
            <em>create, explore</em>
            <br />
            and try everything.
          </h1>

          <div className="about-intro-copy">

            <p>
              The Hobby Hoarders Girls Club is a community
              for girls with too many hobbies, too many ideas
              and the desire to try something new.
            </p>

            <p>
              From journaling and painting to book clubs,
              craft sessions and creative meetups — we make
              space for every hobby you want to explore.
            </p>

          </div>

        </div>

        <div className="about-star star-one">✦</div>
        <div className="about-star star-two">✦</div>

      </section>


      {/* =========================================
          SECTION 02
          MAKE THINGS / PHOTO DUMP
      ========================================= */}

      <section
        className="make-things-section about-reveal"
        ref={addToRefs}
      >

        <div className="make-things-text">

          <p className="about-eyebrow">
            02 / MAKE & CREATE
          </p>

          <h2>
            A place to
            <br />
            <em>make things.</em>
          </h2>

          <p className="make-description">
            Little projects, messy tables, colourful ideas
            and things made just because we wanted to.
          </p>

        </div>


        <div className="photo-dump">

          <div className="dump-photo dump-one">
            <img src={img01} alt="THHGC creative session" />
          </div>

          <div className="dump-photo dump-two">
            <img src={img02} alt="THHGC hobby activity" />
          </div>

          <div className="dump-photo dump-three">
            <img src={img03} alt="THHGC creative activity" />
          </div>

          <div className="dump-photo dump-four">
            <img src={img04} alt="THHGC hobby session" />
          </div>

          <div className="dump-photo dump-five">
            <img src={img05} alt="THHGC girls creating" />
          </div>

          <div className="dump-photo dump-six">
            <img src={img06} alt="THHGC creative meetup" />
          </div>

          <span className="dump-word">
            memories
          </span>

          <span className="dump-spark spark-a">
            ✦
          </span>

          <span className="dump-spark spark-b">
            ✧
          </span>

        </div>

      </section>


      {/* =========================================
          SECTION 03
          FOUNDER
      ========================================= */}

      <section
        className="founder-section about-reveal"
        ref={addToRefs}
      >

        <div className="founder-section-label">
          03 / THE GIRL BEHIND THE CLUB
        </div>


        <div className="founder-layout">

          {/* IMAGE */}

          <div className="founder-photo-wrap">

            <div className="founder-star">
              ✦
            </div>

            <div className="founder-photo-card">

              <img
                src={founderImg}
                alt="Aayushi Pathak, founder of The Hobby Hoarders Girls Club"
              />

              <div className="founder-note">
                made with
                <br />
                curiosity ♡
              </div>

            </div>

          </div>


          {/* TEXT */}

          <div className="founder-content">

            <p className="about-eyebrow">
              FOUNDER
            </p>

            <h2>
              Aayushi
              <br />
              <em>Pathak.</em>
            </h2>

            <h3>
              Founder of The Hobby Hoarders Girls Club.
            </h3>

            <p className="founder-description">
              What started with a love for hobbies became
              a space where girls could make things, discover
              new interests, meet like-minded people and
              simply enjoy being curious.
            </p>

            <div className="founder-sign">
              A club for every version of you.
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;
