import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSpotify,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline social-buttons animated fadeIn">
              <li>
                <a
                  id="facebook"
                  href="https://www.facebook.com/ismail.sharkawy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  id="twitter"
                  href="https://twitter.com/Ismai1LSharkawy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  id="spotify"
                  href="https://play.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>
              <li>
                <a
                  id="github"
                  href="https://github.com/IsmailSharkawy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/ismailelsharkawy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p
                style={{
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  marginTop: "40px",
                  color: "#fff",
                }}
              >
                <FontAwesomeIcon icon={faCopyright} /> Ismail El-Sharkawy 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
