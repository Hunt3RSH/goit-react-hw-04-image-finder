import styled from 'styled-components';

export const MainButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  background: rgba(63, 81, 181, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  :hover,
  :focus {
    background: rgba(48, 63, 159, 0.7);
  }
`;

export const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
`;
