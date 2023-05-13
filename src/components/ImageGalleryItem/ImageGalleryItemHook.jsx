import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';
// import { Component } from 'react';
import { useState } from 'react';
import Modal from 'components/Modal/ModalHook';

export default function ImageGalleryItem({ item }) {
  //   state = {
  //     showModal: false,
  //   };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // const { showModal } = this.state;
    // this.setState({ showModal: !showModal });
    setShowModal(!showModal);
  };

  //   render() {
  //     const { item } = this.props;
  const { webformatURL, tags } = item;

  return (
    <Item className="gallery-item">
      <Image src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && <Modal onClose={toggleModal} image={item} />}
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
