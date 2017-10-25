import React, { Component } from 'react';
import './Page.css';
import Subdivider from './Sub_divs'

//Generates pages with subdivisions from coordinates. Is very fucking scalable <3

/*function Subdivider(coords) { //Same as in subdivs but with commented diffrence, might be able to overload later to min code amnt.
    let subdivs = [];
    for (var i = 0; i < coords.length; i++){
        coords[i].color = 'lightgrey' //Needed to reset everytime we load modal.
        subdivs.push(<rect x={coords[i].x} y={coords[i].y} width={coords[i].width} height={coords[i].height} stroke="black" fill={coords[i].color} stroke-width="1" />)
    }
    return subdivs;
}*/

class Temp extends Component {
    render() {
        let coords = this.props.coords;
        let return_coords = this.props.getCoords;
      return (
        coords.map((coords, index) => (
        //In here are the correct arrays
        <a className="canvas-outer" onClick={(c) => return_coords(coords)}>
        <div className="canvas">   
            <svg width="74" height="105" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id={index} x="0" y="0" width="74" height="105" stroke="black" fill="grey" stroke-width="1" />      
                {/*<Subdiv coords={coords}/>*/}
                {Subdivider(coords)}
            </svg>
        </div>
        </a>
        ))
      );
    }
  }
  

export default Temp;

