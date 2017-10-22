import React, { Component } from 'react'
import Templates from './Build_template_options'
import get_coords from './coords'

//Put all options for pages in here probably. Aka combine the templates with all coords.

let oneCol = get_coords(1);
let squared = get_coords(2);

class Pages extends Component {
    render() {
      return (
          <div>  
          <h3>One column pages</h3>
          <Templates coords={oneCol} getCoords={this.props.getCoords} />
          <h3>Squared pages</h3>
          <Templates coords={squared} getCoords={this.props.getCoords}/>
          </div>
      );
    }
  }

  export default Pages;