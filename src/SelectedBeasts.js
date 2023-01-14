import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";


export default class SelectedBeasts extends Component {
  render() {
    return (
      <>
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
              width={450}>
            </img>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
