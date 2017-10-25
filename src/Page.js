import React, { Component } from 'react'
import Subdivider from './Sub_divs'
import get_coords from './coords'
import SetModal from './Set_page'

const all_coords = get_coords();

//Maybee set state her instead of Borad.js?
class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: all_coords[0][0],
        }
    }
    get_coords_from_t(c) {
        let page_coords = JSON.parse(JSON.stringify(c)); //Deep clone kinda.
        this.setState({
            coords: page_coords,
        })
    }
    get_colors_from_t(e, i) {      
        let newcolors = this.state.coords;
        newcolors[i].color = e.target.value;
        this.setState({
            coords: newcolors,
    });
        console.log(e.target.value);
        console.log(i);
    }
    render() {
      return (
        <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(this.state.coords)}
            </svg>
            <SetModal get_coords={this.get_coords_from_t.bind(this)} get_color={this.get_colors_from_t.bind(this)} pagecoords={this.state.coords} />
        </div>  
      );
    }
  }

  export default Blank;
