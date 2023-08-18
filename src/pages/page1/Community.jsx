import React from 'react'
import './Community.scss';
import { AiOutlineLeft ,AiOutlineRight} from "react-icons/ai";
import CommunityCard from './CommunityCard';
function Community() {
  return (
    <div className='community'>
      <div className="community-bar">
        <span>Community</span>
        <div className='bar-icons'>
          <AiOutlineLeft/>
          <AiOutlineRight/>
        </div>
      </div>
      <CommunityCard/>
    </div>
  )
}

export default Community;