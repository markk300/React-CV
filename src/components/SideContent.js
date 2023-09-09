import React from 'react'

export const SideContent = () => {
  return (
    <div>
        <ul class="sideContent">
                <div class="group" data-group="info">
                    <div class="titleButton" onclick="actionButtonMobile('info')">
                        <h3 class="infoTitle">BASIC INFO</h3>
                        <img src="./src/img/add.png" class="img imgMobile imgInfo"></img>
                    </div>
                    <div class="moreMobileInfo">
                        <div>
                            <li>
                                <div>
                                    <h3 class="mobileTitle">Contact</h3>
                                    
                                    
                                    <p class="contact" id="email">mrdamarkomm@gmail.com</p>

                                    
                                    <p class="contact" id="phone">065-039-061</p>
                                     <p class="contact" >
                                        <a href="https://www.linkedin.com/in/marko-mrda-a2011321b/">Linkedin</a>
                                    </p> 
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 class="mobileTitle">About me</h3>

                                   
                                    <p class="about" id="aboutMe">
                                    I love to code because if I can think it, I can make it a reality. 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="group" data-group="techSkills">
                                    <h3 class="mobileTitle">Key Technical skills</h3>
                                    <ul class="styledList" id="techList">

                                        
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
                                <div class="group" data-group="softSkills">
                                    <h3 class="mobileTitle">Soft skills</h3>

                                    
                                    <ul class="styledList" id="softList">
                                        <li>Goal Oriented</li> 
                                        <li>Positive Influence on the team</li>
                                        <li>More soft skills...</li>
                                    </ul>
                                </div>

                            </li>
                            <li>
                                <div class="group" data-group="language">
                                    <h3 class="mobileTitle">Languages</h3>

                                    

                                    <ul class="styledList" id="languageList">
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
