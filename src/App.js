// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import { SingleProjectPage } from "./components/SingleProjectPage"
import { AnimatedSwitch } from 'react-router-transition';

function App(props) {
  return (
    <div class="large-wrapper">
      <Router>
        <div>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="home" exact path="/about" component={AboutPage} />
            <Route
              name="projects"
              exact
              path="/projects"
              component={ProjectsPage}
            />
            <Route exact path="/projects/:projectName" component={SingleProjectPage} />
            <Route name="gallery" exact path="/gallery" component={GalleryPage} />
            <Route name="contact" exact path="/contact" component={ContactPage} />
          </AnimatedSwitch>
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
