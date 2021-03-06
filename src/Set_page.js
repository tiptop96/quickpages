import React, { Component } from 'react';
import Modal from 'react-modal'
import Template_options from './Get_template_options'
import Subdivider from './Sub_divs'
import ColorPicker from './Color_picker'

//Modal that currently show all templates avilable. Will we used to Edit pages on the board later. 

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
            {this.props.pagecoords.map((p, i) => {
                return <ColorPicker index={i} get_color={this.props.get_color}/>
            })//For colors
            }
            </div>

            <div>
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Temp" x="0" y="0" width="148" height="210" stroke="black" fill="grey" stroke-width="1" />      
                {Subdivider(this.props.pagecoords)} {/*Preiew window*/}
                
            </svg>
            <Template_options getCoords={this.props.get_coords}  />
            </div>
        </Modal>
      </div>
    );
  }
}

export default SetModal;