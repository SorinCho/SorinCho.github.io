import React, { Component } from "react";
import Face from "../resources/HomePage/facepic.JPG";
import NavBar from "./NavBar.jsx"
import "../css/HomePage.css";

function HomePage(props) {

  return (
    <>
      {/* <NavBar></NavBar> */}
      <div class="page-wrapper">
        <div class="page" id="home-page">
          <NavBar></NavBar>
          {/* <h2>About</h2>
        <div class="row">
          <img id="face" alt="facepic" src={Face} />
          <div id="pic-caption">
            Hi, I'm Sorin. I am a sophomore at Brown University studying computer
            science and I plan on completing the AI/ML and Data pathways. I am
            interested in natural language processing and creating web apps. Last
            semester, I was a undergraduate teaching assistant for an introductory
            computer science course at Brown University. Outside of class, I enjoy
            playing basketball, completing crosswords, and playing skribbl.io

          </div>
        </div> */}
          <main>
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
          </main>
        </div>
      </div>
    </>

  );
}
export default HomePage;
