import React from "react";
import "../stylesheets/Button.css";

class Button extends React.Component {
  render() {
    return (
      <button 
      className={this.props.esBotonDeClick ? "boton-click" : "boton-reiniciar"} 
      onClick={this.props.manejarClick} >
        {this.props.texto}
      </button>
    );
  }
}

export default Button;