import React from "react";
import avatarImage from "../../images/unanimated_wave.png"; // Adjust the path to your image
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/styles.css";
import { TypeAnimation } from "react-type-animation";
function getMarginSize(index) {
  // Define your margin logic here based on the letter
  // For example, if the letter is "W" or "M" we give it more margin
  if (index === 0 || index === 8) {
    return "10px";
  }
}
const TopContainer = () => {
  return (
    <section className="top-container" id="home">
      <div className="intro-container">
        <img className="avatar" src={avatarImage} alt="Avatar" />
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hi! I am Ismail",
          ]}
          wrapper="h1"
          speed={10}
          style={{ fontSize: "4em", display: "block" }}
        />

        <div className="key-wrapper subtitle animated fadeInUp delay-05s">
          {[
            "A",
            "S",
            "O",
            "F",
            "T",
            "W",
            "A",
            "R",
            "E",
            "E",
            "N",
            "G",
            "I",
            "N",
            "E",
            "E",
            "R",
          ].map((letter, index) => {
            // Function to determine margin size based on the letter
            const marginSize = getMarginSize(index);

            return (
              <div
                key={index}
                className={`typeR3 button${index + 2}`}
                style={{ marginRight: marginSize }}
              >
                <div className="buttonFace">{letter}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopContainer;
