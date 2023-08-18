import React from "react";
import Card from "../../Ui/Card";
import "./CourseContent.scss";
import MainCard from "../../Ui/MainCard";
import{GoDotFill} from 'react-icons/go';
import {RiTimerFill} from 'react-icons/ri';
import Community from "./Community";
import Image from '../../assets/chat2.jpg';
function CourseContent() {
  return (
    <div className="course-content">
      <Card>
        <div className="course-content-card">
        <div className="topbar">
          <span>Music Basics</span>
          <div className="side-content">
            <div className="image"> 
              <img src={Image} alt=""></img>
            </div>
            <span>John Mayer</span>
          </div>
        </div>
        <MainCard/>
        <div className="bottom-bar">
          <div className="bottom-left">
              <GoDotFill/>
              <span>50 lessons available</span>
          </div>
          <div className="bottom-right">
            <RiTimerFill color="grey"/>
            <span>Ends in: 45min.</span>
          </div>
        </div>
        </div>
      </Card>
      <Community/>
    </div>
  );
}

export default CourseContent;
