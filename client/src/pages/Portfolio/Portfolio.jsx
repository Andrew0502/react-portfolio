import React from 'react';
import "./portfoliostyle.css";
import Project1 from "./Project1.png";
import Password from "./password-generator.png";
import NoteTaker from "./NoteTaker.png";
import WeatherDashboard from "./WeatherDashboard.png";
import WorkoutTracker from "./WorkoutTracker.png";
import EmployeeDirectory from "./EmployeeDirectory.png";

const Portfolio = () => {
    return (
        <>
       <section id="Portfolio">
        <div id="PortfolioRow">

                <div class="col-sm-12">
                    <p id="PortfolioHeader">Portfolio</p> 
                    <p>Titles link to Github Repos. Thumbnails link to deployed apps.</p> 
                </div>

        </div>
        
        <div className="row" id="PortfolioRow">

            <div className="col-sm-6">  
                <a href="https://github.com/Andrew0502/project-1"><h4>What's for Dinner!?</h4>
                </a>
                <a href="https://github.com/Andrew0502/project-1"><img src={Project1} alt="Project 1" class="PortfolioPics"/>
                </a>
            </div> 

            <div className="col-sm-6">  
                  <a href="https://github.com/Andrew0502/andrew_password_generator"><h4>Password Generator</h4>
                  </a>
                  <a href="https://andrew0502.github.io/andrew_password_generator/"><img src={Password} alt="Project 1" class="PortfolioPics"/>
                  </a>
            </div> 
        </div>

        <div><br/></div>
        

        <div className="row" id="PortfolioRow">

            <div className="col-sm-6"> 
                <a href="https://github.com/Andrew0502/weather-board"><h4>Weather Dashboard</h4>
                </a>
                <a href="https://andrew0502.github.io/weather-board/"><img src={WeatherDashboard}  alt="Weather Dashboard" class="PortfolioPics"/>
                </a>
            </div> 

            <div className="col-sm-6">  
                <a href="https://github.com/Andrew0502/note-taker-2.0"><h4>Note Taker / Saver</h4>
                </a>
                <a href="https://github.com/Andrew0502/note-taker-2.0/"><img src={NoteTaker} alt="Note Taker" class="PortfolioPics"/>
                </a>
            </div> 
  
        </div>
        
        <div><br/></div>

        <div className="row" id="PortfolioRow">

            <div className="col-sm-6"> 
              <a href="https://github.com/Andrew0502/workout-tracker"><h4>Workout Tracker</h4>
              </a>
              <a href="https://workout-tracker-43537457.herokuapp.com/"><img src={WorkoutTracker}  alt="Workout Tracker" class="PortfolioPics"/>
            </a>
            </div> 

            <div className="col-sm-6">  
              <a href="https://github.com/Andrew0502/worker-directory"><h4>Employee Directory</h4>
              </a>
              <a href="https://7j647.github.io/React-Employee-Directory/"><img src={EmployeeDirectory} alt="Updated Portfolio" class="PortfolioPics"/>
              </a>  
              </div> 
              
        </div>

        

        

        </section>  
        
        </>
        
    );
};

export default Portfolio;