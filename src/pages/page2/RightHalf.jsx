import React from "react";
import "./RightHalf.scss";
import { FaClock } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

function RightHalf() {
  return (
    <div className="right-half">
      <div className="rh-image">
        <img src="/assets/second.jpeg" alt="" />
      </div>
      <div className="rh-bottom">
        <div className="rh-title">Music Instruments</div>
        <div className="learn-card">
          <div className="image">
            <img src="/assets/bottom.jpg" alt=""></img>
          </div>
          <span>Learn About</span>
        </div>
        <div className="points">
          <FaClock size={12} />
          <span>Track your practice time</span>
        </div>
        <div className="points">
          <AiTwotoneStar size={12} />
          <span>Rate your favourite</span>
        </div>
        <div className="rh-about">
          <h4>About the Course</h4>
          <div className="about-content">
            Learn music and theory to become a skilled musician. This course
            covers everything from basic to advanced techniques,helping you play
            with instruments with confidence .
          </div>
        </div>
        <div className="last-buttons">
          <div className="learn-card" style={{width:'230px',padding:'9px 0px'}} >
            <span style={{marginLeft:'60px'}}>Leave a review</span>
          </div>
          <div className="learn-card" style={{width:'230px'}}>
            <span style={{marginLeft:'60px'}}>Continue Learning</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightHalf;
