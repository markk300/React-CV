import React from 'react'
import '../deskstopStyle.css'
import dummyuserpx from '../assets/dummy-user-px.jpg'
export const SideContent = () => {
  return (
    <div>
        <ul className="sideContent">
                <div className="group" data-group="info">
                    <div className="titleButton" onClick="actionButtonMobile('info')">
                        <h3 className="infoTitle">BASIC INFO</h3>
                        <img src={dummyuserpx} className="img imgMobile imgInfo" alt='profileimg'></img>
                    </div>
                    <div className="moreMobileInfo">
                        <div>
                            <li>
                                <div>
                                    <h3 className="mobileTitle">Contact</h3>
                                    
                                    
                                    <p className="contact" id="email">mrdamarkomm@gmail.com</p>

                                    
                                    <p className="contact" id="phone">065-039-061</p>
                                     <p className="contact" >
                                        <a href="https://www.linkedin.com/in/marko-mrda-a2011321b/">Linkedin</a>
                                    </p> 
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 className="mobileTitle">About me</h3>

                                   
                                    <p className="about" id="aboutMe">
                                    I love to code because if I can think it, I can make it a reality. 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="group" data-group="techSkills">
                                    <h3 className="mobileTitle">Key Technical skills</h3>
                                    <ul className="styledList" id="techList">

                                        
                                        <li>React</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>NodeJS</li>
                                        <li>React Native</li>
                                        <li>Firebase</li>
                                        <li>Node.js</li>
                                    </ul>

                                </div>

                            </li>
                            <li>
                                <div className="group" data-group="softSkills">
                                    <h3 className="mobileTitle">Soft skills</h3>

                                    
                                    <ul className="styledList" id="softList">
                                        <li>Goal Oriented</li> 
                                        <li>Positive Influence on the team</li>
                                        <li>More soft skills...</li>
                                    </ul>
                                </div>

                            </li>
                            <li>
                                <div className="group" data-group="language">
                                    <h3 className="mobileTitle">Languages</h3>

                                    

                                    <ul className="styledList" id="languageList">
                                        <li>Bosnian/Croatian/Serbian</li>
                                        <li>English</li>
                                        <li>German</li>
                                    </ul>

                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </ul>
    </div>
  )
}
