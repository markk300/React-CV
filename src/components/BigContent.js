import React, { useState } from "react";
import add from "../assets/add.png";
import remove from "../assets/remove.png";
import "../deskstopStyle.css";
const BigContent = () => {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  return (
    <ul className="bigContent">
      <li>
        <div className="group" data-group="jobMobile">
          <div className="titleButton" onClick={() => setPressed1(!pressed1)}>
            <h3>Work experience</h3>
            <img src={add} alt="Add" className="img imgMobile" />
          </div>

          <ul className="noStyleList moreMobile" id="workList">
            <li>
              <div className="group" data-group="job1">
                <h4 className="company">
                  Microsoft <span id="date">(2020 - present)</span>
                </h4>
                <div
                  className="toFlexButton"
                  onClick={() => setPressed1(!pressed1)}
                >
                  <p className="text">Ceo, Product owner & Tech Lead</p>
                  <img
                    src={pressed1 ? remove : add}
                    alt="Add"
                    className="img"
                  />
                </div>
                <hr className={`'line' ${pressed1 ? "hidden" : "visible"}`} />
                <div
                  className={` 'more' ${
                    pressed1 ? "more visible coll  " : " hidden coll "
                  }`}
                  style={pressed1 ? { height: "193px" } : { height: "0px" }}
                >
                  <div className="deleteLine">
                    <p>
                      Details about your position
                      <br />
                      some more details...
                      <br />
                      List of projects :<br />
                      - Resume website ( you are currently on this website, it
                      was built in 3 days )<br />-{" "}
                      <a href="http://link.net">Project</a>
                      <br />
                      <br />
                      <br />
                      Some of the challenges I had to overcome :<br />
                      - implement it in React
                      <br />
                      - figure out Firebase
                      <br />
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="group" data-group="job2">
                <h4 className="company">
                  Other company <span id="date">(2020 - 2021)</span>
                </h4>
                <div
                  className="toFlexButton"
                  onClick={() => setPressed2(!pressed2)}
                >
                  <p className="text">Consultant and Full Stack Developer</p>
                  <img
                    src={pressed2 ? remove : add}
                    alt="Add"
                    className="img"
                  />
                </div>
                <hr className={`'line' ${pressed2 ? "hidden" : "visible"}`} />
                <div
                  className={` 'more' ${
                    pressed2 ? "more visible coll  " : " hidden coll "
                  }`}
                  style={pressed2 ? { height: "193px" } : { height: "0px" }}
                >
                  <div className="deleteLine">
                    <p>
                      Details about your position
                      <br />
                      some more details...
                      <br />
                      List of projects :<br />
                      - Resume website ( you are currently on this website, it
                      was built in 3 days )<br />-{" "}
                      <a href="http://link.net">Project</a>
                      <br />
                      <br />
                      <br />
                      Some of the challenges I had to overcome :<br />
                      - implement it in React
                      <br />
                      - figure out Firebase
                      <br />
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="group" data-group="eduMobile">
          <div className="titleButton" onClick={() => setPressed3(!pressed3)}>
            <h3>Education</h3>
            <img src={add} alt="Add" className="img imgMobile" />
          </div>
          <ul className="noStyleList moreMobile" id="eduList">
            <li>
              <div className="group" data-group="edu1">
                <h4 className="company">
                  MIT University in United States{" "}
                  <span id="date">(2013 - 2015)</span>
                </h4>
                <div
                  className="toFlexButton"
                  onClick={() => setPressed3(!pressed3)}
                >
                  <p className="text">Graphic and multimedia design</p>
                  <img
                    src={pressed3 ? remove : add}
                    alt="Add"
                    className="img"
                  />
                </div>
                <hr className={`'line' ${pressed3 ? "hidden" : "visible"}`} />
                <div
                  className={` 'more' ${
                    pressed3 ? "more visible coll  " : " hidden coll "
                  }`}
                  style={pressed3 ? { height: "193px" } : { height: "0px" }}
                >
                  <div className="deleteLine">
                    <p>Details about education....</p>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default BigContent;
