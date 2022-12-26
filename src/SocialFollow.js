import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/ashok-kamath/"
        className="linkedin social" target = "_blank"
        rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x"
         />
      </a>
      <a href="https://github.com/ashokkamath100/"
        className="github social" target = "_blank"
        rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x"
         />
      </a>
      <a href="https://www.instagram.com/ashok_kamath/"
        className="instagram social" target = "_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x"
        target = "_blank" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social" target = "_blank"
        rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x"
         />
      </a>
      <a href="https://twitter.com/ashok_kamath19" 
      className="twitter social" target = "_blank"
      rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" 
         />
      </a>
      
    </div>
  );
}