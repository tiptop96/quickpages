import React, { Component } from 'react'
import Subdivider from './Sub_divs'
import get_coords from './coords'

//Decide if its better to make a component or a method for this.

/*export default (coords) => (   
        <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(coords)}
            </svg>
        </div>    
);*/

class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: get_coords(1),
        }
    }
    render() {
      return (
        <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(this.props.coords)}
            </svg>
        </div>  
      );
    }
  }

  export default Blank;
