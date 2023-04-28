import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, showModal }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem showModal={showModal} key={image.id} image={image} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
