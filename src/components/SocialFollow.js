import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a
        href="https://www.linkedin.com/in/maximiliano-mainero-a91852169/"
        className="linkedin social"
        target="_blank" rel="noreferrer" 
      >
        <FontAwesomeIcon icon={faLinkedinIn} color='gray'/>
      </a>
      <a href="https://github.com/maximainero" style={{'margin-left': '10px'}} target="_blank" rel="noreferrer" className="github social">
        <FontAwesomeIcon icon={faGithub} color='gray' />
      </a>
    </div>
  );
}