import React, { Component } from "react";
import "../css/ProjectsPage.css";
import { Link } from "react-router-dom";

export const projects = [
  {
    key: 0,
    name: 'Limerick Generator',
    path: 'limerick',
    description: "For the Deep Learning Final Project, my group decided to create a neural network that produces limericks. The corpus of data was retrieved by scraping limericks using BeautifulSoup. Then, the poems were preprocessed by converting each word into its repsective phoneme by using the CMU Pronouncing Dictionary. After filtering limericks that were too long or too short, we fed the data in to an LSTM from the Tensorflow library and trained for 50 epochs.We were able to achieve a perplexity of about 4.1 after 50 epochs and here are some sample limericks below:",
  },
  {
    key: 1,
    name: 'Stars',
    path: 'stars',
    description: "Implemented a REPL to take commands for finding stars. In Java, Utilized K-D Tree data structure to search stars from coordinates or a given star name. Created a GUI using HTML/CSS"
  },
  {
    key: 2,
    name: 'TIMDB',
    path: 'timdb',
    description: "In Java, graph data structure and DFS to find Bacon path between two actors. Created a GUI using HTML/CSS and Javascript"

  },
  {
    key: 3,
    name: 'The Admiral',
    path: 'admiral',
    description: "In Unity/C#, created a social deduction game based on an element of path finding and exploration. "
  },
]
class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showProject: "" };
  }
  toggleProject = project => {
    if (project !== "") {
      this.setState({
        showProject: project
      });
    } else {
      this.setState({
        showProject: ""
      });
    }
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const renderedProjects =
      projects.map(project =>
        (<div class='single-project' onClick={() => this.nextPath(`/projects/${project.path}`)} >
          <img src={require(`../resources/ProjectsPage/${project.path}.png`)} alt="Stars" />
          <br></br>
          <span>{project.name}</span>
        </div >))
    return (
      <div class="page-wrapper">
        <div class="page" id="projects-page">

          <div class='page-content'>
            <h2 class='page-title'>Projects</h2>
            <section class='projects-grid'>
              {renderedProjects}
            </section>
          </div>
          {/* <section class='page-content'>
            <div class="two-panel">
              <ul class="two-panel-left">
                <li>
                  <button
                    className={
                      this.state.showProject === "limerick"
                        ? "selected"
                        : "not-select"
                    }
                    onClick={() => this.toggleProject("limerick")}
                  >
                    Limerick Generator
                </button>
                </li>
                <li>
                  <button
                    className={
                      this.state.showProject === "scisquare"
                        ? "selected"
                        : "not-select"
                    }
                    onClick={() => this.toggleProject("scisquare")}
                  >
                    Fronted Developer SciSquare
                </button>
                </li>
                <li>
                  <button
                    className={
                      this.state.showProject === "castyr"
                        ? "selected"
                        : "not-select"
                    }
                    onClick={() => this.toggleProject("castyr")}
                  >
                    Fullstack Developer Castyr
                </button>
                </li>
                <li>
                  <button
                    className={
                      this.state.showProject === "search"
                        ? "selected"
                        : "not-select"
                    }
                    onClick={() => this.toggleProject("search")}
                  >
                    Search - CSCI 0180
                </button>
                </li>
                <li>
                  <button
                    className={
                      this.state.showProject === "game"
                        ? "selected"
                        : "not-select"
                    }
                    onClick={() => this.toggleProject("game")}
                  >
                    Game - CSCI 0170
                </button>
                </li>
              </ul>
              {this.state.showProject === "" && <Default />}
              {this.state.showProject === "limerick" && <Limerick />}
              {this.state.showProject === "scisquare" && <SciSquare />}
              {this.state.showProject === "castyr" && <Castyr />}
              {this.state.showProject === "search" && <Search />}
              {this.state.showProject === "game" && <Game />}
            </div>

          </section> */}
          <Link to="/" class="back-link">
            Main Menu
                    </Link>
        </div>
      </div>
    );
  }
}


export class Default extends Component {
  render() {
    return (
      <div className="two-panel-right">
        Default
        <p>Here are some of my projects</p>
      </div>
    );
  }
}

export class Limerick extends Component {
  render() {
    return (
      <div className="two-panel-right">
        Limerick Generator - CSCI 1470 - Python
        <p>
          For the Deep Learning Final Projecy, my group decided to create a
          neural network that produces limericks. The corpus of data was
          retrieved by scraping limericks using BeautifulSoup. Then, the poems
          were preprocessed by converting each word into its repsective phoneme
          by using the CMU Pronouncing Dictionary. After filtering limericks
          that were too long or too short, we fed the data in to an LSTM from
          the Tensorflow library and trained for 50 epochs. We were able to
          achieve a perplexity of about 4.1 after 50 epochs and here are some
          sample limericks below:
        </p>
      </div>
    );
  }
}
export class SciSquare extends Component {
  render() {
    return (
      <div className="two-panel-right">
        SciSquare - JavaScript
        <p>
          I am currently the Vice President of Product Development for
          SciSquare. SciSquare is a lab management platform for principle
          investigators that aggregates tools for organizing projects,
          purchasing lab materials, and communicating with lab technicians. As
          my role as vice president, I have communicated ideas and plans moving
          forward with the CFO and CTO and have focused on recruiting frontend
          engineers to work on this startup. I have also completed some tasks
          for the frontend such as implementing time, location, and description
          fields for new events on the calendar page and implementing
          functionality for filtering calendar events by category. I am
          currently working on creating the framework for our marketplace.
        </p>
      </div>
    );
  }
}
export class Castyr extends Component {
  render() {
    return (
      <div className="two-panel-right">
        Castyr - JavaScript
        <p>
          I am also working on a podcast platform for college students with an
          emphasis on making it easy to create personal podcasts and finding
          communities of listeners with similar interests. My role can be
          loosely described as a fullstack engineer. As a fullstack engineer I
          have implemented and tested routes using Express and Postman, setup
          documents in MongoDB to manage data on podcasts, users, comments, and
          posts, and have created and developed the framework home page and
          community page using React.
        </p>
      </div>
    );
  }
}
export class Search extends Component {
  render() {
    return (
      <div className="two-panel-right">
        Search - CSCI 0180 - Java
        <p>
          Search was a partner project for my Data Structure and Algorithms
          course. By processing XML files of wikipedia entries, we created a
          search engine that returned the top ten results given keywords. In
          addition to our basic implementation of the search engine, we also
          implemented a basic version of Google's PageRank algorithm that ranked
          pages with consideration of links.
        </p>
      </div>
    );
  }
}
export class Game extends Component {
  render() {
    return (
      <div className="two-panel-right">
        Game - CSCI 0180 - OCaml
        <p>
          Game was a partner project for my Functional Programming course. We
          first created a playable Connect4 game for two human players that
          displayed the board state each time a move was made. Then, we
          implemented an AI that could play against human players or other AI
          players. This AI was first created using the minimax algorithm to
          determine the next move. After this was implemented, we also
          implemented alpha-beta pruning to create a more intelligent AI.
        </p>
      </div>
    );
  }
}

export class YSP extends Component {
  render() {
    return (
      <div className="two-panel-right">
        YSP Faculty Webscraper - Python
        <p></p>
      </div>
    );
  }
}
export default ProjectsPage;
