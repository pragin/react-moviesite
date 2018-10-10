import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "../css/custom.css";

export default class Footer extends Component {
  render() {
    const github = (
      <a href="https://github.com/pragin" target="blank">
        <FontAwesomeIcon className="social" icon={faGithub} size="3x" />
      </a>
    );
    const twitter = (
      <a href="https://twitter.com/Pragin6" target="-_blank">
        <FontAwesomeIcon className="social" icon={faTwitter} size="3x" />
      </a>
    );
    const linkedIn = (
      <a href="https://www.linkedin.com/in/praginmartin/" target="_blank">
        <FontAwesomeIcon className="social" icon={faLinkedin} size="3x" />
      </a>
    );
    const facebook = (
      <a href="https://www.facebook.com/praginmartin" target="_blank">
        <FontAwesomeIcon className="social" icon={faFacebook} size="3x" />
      </a>
    );

    const website = (
      <a
        className="website-link"
        href="http://www.praginfernando.com"
        target="_blank"
      >
        Pragin Martin
      </a>
    );
    return (
      <div className="footer">
        <div className="social-wrapper">
          {linkedIn}
          {twitter}
          {facebook}
          {github}
        </div>
        <div className="website-wrapper">Developed By: {website}</div>
      </div>
    );
  }
}
