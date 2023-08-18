import React from "react";
import "./MainCard.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillMicMuteFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";

function MainCard() {
  return (
    <div className="main-card">
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
