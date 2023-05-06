import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.nandleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.nandleKeyDown);
  }

  nandleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props.image;
    return createPortal(
      <Overlay className="overlay" onClick={this.handelBackdropClick}>
        <ModalImg className="modal">
          <img src={largeImageURL} alt={tags} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
