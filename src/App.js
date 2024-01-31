import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Vehicles from './components/vehicles';
import Charging from './components/charging';
import Energy from './components/energy';
import Contact from './components/contact';

function App() {

  const [activeComponent, setActiveComponent] = useState(1);

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <Landing />;
      case 2:
        return <About />;
      case 3:
        return <Vehicles />;
      case 4:
        return <Charging />;
      case 5:
        return <Energy />;
      case 6:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className='menu'>
        <h1>Explore</h1>
        <div className='button-group'>
          <button className='btn' onClick={() => setActiveComponent(1)}>Home</button>
          <button className='btn' onClick={() => setActiveComponent(2)}>About</button>
          <button className='btn' onClick={() => setActiveComponent(3)}>Vehicles</button>
          <button className='btn' onClick={() => setActiveComponent(4)}>Charging</button>
          <button className='btn' onClick={() => setActiveComponent(5)}>Energy</button>
          <button className='btn' onClick={() => setActiveComponent(6)}>Contact</button>
        </div>
      </div>
      {renderComponent()}
    </>
  );
}

export default App;
