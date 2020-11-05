import React from "react";
// import Profile from "./Profile.JPG";
// import "./HomeStyle.css";



const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <section id="AboutMe">
          <div className="row">
            <div className="col-sm-12">
              <p id="AboutMeHeader">About</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="underline"></div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="img img-thumbnail float-left mr-3">
              <img id="ProfileImage" src={Profile} alt="Myself, at my graduation from Berry College in 2016" />

              <p>
                Hello! I am a technology student who is attending the Georgia Tech Coding Bootcamp to broaden my horizons.
                I live in Ringgold, Georgia with my parents. I am an analytical thinker with a eye for detail. I thrive
                on feedback and am a joy to work with. Don't just ask me ask my references. Before Coronavirus, I worked as an 
                intern at Unum in Chattanooga, TN. I was also finishing my degree in management of information systems. In 2016 I graduated
                with a degree in international studies from Berry College, in Rome, Georgia. My work experiences include 7 months at Walt
                Disney World Resort in Orlando, Florida. I chose to take this bootcamp to boost my skills and start a career.
              </p>
            </div>
          </div>

          <div className="row">
            <p>
              My skills include React, Javascript, Node.js, CSS, MySQL, MongoDB, Express.js, Customer Service, and some experience with International Business.
              I have a degree in International Studies from Berry College and a degree in Management of Information Systems from Dalton State College. 
              My most significant work experiences are working for Unum insurance company and for Walt Disney World resorts. Both as and Intern. You can connect with Me on{" "}
              <a href="www.linkedin.com/in/andrew-marcus1">
                LinkedIn
              </a>{" "}
              and view his website portfolio at{" "}
              <a href="https://github.com/7J647"> Github</a>. Also, here is a
              link to Jeff's{" "}
              <a href={pdf} target="_blank" rel="noreferrer" >Resume.
              </a>{" "}
              Thank you for visiting!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;