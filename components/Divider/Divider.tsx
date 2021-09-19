import React from 'react';
import * as styles from './Divider.styles';

const Divider: React.FC<styles.TLine> = ({ margin }) => {
  return <styles.BaseDivider margin={margin} />;
};

export default Divider;
