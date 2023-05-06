// import propTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
//

export const ImageGallery = ({ images }) => {
  const { id, webformatURL, largeImageURL, tags } = images;
  return (
    <Gallery>
      {images.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </Gallery>
  );
};

// ContactsList.propTypes = {
//   contacts: propTypes.arrayOf(propTypes.object).isRequired,
//   onDelete: propTypes.func.isRequired,
// };

{
  /* <AppImg>
  //{' '}
  <Container>
    // <Searchbar onSubmit={this.handleSubmit} />
    // <ImageGallery images={this.state.items} />
    // <Button btnLoadMore={this.onLoadMore} />
    //{' '}
  </Container>
  //{' '}
</AppImg>; */
}
