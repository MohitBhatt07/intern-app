import React, { useContext } from "react";
import "./Sidebar.scss";
import { PiWindowsLogoBold } from "react-icons/pi";
import { GiChurch } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import {FaUserGroup} from "react-icons/fa6";
import{TfiWrite} from 'react-icons/tfi';
import {IoMdSettings} from 'react-icons/io';
import {PiSignOutBold} from 'react-icons/pi';
import ActiveContext from "../../Context/Context";
import Profile from '../../assets/profile.png';
function Sidebar() {
  const ctx = useContext(ActiveContext);
  
  const sidebarClass = ctx.isActive ? '' : 'inactive';

    return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="idItem">
        <div className="image">
          <img src={Profile} alt="profile" onClick={ctx.onTap}></img>
        </div>
        <div className="nameId">
          <span>Music Theory</span>
          <span >musiclearner@musicme</span>
        </div>
      </div>

      <div className="tabs">
        <div className="item">
          <div className="icon">
            <PiWindowsLogoBold/>
          </div>
          <span>Practices</span>
        </div>
        <div className="item">
          <div className="icon">
            <GiChurch />
          </div>
          <span>Courses</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdVerified />
          </div>
          <span>Progress</span>
        </div>
        <div className="item">
          <div className="icon">
            <FaUserGroup />
          </div>
          <span>Instructors</span>
        </div>
        <div className="item">
          <div className="icon">
            <TfiWrite />
          </div>
          <span>Music Notes</span>
        </div>

        <div className="bottom-tabs">
        <div className="item">
          <div className="icon">
            <IoMdSettings/>

          </div>
          <span>Settings</span>
        </div>
        <div className="item">
          <div className="icon">
            <PiSignOutBold/>
          </div>
          <span>Sign out</span>
        </div>
      </div>       
      </div>

     
    </div>
  );
}

export default Sidebar;
