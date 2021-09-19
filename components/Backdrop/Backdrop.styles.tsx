import styled from 'styled-components';

type TBackground = {
  url: string;
};
export const ImageBackground = styled.div<TBackground>`
  width: 100%;
  /* height: 300px; */
  height: 100%;
  max-height: 500px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w500${props.url})`};
  position: absolute;
  z-index: -1;
  background-size: cover;
  top: 0;
  left: 0;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.3));
`;
