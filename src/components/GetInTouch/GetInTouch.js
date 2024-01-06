import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function GetInTouch() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <div className="email-icon" data-aos="zoom-out-down">
              <FontAwesomeIcon icon={faPaperPlane} className="wp6" />
            </div>
            <h2>Get In Touch!</h2>
            <p>
              Whether you have an idea for a project or just want to chat, feel
              free to shoot me an email!
            </p>
            <p style={{ marginTop: "40px" }}>
              <a
                id="email-button"
                href="mailto:ismail@aucegypt.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
