import React, { Component } from "react";
import "../css/ContactPage.css";
import { Link } from "react-router-dom";
function ContactPage(props) {
    return (
        <div class="page-wrapper">
            <div class="page" id="contact-page" >
                <div class='page-content' >
                    <h2 id='title-contact'>Contact</h2>
                    <div class="page-body">
                        <div class='credits-wrapper'>
                            <ul class='credits-left'>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>GitHub</li>
                                <li>Resume</li>
                            </ul>
                            <ul class='credits-right'>
                                <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sorincho@gmail.com">SORIN CHO</a></li>
                                <li><a href="https://www.linkedin.com/in/sorin-cho-158905178/">SORIN CHO</a></li>
                                <li><a href="https://github.com/SorinCho">SORIN CHO</a></li>
                                <li>SORIN CHO</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <Link to="/" class="back-link" id='back-link-white'>
                    Main Menu
                    </Link>
            </div>
        </div>

    );
}
export default ContactPage;