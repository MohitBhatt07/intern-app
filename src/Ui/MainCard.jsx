import React from "react";
import "./MainCard.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillMicMuteFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCallEnd ,MdOutlineZoomOutMap} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function MainCard() {
  return (
    <div className="main-card">
      <div className="top-right-content">
        <div className="top-right">
        <MdOutlineZoomOutMap color={"white"}/>
      </div>
      <div className="top-right">
        <IoMdSettings color={"white"}/>
      </div>
      </div>
      
      <div className="bottom-player">
        <div className="player-icons">
          <AiFillPlayCircle />
        </div>
        <div className="player-icons">
          <BsFillMicMuteFill />
        </div>
        <div className="player-icons">
          <BsFillChatFill />
        </div>
        <div className="player-icons">
          <BsThreeDotsVertical />
        </div>
        <div className="player-icons">
          <MdCallEnd />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
