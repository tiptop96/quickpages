import React, { Component } from 'react';
import './Page.css';

//Generates pages with subdivisions from coordinates. Is very fucking scalable <3

function Subdiv({coords}) {
    let subdivs = [];
    for (var i = 0; i < coords.length; i++){
        subdivs.push(<rect x={coords[i].x} y={coords[i].y} width={coords[i].width} height={coords[i].height} stroke="black" fill="lightgrey" stroke-width="1" />)
    }
    return subdivs;
}

//here I think I have split coords that need to be passed back up to the Fucking great grandfather of this component trough a method passed down from him.
const Templates = ({coords}) => (     
    coords.map((coords, index) => (
        //In here are the correct arrays
        <a className="canvas-outer">
        <div className="canvas">   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id={index} x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                <Subdiv coords={coords}/>
            </svg>
        </div>
        </a>
    ))
);

class Temp extends Component {
    render() {
        let coords = this.props.coords;
        let return_coords = this.props.get;
      return (
        coords.map((coords, index) => (
        //In here are the correct arrays
        <a className="canvas-outer" onClick={() => return_coords(coords)}>
        <div className="canvas">   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id={index} x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                <Subdiv coords={coords}/>
            </svg>
        </div>
        </a>
        ))
      );
    }
  }
  

export default Temp;

