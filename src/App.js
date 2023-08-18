// import { createBrowserRosuter,RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
// import Chat from './components/Chat/Chat';
// import Todo from './components/Todo/Todo';
import RightSideBar from './components/RightSide/RightSideBar';
import Courses from './pages/page1/Courses';
import ActiveContext from './Context/Context';
import { useState } from 'react';

// import MusicTheories from './pages/page2/MusicTheories';

function App() {

  const [isActive,setIsActive] = useState(true);

  const tapHandler = ()=>{
    setIsActive(prev => !prev);
  }
  return (
    <ActiveContext.Provider value={{
      isActive :isActive,
      onTap :  tapHandler
      }
    }>
    <div className="App">
      <Courses/>
     <Sidebar/>
     
     <RightSideBar/>
     
    </div>
    </ActiveContext.Provider>
  );
}

export default App;
