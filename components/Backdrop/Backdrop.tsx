import React from 'react';
import * as styles from './Backdrop.styles';

type TBackdrop = {
  url: string;
};
const Backdrop: React.FC<TBackdrop> = ({ url }) => {
  return (
    <styles.ImageBackground url={`https://image.tmdb.org/t/p/w500${url}`}>
      <styles.Overlay />
    </styles.ImageBackground>
  );
};

export default Backdrop;
