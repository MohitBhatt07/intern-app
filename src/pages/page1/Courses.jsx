import React, { useContext } from "react";
import "./Courses.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFileMusic } from "react-icons/bs";
import { BsMusicNote } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import CourseContent from "./CourseContent";
import MusicTheories from "../page2/MusicTheories";
import ActiveContext from "../../Context/Context";


function Courses() {
  const ctx = useContext(ActiveContext);
  const classes = ctx.isActive ? '' :'inactiveBar';
  return (
    <div className={`course-page ${classes}`}>
      <div className="top-bar">
        <h1>Music Lesson</h1>
        <div className="side-content">
          <div className="search-bar">
            <BiSearchAlt2 />
            <input placeholder="Search for songs or music notes" />
          </div>
          <BsMusicNote size={20} />
          <BsFileMusic size={20} />
          <FiMessageSquare size={20} />
        </div>
      </div>
      <CourseContent/>
      
      <MusicTheories/>
    </div>
  );
}

export default Courses;
