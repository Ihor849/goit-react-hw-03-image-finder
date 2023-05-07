import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
//

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
};
