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
            coords: JSON.parse(JSON.stringify(all_coords[0][0])),
            cat_tag: '',
            group_tag: 'Main',
        }
    }
    get_coords_from_t(c) {
        let page_coords = JSON.parse(JSON.stringify(c)); //Deep clone kinda.
        this.setState({
            coords: page_coords,
        })
        this.props.change_group(this.state.group_tag, page_coords)
    }
    get_colors_from_t(e, i) {      
        let newcolors = this.state.coords;
        newcolors[i].color = e.target.value;
        console.log(this.state.group_tag);
        this.setState({
            coords: newcolors,
        });
        this.props.change_group(this.state.group_tag, e.target.value)
    }
    setGroup(e) {
        let val = e.target.value;
        this.setState({
            group_tag: val,
        });
        console.log(e.target.value)
        console.log(this.state.group_tag)
    }
    render() {
      return (
        <div className='canvas'> 
          <select onChange={(e) => this.setGroup(e)}>
            {this.props.exsisting_groups.map((group_tag) => <option>{group_tag}</option>)}
          </select><br/>
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
