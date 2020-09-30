import React, { Component } from "react";
import "../css/AboutPage.css";
import { Link } from "react-router-dom";
import Typed from 'react-typed';

function AboutPage(props) {
  return (
    <div class="page-wrapper">
      <div class="page" id="about-page">
        <div class='page-content'>
          <div class='grid-element'>
            <h2>About</h2>
            <div class="page-body">
              Hi, I'm Sorin. I am a junior at Brown University pursuing a double concentration in Computer Science and Economics.
              I am interested in machine learning applications in healthcare and I also enjoy creating web apps.
              I am currently an intern for Intus Care a startup in geriatric healthcare by Brown students.
              Outside of class, I enjoy playing basketball, completing crosswords, and editing photos.
            </div>
          </div>
          <div class='grid-element'>
            <h2>Experience</h2>
            <div class="page-body">
              <ul>
                <li>
                  Intern at Intus Care
              </li>
                <li>
                  Vice President of Product Development at SciSquare
              </li>
                <li>
                  Undergraduate Teaching Assistant for CSCI 0170
              </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <Link to="/" class="back-link">
        Main Menu
                    </Link>
      {/* <p>Orlando, Florida</p>
            <p>Computer Science</p>
            <p>Brown University '22</p>
            <p>https://www.linkedin.com/in/sorin-cho-158905178/</p>
            <p>https://github.com/SorinCho</p> */}
      {/* <section>
            <h2>About me</h2>
            <p>
              Hi, I'm Sorin. I am a sophomore at Brown University studying
              computer science and I plan on completing the AI/ML and Data
              pathways. I am interested in natural language processing and
              generation, but have also have an interest in creating basic web
              apps. Last semester, I was a undergraduate teaching assistant for
              an introductory computer science course at Brown University.
              Outside of class, I enjoy playing basketball, completing
              crosswords, and playing skribbl.io
            </p>
          </section> */}
      {/* <section>
            <h2>Skills</h2>
            <div class="two-panel">
              <ul class="two-panel-left">
                <li>Java</li>
                <li>OCaml</li>
                <li>ReasonML</li>
                <li>Racket</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>Express/Node.js</li>
              <li>HTML/CSS</li>
              </ul>
              <div class="two-panel-right">CONTENT</div>
            </div>
          </section> */}

      {/* <section>
            <h2>Interests</h2>
            <div class="two-panel">
              <ul class="two-panel-left">
                <li>
                  What I'm Listening to Right Now: Blueberry Faygo by Lil Mosey
                </li>
                <li>Orlando Magic</li>
                <li>Still haven't found the right skincare routine</li>
                <li>Play me in skribbl.io</li>
                <li>
                  I make phone wallpapers in MS Paint! Check out the GALLERY!
                </li>
              </ul>
              <div class="two-panel-right">CONTENT</div>
            </div>
          </section> */}
    </div>

  );
}
export default AboutPage;