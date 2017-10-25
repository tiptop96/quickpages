import React, { Component } from 'react'
import Templates from './Build_template_options'
import get_coords from './coords'

//Put all options for pages in here probably. Aka combine the templates with all coords.

let all_coords = get_coords();

class Pages extends Component {
    render() {
      return (
          <div>
          <h3>Full page</h3>
          <Templates coords={all_coords[0]} getCoords={this.props.getCoords} />  
          <h3>One column pages</h3>
          <Templates coords={all_coords[1]} getCoords={this.props.getCoords} />
          <h3>Squared pages</h3>
          <Templates coords={all_coords[2]} getCoords={this.props.getCoords} />
          </div>
      );
    }
  }

  export default Pages;