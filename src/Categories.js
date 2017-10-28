import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCatName: '',
            addGroupName: '',
            groups: [],
            cats: [],
        }
    }
    addCat(name) {
        let newcat = this.state.cats;
        newcat.push(name);
        this.setState = ({
            groups: newcat,
        })
        console.log(name);
    }
    addGroup(name) {
        let newgroup = this.state.groups;
        newgroup.push(name);
        this.setState = ({
            groups: newgroup,
        })
        this.props.get_groups(this.state.groups);
        console.log(name);
    }
    handleChangeCat(e) {
        this.setState({
            addCatName: e.target.value,
        });
    }
    handleChangeGroup(e) {
        this.setState({
            addGroupName: e.target.value,
        });
    }
  render() {
    return (
      <div>
          <button type="submit" onClick={(name) => this.addCat(this.state.addCatName)}>Add a category</button>
          <input type="text" value={this.state.addCatName} onChange={(e) => this.handleChangeCat(e)}/>

          <button type="submit" onClick={(name) => this.addGroup(this.state.addGroupName)}>Add a group</button>
          <input type="text" value={this.state.addGroupName} onChange={(e) => this.handleChangeGroup(e)}/>
      </div>
    );
  }
}

export default App;
