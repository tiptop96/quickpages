import React, { Component } from 'react'
import Template from './Template'
import get_coords from './coords'

//Put all aptions for pages in here probably. Aka combina the templates with all coords.

let oneCol = get_coords(1);
let squared = get_coords(2);

class Pages extends Component {
    render() {
      return (
          <div>  
          <h3>One column pages</h3>
          <Template coords={oneCol} get={this.props.get} />
          <h3>Squared pages</h3>
          <Template coords={squared} get={this.props.get}/>
          </div>
      );
    }
  }

  export default Pages;