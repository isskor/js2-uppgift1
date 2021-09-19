import React from 'react';
import * as styles from './Spacer.styles';

const Spacer: React.FC<styles.TSpacer> = ({ margin }) => {
  return <styles.BaseDivider margin={margin} />;
};

export default Spacer;
