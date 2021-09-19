import styled from 'styled-components';
import Box from '../Box/Box';

type TBaseCard = {
  small?: boolean;
};

export const BaseCard = styled.a<TBaseCard>`
  display: grid;
  grid-template-columns: ${(props) => (props.small ? '120px' : '140px')};
  grid-template-rows: ${(props) => (props.small ? '170px' : '200px')};
  cursor: pointer;

  @media (min-width: 768px) {
    grid-template-columns: ${(props) => (props.small ? '120px' : '200px')};
    grid-template-rows: ${(props) => (props.small ? '170px' : '300px')};
  }
`;

export const CardText = styled(Box)`
  grid-area: 1/1/1/1;
  align-self: end;
`;

export const CardImg = styled.img`
  grid-area: 1/1/1/1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  align-self: start;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
`;
