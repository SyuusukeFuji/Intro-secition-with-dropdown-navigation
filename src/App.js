import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Bodywork from './components/Bodywork';
import Sidebar from './components/Sidebar';

function App() {
  const [isMobile, setIsMobile]= useState(window.innerWidth <= 770);

  useEffect(() => { const handleResize = () => { setIsMobile(window.innerWidth < 770); }; 
  window.addEventListener('resize', handleResize); 
  return () => window.removeEventListener('resize', handleResize); }, []);

  //crea un archivo header.js, ahí importas el navbar y procedes a inyectar ese archivo dentro del header de html
  return (
    <div className="App">
      {isMobile ? <Sidebar /> : <Navbar /> }
      
      <Bodywork />
    </div>
  );
}

export default App;
