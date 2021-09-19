import styled from 'styled-components';

type TPaginationButton = {
  active?: boolean;
};
export const PaginationButton = styled.a<TPaginationButton>`
  padding: 10px 15px;
  cursor: pointer;
  ${(props) => props.active && `border-bottom: 1px solid black`};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
