import React from 'react';
import { useState, useEffect } from 'react';
import pixFetch from '../services/index';
import { Blocks } from 'react-loader-spinner';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import { AppWrapper } from './App.styled';
import { InfoTitle } from './Notification/Notification';
import { toast } from 'react-toastify';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState({});
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  const resetPage = () => (setPhotos([]), setPage(1));

  const getValue = searchValue => {
    resetPage();
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      setStatus('pending');
      pixFetch(searchQuery, page)
        .then(data => {
          onHandleData(data.hits);
          setTotalHits(data.totalHits);
          if (data.totalHits >= 1 && page === 1) {
            return toast.success(
              `GJ we found ${data.totalHits} images on the "${searchQuery}" request`
            );
          }
        })
        .catch(error => console.log(error))
        .finally(() => setStatus(''));
    }
    // eslint-disable-next-line
  }, [searchQuery, page]);

  const onLoadMore = () => {
    setPage(prevState => (prevState += 1));
  };

  const onHandleData = data => {
    if (!data.length) {
      toast.error(`No result by "${searchQuery}." Try something else`);
      return;
    }
    setPhotos([...photos, ...data]);
  };

  const onHandleClick = click => {
    const foundImage = photos.find(photo => photo.tags === click);
    setClickedImg(foundImage);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AppWrapper>
      <SearchBar onSubmit={getValue} />
      {photos.length < 1 && <InfoTitle />}
      <ImageGallery>
        <ImageGalleryItem photos={photos} onHandleClick={onHandleClick} />
      </ImageGallery>
      {status === 'pending' && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="loaderStyle"
        />
      )}
      {photos.length !== totalHits && photos.length >= 1 && (
        <Button onLoadMore={onLoadMore} />
      )}
      {showModal && (
        <Modal photo={clickedImg} onCloseModal={onCloseModal}></Modal>
      )}
    </AppWrapper>
  );
};

export default App;
