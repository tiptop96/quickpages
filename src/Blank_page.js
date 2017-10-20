import React, { Component } from 'react'
import Subdivider from './Sub_divs'
import get_coords from './coords'
import SetModal from './Set_page'

let full = get_coords(0);
let oneCol = get_coords(1);
let squared = get_coords(2);

//Decide if its better to make a component or a method for this.

/*export default (coords) => (   
        <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(coords)}
            </svg>
        </div>    
);*/


//Maybee set state her instead of Borad.js?
class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: get_coords(1), //Wastefull, can be removed.
            c: full,
        }
    }
    get_c_from_p(val) {
        this.setState({c: val})
        console.log(val);
    }
    render() {
      return (
        <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(this.state.c)}
            </svg>
            <SetModal get={this.get_c_from_p.bind(this)}/>
        </div>  
      );
    }
  }

  export default Blank;
