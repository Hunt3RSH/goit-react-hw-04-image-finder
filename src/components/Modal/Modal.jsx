import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalImg, ModalWindow } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    const { onCloseModal } = this.props;
    if (e.currentTarget === e.target || e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { photo } = this.props;
    return (
      <Backdrop onClick={this.handleClose}>
        <ModalWindow>
          <ModalImg src={photo.largeImageURL} alt={photo.tags} />
        </ModalWindow>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
