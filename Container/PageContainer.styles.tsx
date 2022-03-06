import styled from 'styled-components';

export type TContainer = {
  maxWidth?: number;
  paddingTop?: number;
};
export const BaseContainer = styled.div<TContainer>`
  max-width: ${(props) => props.maxWidth + 'px' || '100%'};
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 50)}px;

  @media (min-width: 768px) {
    padding: 50px;
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 50)}px;
  }
`;
