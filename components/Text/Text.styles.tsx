import styled from 'styled-components';

export type TBaseText = {
  size?: number;
  color?: string;
  center?: boolean;
  weight?: number;
};

export const BaseText = styled.p<TBaseText>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  ${(props) => props.center && `text-align: center`}
`;
