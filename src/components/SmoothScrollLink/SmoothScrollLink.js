import React from "react";
import { HashLink } from "react-router-hash-link";

const SmoothScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    const target = document.getElementById(to.substring(1));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HashLink smooth to={to} onClick={handleClick}>
      {children}
    </HashLink>
  );
};

export default SmoothScrollLink;
