import styled from 'styled-components';

export type TLine = {
  margin: number;
};

export const BaseDivider = styled.div<TLine>`
  border-bottom: 1px solid #333;
  margin: ${(props) => props.margin}px 0;
`;
