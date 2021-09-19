import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.3);
`;

export const HeaderGenres = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`;

export const HeaderItem = styled.a`
  padding: 20px 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  /* padding: 10px; */
  outline: none;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 16px;
`;

export const Button = styled.button`
  outline: none;
  padding: 2px 8px;
  border: none;
  background: transparent;
  box-shadow: inset 0 0 0 1px black;
  font-size: 16px;
`;
