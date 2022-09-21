import React from 'react';
import PropTypes from 'prop-types';
import { BtnWraper, MainButton } from './Button.styled';

function Button({ onLoadMore }) {
  return (
    <BtnWraper>
      <MainButton type="button" onClick={onLoadMore}>
        Load more
      </MainButton>
    </BtnWraper>
  );
}
Button.propTypes = { onLoadMore: PropTypes.func.isRequired };

export default Button;
