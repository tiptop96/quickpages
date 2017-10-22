import React, { Component } from 'react';
import Page from './Page'
import './Board.css'



function renderCurrPages(){

}

//needs func for adding pages
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [<Page />, <Page />],
            addNum: 0,
        }
    }
    addPages (addval) {
        let newpages = [];
        for(let i = 0; i < addval; i++) {
            newpages.push(<Page />)
        }
        this.setState({
            pages: [...this.state.pages, ...newpages],
            addNum: 0,
        })
    }
    handleAddNum(e) {
        this.setState({
            addNum: e.target.value
        });
    }
  render() {
    return (
      <div className="board">
          <div>
          <button type="submit" onClick={(addval) => this.addPages(this.state.addNum)}>Add</button>
          <input type="text" value={this.state.addNum} onChange={(e) => this.handleAddNum(e)}/>
          </div>
          {this.state.pages.map((p, i) => {
              return <Page key={i} />
          })}
      </div>
    );
  }
}

export default Board;
