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
        alt="logo-freecodecamp" 
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} 
        />
        <Button
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Button 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img 
          className="freecodecamp-logo"
          src={freecodecampLogo} 
          alt="logo-freecodecamp" 
          />
        </div>
        <div className="contenedor-principal">
          <Contador numClicks={this.state.numClicks} />
          <Button 
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Button 
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}
*/

export default App;
