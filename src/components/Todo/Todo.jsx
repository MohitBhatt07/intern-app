import React from "react";
import "./Todo.scss";
import { AiOutlineRight } from "react-icons/ai";
import { PiBookOpenTextFill } from "react-icons/pi";
import { HiMiniHome } from "react-icons/hi2";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Todo() {
  return (
    <div className="list">
      <div className="item">
        <div className="icon">
          <PiBookOpenTextFill color="white" size={"10"} />
        </div>
        <div className="content">
          <span>Important Practices</span>
          <AiOutlineRight size={"10"}  color="grey"/>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <HiMiniHome color="white" size={"10"} />
        </div>
        <div className="content">
          <span>Assignments</span>
          <AiOutlineRight size={"10"}  color="grey"/>
        </div>
        
      </div>
      <div className="item">
        <div className="icon">
          <HiMiniPencilSquare color="white" size={"10"} />
        </div>
        <div className="content">
          <span>Music Notes</span>
          <AiOutlineRight size={"10"} color="grey"/>
        </div>
      </div>
    </div>
  );
}

export default Todo;
