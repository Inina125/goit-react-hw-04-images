import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ loadMore }) => {
  return <LoadButton onClick={loadMore}>Load More</LoadButton>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
