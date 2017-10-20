import React, { Component } from 'react';
import get_coords from './coords'
import Template from './Template'
import Subdivider from './Sub_divs'
import Page from './Blank_page'
import SetModal from './Set_page'

let full = get_coords(0);
let oneCol = get_coords(1);
let squared = get_coords(2);

console.log(oneCol[0])

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: oneCol[7],
        }
    }
    get_c_from_p(val) {
        this.setState({c: val})
        console.log(val);
    }
  render() {
    return (
      <div>
          <Page coords={this.state.c}/>
          <SetModal />
      </div>
    );
  }
}

export default Board;
