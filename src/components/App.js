import React, { useEffect, useState } from 'react';
import { AppCont } from './App.styled';
import Searchbar from './searchBar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import GlobalStyles from './GlobalStyles';

const API_KEY = '35766435-c5070ad0581a4f1b9db4321cb';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModalImage, setShowModalImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        {}
      );
      const resObject = await response.json();
      if (page === 1) {
        setImages(prevState => resObject.hits);
      } else {
        setImages(prevState => [...prevState, ...resObject.hits]);
      }
      setTotalImages(resObject.totalHits);

      setLoading(false);
    };
    if (searchQuery !== '') {
      getImages();
    }
  }, [searchQuery, page]);

  const newSearch = query => {
    setPage(1);
    setSearchQuery(query);
    setTotalImages(0);
  };

  const showModal = id => {
    setShowModalImage(id);
  };

  const hideModal = () => {
    setShowModalImage(null);
  };

  const showMore = images.length !== totalImages;
  let showImage = null;
  if (showModalImage) {
    showImage = images.filter(image => image.id === showModalImage)[0];
  }

  return (
    <AppCont>
      <Searchbar newSearch={newSearch} />
      <ImageGallery showModal={showModal} images={images} />
      {showMore && <Button loadMore={loadMore} />}
      {loading && <Loader />}
      {showModalImage && <Modal hideModal={hideModal} image={showImage} />}
      <GlobalStyles />
    </AppCont>
  );
};

export default App;
