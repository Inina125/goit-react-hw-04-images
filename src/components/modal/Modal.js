import { ModalOverlay, ModalCont, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ image, hideModal }) => {
  return (
    <ModalOverlay onClick={() => hideModal()}>
      <ModalCont>
        <ModalImage src={image.largeImageURL} alt="" />
      </ModalCont>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
