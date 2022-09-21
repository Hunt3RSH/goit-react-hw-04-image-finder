import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  handleClick = e => {
    const { onHandleClick } = this.props;
    onHandleClick(e.target.alt);
  };

  render() {
    const { photos } = this.props;
    return photos.map(({ webformatURL, tags }, id) => {
      return (
        <GalleryItem key={id} onClick={this.handleClick}>
          <GalleryImg src={webformatURL} alt={tags} />
        </GalleryItem>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
