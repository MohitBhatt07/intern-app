import React from 'react'
import Chat from '../Chat/Chat';
import Todo from '../Todo/Todo';
import './RightSideBar.scss';


function RightSideBar() {
  return (
    <div className='right-bar'>
      <Chat/>
      <Todo/>
      
    </div>
  )
}

export default RightSideBar