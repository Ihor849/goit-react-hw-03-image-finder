import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;

    return (
      <Item className="gallery-item">
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={item} />
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
