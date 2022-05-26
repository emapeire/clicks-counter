import React from "react";
import "../stylesheets/Contador.css";

class Contador extends React.Component {
  render() {
    return (
      <div className="contador">
        { this.props.numClicks }
      </div>
    );
  }
}

export default Contador;
