import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
// import InfoPanel from './Components/infoPanel.js';
import InfoPanel from './Components/infoPanel';
import SimpleBottomNavigation from './Components/Footer';
function App() {
  const screenConfig = useState(0);
  return <div>
   <NavBar/>
   <InfoPanel currentScreen= {screenConfig[0]}/>
   <SimpleBottomNavigation screenConfig={screenConfig}/>
  </div>
}

export default App;
