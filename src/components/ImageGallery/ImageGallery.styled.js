import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
