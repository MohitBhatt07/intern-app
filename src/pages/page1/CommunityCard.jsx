import React from "react";
import "./CommunityCard.scss";

const data = [
  "../../../public/assets/community/1.jpg",
  "../../../public/assets/community/2.jpg",
  "../../../assets/community/3.png",
  "/assets/community/4.png",
];

const ComCard = (props) => {
  return (
    <div className="card-item">
      <img src={props.src} alt=""></img>
    </div>
  );
};
function CommunityCard() {
  return (
    <div className="community-cards">
      {data.map((item) => (
        <ComCard src={item} />
      ))}
      <div className="card-item">
        <img src="/assets/community/5.png" alt="" />
        <div className="card-overlay">
          <div className="more">
            <span>+29 more</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
