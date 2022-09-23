import React, { Component } from 'react';
import pixFetch from '../services/index';
import { Blocks } from 'react-loader-spinner';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import { AppWrapper } from './App.styled';
import { InfoTitle } from './Notification/Notification';
import { LoaderWrapper } from './Loader/Loader.styled';
import { toast } from 'react-toastify';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: false,
    clickedImg: {},
    page: 1,
    totalHits: 0,
  };

  resetPage = () => {
    this.setState({
      photos: [],
      page: 1,
    });
  };

  getValue = searchValue => {
    this.resetPage();
    this.setState({ searchQuery: searchValue });
    pixFetch(searchValue)
      .then(data => {
        this.setState({
          totalHits: data.totalHits,
        });
        if (data.totalHits >= 1) {
          toast.success(`GJ we found ${data.totalHits} images `);
        }
        this.onHandleData(data.hits);
      })
      .catch(error => console.log(error));
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      status: 'pending',
      page: (prevState.page += 1),
    }));
    pixFetch(this.state.searchQuery, this.state.page + 1)
      .then(data => this.onHandleData(data.hits))
      .catch(error => console.log(error));
  };

  onHandleData = data => {
    if (!data.length) {
      toast.error(
        `No result by "${this.state.searchQuery}." Try something else`
      );
      return;
    }
    this.setState(prevState =>
      prevState.searchQuery !== this.state.searchQuery
        ? { photos: data, status: 'loaded' }
        : { photos: [...this.state.photos, ...data], status: 'loaded' }
    );
  };

  onHandleClick = click => {
    const foundImage = this.state.photos.find(photo => photo.tags === click);
    this.setState({ clickedImg: foundImage, showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { totalHits, photos, status, showModal, clickedImg } = this.state;
    return (
      <AppWrapper>
        <SearchBar onSubmit={this.getValue} />
        {photos.length < 1 && <InfoTitle />}
        <ImageGallery>
          <ImageGalleryItem
            photos={photos}
            onHandleClick={this.onHandleClick}
          />
        </ImageGallery>
        {status === 'pending' && (
          <LoaderWrapper>
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </LoaderWrapper>
        )}
        {photos.length !== totalHits && photos.length >= 1 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {showModal && (
          <Modal photo={clickedImg} onCloseModal={this.onCloseModal}></Modal>
        )}
      </AppWrapper>
    );
  }
}

export default App;
