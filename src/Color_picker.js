import React, { Component } from 'react';

//A color picker for subdivisions used in set page
class Picker extends Component {
  render() {
    return (
      <div>
          <select onChange={(e, i) => this.props.get_color(e, this.props.index)}>
            <option value='white'>White</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
      </div>
    );
  }
}

export default Picker;