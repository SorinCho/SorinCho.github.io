import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/SingleProjectPage.css"
import { projects } from "./ProjectsPage"
export const SingleProjectPage = ({ match }) => {
    const { projectName } = match.params;
    console.log(projectName)
    const project = projects.find(proj => proj.path === projectName);

    if (!project) {
        return (
            <section>
                <h2>Project not found!</h2>
            </section>
        )
    }

    return (
        <div class="page-wrapper">
            <div class="page" id="single-projects-page">

                <div class='page-content'>
                    <h2>{project.name}</h2>
                    {project.description}
                </div>
                <div class="back-wrapper">
                    <Link to="/projects" class="common-link">
                        Projects
                    </Link>
                    <br></br>
                    <Link to="/" class="common-link">
                        Main Menu
                    </Link>
                </div>
            </div>
        </div>
    )
}