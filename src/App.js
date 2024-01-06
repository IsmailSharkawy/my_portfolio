import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"; // Adjust the path as necessary
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./styles/animate.css"; // Import animate.css
import "./styles/bootstrap.css"; // Import bootstrap.css
import "./styles/styles.css"; // Import styles.css
import "aos/dist/aos.css"; // Import AOS CSS

import TopContainer from "./components/TopSection/TopSection";
import AboutMe from "./components/AboutMe/AboutMe";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Resume from "./components/Resume/Resume";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <TopContainer />
              <AboutMe />
              <WhatIDo />
              <Resume />
              <GetInTouch />
            </>
          }
        />
        {/* Define new routes here */}
        {/* <Route path="/blogs" component={BlogsPage} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/videos" component={VideosPage} /> */}
        {/* Add a Route here for any new page you create */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
