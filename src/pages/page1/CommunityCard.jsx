import React from "react";
import "./CommunityCard.scss";
import first from '../../assets/community/1.jpg';
import second from '../../assets/community/2.jpg';
import third from '../../assets/community/3.png';
import fourth from '../../assets/community/4.png';
import fifth from  '../../assets/community/5.png';
const data = [
  first ,
  second,
  third,
  fourth
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
        <img src={fifth} alt="" />
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
