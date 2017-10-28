import React, { Component } from 'react';
import Page from './Page'
import './Board.css'
import Set_groups_n_cats from './Categories'

function renderCurrPages(){

}

//needs func for adding pages
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            addNum: 0,
            exsisting_groups: ['Main', '2nd']
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
    getGroups(groups){
        let newgroups = groups;
        this.setState({
            exsisting_groups: [...this.state.exsisting_groups, ...newgroups],
        })
    }
    changeGroupsValues(group_tag, newpage) {
        console.log('Changing groups ' + group_tag)
        let newset = this.state.pages; //Kan vara så att den hoppar förbi min json strigify här.
        console.log(newset)
        //console.log(this.props.children.group_tag)
        for(let i = 0; i < newset.length; i++) {
            let temp = this.getGroupTag.bind(this)
            console.log(temp);
            console.log(newset.group_tag);
            if (newset[i].group_tag == group_tag){
                newset[i].all_coords = JSON.parse(JSON.stringify(newpage));
                console.log(i)
            }
        }
        this.setState({
            pages: newset,
        })
    }
  render() {
    return (
      <div className="board">
          <div>
          <Set_groups_n_cats get_groups={this.getGroups.bind(this)}/>
          <button type="submit" onClick={(addval) => this.addPages(this.state.addNum)}>Add</button>
          <input type="text" value={this.state.addNum} onChange={(e) => this.handleAddNum(e)}/>
          </div>
          {this.state.pages.map((page, i) => <Page change_group={this.changeGroupsValues.bind(this)} exsisting_groups={this.state.exsisting_groups}>{page}</Page>)}
      </div>
    );
  }
}

export default Board;
