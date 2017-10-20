import React, { Component } from 'react';
import Modal from 'react-modal'
import Pages from './Page'

//Modal that currently show all templates avilable. Will we used to Edit pages on the board later. 

//PLANS: Is gonna generate a small clickable beneth every pages on the board to be able to edit it.
//Needs optons for coloring, text, etc.

class SetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal(e) {
        this.setState({modalIsOpen: !this.state.modalIsOpen});
    }
  render() {
    return (
      <div>
        <input type='submit' onClick={this.openModal} />
        <Modal
            isOpen={this.state.modalIsOpen}
            aria={{
                labelledby: "heading",
                describedby: "full_description"
            }}>
            <h1 id="heading">Pick a template</h1>
            <button type='submit' onClick={this.openModal}>Close</button>
            <div id="selection">
                <Pages get={this.props.get}/>
            </div>
        </Modal>
      </div>
    );
  }
}

export default SetModal;