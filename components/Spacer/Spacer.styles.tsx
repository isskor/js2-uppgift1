import styled from 'styled-components';

export type TSpacer = {
  margin: number;
};

export const BaseDivider = styled.div<TSpacer>`
  margin: ${(props) => props.margin}px 0;
`;
