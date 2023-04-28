import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ showModal, image }) => {
  return (
    <GalleryItem onClick={() => showModal(image.id)}>
      <GalleryImage src={image.webformatURL} alt="" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
