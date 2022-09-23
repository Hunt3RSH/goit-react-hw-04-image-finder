import PropTypes from 'prop-types';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ photos, onHandleClick }) => {
  const handleClick = e => {
    onHandleClick(e.target.alt);
  };

  return photos.map(({ webformatURL, tags }, id) => {
    return (
      <GalleryItem key={id} onClick={handleClick}>
        <GalleryImg src={webformatURL} alt={tags} />
      </GalleryItem>
    );
  });
};

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
