import PropTypes from 'prop-types';
import {
  SearchbarCont,
  Form,
  Button,
  Label,
  QueryInput,
} from './Searchbar.styled';

const Searchbar = ({ newSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    newSearch(e.target.form.elements.query.value);
  };

  return (
    <SearchbarCont>
      <Form>
        <Button type="submit" onClick={handleSubmit}>
          <Label>Search</Label>
        </Button>

        <QueryInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarCont>
  );
};

Searchbar.propTypes = {
  newSearch: PropTypes.func.isRequired,
};

export default Searchbar;
