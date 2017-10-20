import React, { Component } from 'react';
import Page from './Blank_page'



function renderCurrPages(){

}

//needs func for adding pages
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [<Page />, <Page />]
        }
    }
    addPages (addval) {
        for (var i = 0; i < addval; i++){
            this.setState({
                pages: this.state.pages.concat([<Page />])
            })
        }
    }
  render() {
    return (
      <div>
          <button type="submit" onClick={() => this.addPages(1)}>Add</button>
          {this.state.pages.map((p, index) => {
              return <Page id={index} />
          })}
      </div>
    );
  }
}

export default Board;
