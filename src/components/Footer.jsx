import React, { Component } from "react";
import "../css/Footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>Footer component</div>
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sorincho@gmail.com">
          Email
        </a>
        <a href="https://www.linkedin.com/in/sorin-cho-158905178/">linkedin</a>
        <a href="https://github.com/SorinCho">github</a>
        <div>blueberry my headband</div>
      </footer>
    );
  }
}
export default Footer;
