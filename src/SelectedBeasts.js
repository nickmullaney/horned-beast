import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";

// This section here is for when a specific image is selected to bring it out as a popup
export default class SelectedBeasts extends Component {
  render() {
    return (
      <>
      {/* This populates our Modal with Props that are fed from State */}
        <Modal
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.description}</p>
            <img src={this.props.image_url}
              alt={this.props.keyword}
              height={500}
              width={470}>
            </img>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
