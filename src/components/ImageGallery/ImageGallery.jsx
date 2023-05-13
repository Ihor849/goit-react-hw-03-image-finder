import PropTypes from 'prop-types';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItemHook';
import { Gallery } from './ImageGallery.styled';
//

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} item={image} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
};
