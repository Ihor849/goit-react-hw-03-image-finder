// import React, { Component } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, image }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handelBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { largeImageURL, tags } = image;
  return createPortal(
    <Overlay className="overlay" onClick={handelBackdropClick}>
      <ModalImg className="modal">
        <img src={largeImageURL} alt={tags} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};
export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
