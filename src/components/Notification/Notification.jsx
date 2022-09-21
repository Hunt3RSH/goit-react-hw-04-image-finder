import PropTypes from 'prop-types';
import { InitWrapper, SubTitle, Title } from './Notification.styled';

export const InfoTitle = () => (
  <InitWrapper>
    <Title>No images yet</Title>
    <SubTitle>try to write something in the search</SubTitle>
  </InitWrapper>
);

InfoTitle.defaultProps = {
  children: [],
};

InfoTitle.propTypes = {
  children: PropTypes.node,
};
