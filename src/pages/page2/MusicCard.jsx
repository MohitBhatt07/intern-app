import React from "react";
import Card from "../../Ui/Card";
import "./MusicCard.scss";

function MusicCard(props) {
  return (
    <div className="main-music-card">
      <Card>
        <div className="mcard-icon">
          <span>{props.item.icon}</span>
        </div>
        <div className="music-card">
          <div className="mcard-image">
            <img src={props.item.src} alt="" />
          </div>
          <div className="right-side-details">
            <div className="name-icon">
              <span>{props.item.name}</span>
            </div>

            <div style={{fontSize:'0.7rem'}}>{props.item.description1}</div>
            <div className="rod">
              <div className="filler"></div>
            </div>
            <div style={{fontSize:'0.6rem',marginBottom:'10px'}}>{props.item.description2}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MusicCard;
