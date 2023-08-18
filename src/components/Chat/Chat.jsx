import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Profile from '../../assets/profile.png';
import Chat2 from '../../assets/chat2.jpg';
import Chat3 from '../../assets/chat3.jpg';
import Chat4 from '../../assets/chat4.jpeg';
import "./Chat.scss";
import {IoSend} from 'react-icons/io5';

function Chat() {
  return (
    <div className="chat-panel">
      <div className="topbar">
        <span>Music Chat</span>
        <div className="icon">
          <BsChevronDown />
        </div>
      </div>
      <div className="chats">
        <div className="chat">
          <img className="image" alt="" src={Profile}></img>
          <div className="details">
            <div className="detail">
              <span>Adam Smith</span>
              
            </div>
            <div className="message">
             <span className="time">9:28 AM</span>
              <span>I need help with music notes</span>
            </div>
          </div>
        </div>
        <div className="chat">
          <img className="image" alt="" src={Chat2}></img>
          <div className="details">
            <div className="detail">
              <span>Emily Brown</span>
              
            </div>
            <div className="message">
            <span className="time">9:29 AM</span>
              <span>Is music theory different for each instrument?</span>
            </div>
          </div>
        </div>

        <div
          className="chat"
          style={{ justifyContent: "flex-end", paddingRight: "10px" }}
        >
          <div className="details">
            
            <div className="message">
              <span className="time">You</span>   
              <span>Hey guys,let's practice more to improve</span>
            </div>
          </div>
        </div>

        <div className="chat">
          <img className="image" alt="" src={Chat3}></img>
          <div className="details">
            <div className="detail">
              <span>Adam Smith</span>
            </div>
            <div
              className="message"
              style={{ width: "3vw", marginBottom: "2px" }}
            >
              <span>haha</span>
            </div>

            <div className="message">
              <span>But I had to tune my</span>
              <span className="time">9:32 AM</span>
            </div>
          </div>
        </div>

        <div className="chat">
          <img className="image" alt="" src={Chat4}></img>
          <div className="details">
            <div className="detail">
              <span>Music Theories</span>
              
            </div>
            <div className="message">
              <span className="time">Beginner</span>
              <span>Learn the basics</span>
            </div>
          </div>
        </div>

        <div
          className="chat"
          style={{ justifyContent: "flex-end", paddingRight: "10px" }}
        >
          <div className="details">
            <div className="message">
              <span className="time">MusicMentor</span>
              <span>Understand Music Notes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input placeholder="Type your comment.."/>
        <IoSend color="grey"/>
      </div>
    </div>
  );
}

export default Chat;
