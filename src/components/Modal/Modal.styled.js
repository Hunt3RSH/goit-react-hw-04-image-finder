import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalImg = styled.img`
  display: block;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
