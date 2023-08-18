import React, { useContext } from 'react'
import {FaMusic} from 'react-icons/fa';
import'./MusicTheories.scss';
import {LuNewspaper} from 'react-icons/lu';
import {PiLightbulbFill} from 'react-icons/pi';
import {FaBook} from 'react-icons/fa';
import {BiSolidBookmark} from 'react-icons/bi';
import MusicCard from './MusicCard';

import RightHalf from './RightHalf';


const data = [{
  src : '/assets/musicLib/guitar.jpg',
  name : 'Latest News',
  description1 : 'Discover the latest updates',
  description2 : 'Stay up to data with the music world',
  icon: <LuNewspaper/>,
 
},
{
  src : '/assets/musicLib/second.jpg',
  name : 'Music Practice Tips',
  description1 : 'Improve your skills',
  description2 : 'Enhance your music abilities',
  icon: <PiLightbulbFill/>
},
{
  src : '/assets/musicLib/thirdRoom.jpeg',
  name : 'Music Instruments Guide',
  description1 : 'Discover different instruments',
  description2 : 'Explore their unique sounds',
  icon: <FaBook/>
},
{
  src : '/assets/musicLib/4th.jpeg',
  name : 'Latest News',
  description1 : 'Discover the latest updates',
  description2 : 'Stay up to data with the music world',
  icon: <BiSolidBookmark/>
},];

function MusicTheories() {

  
  return (
    <div className='page-2'>
    <div className='music-theory'>
      <div className='m-top-bar'>
        <h1>Music Theories</h1>
        <div className='m-top-right'>
          <div className='icon'>
          <FaMusic color='white' size={'25 '}/>
          </div>
          <span>Learn the</span>
        </div>
      </div>
      <div className="m-bottom-content">
        {data.map((item)=>(
          <MusicCard item={item}/>
        ))}
      </div>
    </div>
    <RightHalf/>
    </div>
  )
}

export default MusicTheories