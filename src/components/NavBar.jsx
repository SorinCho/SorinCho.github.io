import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import Typed from 'react-typed';



function NavBar(props) {
  const [about, setAbout] = useState('Play');
  const [projects, setProjects] = useState('Scene Selections');
  const [gallery, setGallery] = useState('Bonus Features');
  const [contact, setContact] = useState('Credits');
  const mouseOnAbout = (e) => {
    setAbout('About')
  }
  const mouseOffAbout = (e) => {
    setAbout('Play')
  }
  const mouseOnProjects = (e) => {
    setProjects('Projects')
  }
  const mouseOffProjects = (e) => {
    setProjects('Scene Selections')
  }
  const mouseOnGallery = (e) => {
    setGallery('Gallery')
  }
  const mouseOffGallery = (e) => {
    setGallery('Bonus Features')
  }
  const mouseOnContact = (e) => {
    setContact('Contact')
  }
  const mouseOffContact = (e) => {
    setContact('Credits')
  }
  return (
    <header id="navBarHeader">
      <ul id="headerButtons">
        <li className="navButton" /*onMouseEnter={mouseOnAbout} onMouseLeave={mouseOffAbout}*/>
          <Link to="/about" class="header-link" >
            {about}
            {/* <Typed
                strings={['Play', 'About']}
                typeSpeed={40}
                startDelay={50}
                backSpeed={40}
                showCursor={false}
                backDelay={3000}
              /> */}
          </Link>
        </li>
        <li className="navButton">
          <Link to="/projects" class="header-link" >
            {projects}
            {/* <Typed
                strings={['Scene Selections', 'Projects']}
                typeSpeed={40}
                startDelay={50}
                backSpeed={20}
                showCursor={false}
                backDelay={4000}
              /> */}
          </Link>
        </li>
        <li className="navButton">
          <Link to="/gallery" class="header-link">
            {gallery}
            {/* <Typed
                strings={['Bonus Features', 'Gallery']}
                typeSpeed={40}
                startDelay={50}
                backSpeed={40}
                showCursor={false}
                backDelay={5000}
              /> */}
          </Link>
        </li>
        <li className="navButton">
          <Link to="/contact" class="header-link">
            {contact}
            {/* <Typed
                strings={['Audio Setup', 'Contact']}
                typeSpeed={40}
                startDelay={50}
                backSpeed={40}
                showCursor={false}
                backDelay={6000}
              /> */}
          </Link>
        </li>
      </ul>
    </header >
  );
}
export default NavBar;
