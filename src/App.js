import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Button from './components/Button';
import freecodecampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [ numClicks, setNumClicks ] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freecodecampLogo} 
        alt="logo-freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={ numClicks } />
        <Button 
          texto="Click"
          esBotonDeClick={ true }
          manejarClick={ manejarClick }/>
        <Button 
          texto="Reiniciar"
          esBotonDeClick={ false }
          manejarClick={ reiniciarContador }/>
      </div>
    </div>
  );
}

export default App;
