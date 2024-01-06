import React from "react";

function WhatIDo() {
  return (
    <section class="section-c" id="services">
      <div class="what-i-do" data-aos="zoom-in">
        <strong>WHAT I DO</strong>
      </div>
      <div class="container">
        <div data-aos="fade-right">
          <i class="icon fa fa-laptop fa-5x"></i>
          <h3>Designing</h3>
          <p>
            Leveraging a blend of technical acumen and creative flair, I craft
            user-centric designs that embody functionality and aesthetic appeal.
          </p>
        </div>
        <div data-aos="flip-up">
          <i class=" icon fa fa-code fa-5x"></i>
          <h3>Development</h3>
          <p>
            With expertise in React JS and Django/Flask, I build seamless
            full-stack solutions that bring complex ideas to life in the digital
            landscape."
          </p>
        </div>

        <div data-aos="fade-left">
          <i class="icon fa fa-lightbulb-o fa-5x"></i>
          <h3>Technical Craftsmanship</h3>
          <p>
            Dedicated to engineering excellence, I bring meticulous attention to
            crafting scalable code and elegant solutions. With a zeal for both
            front-end and back-end development, I am committed to delivering
            software that not only functions seamlessly but also creates
            engaging user experiences. My approach is thorough, balancing
            technical precision with innovative thinking
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
