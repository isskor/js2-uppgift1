import React from 'react';
import * as styles from './Text.styles';

export type TText = styles.TBaseText & {
  children?: React.ReactNode;
};
export const Text: React.FC<TText> = ({
  size = 16,
  color = '#333',
  weight = 400,
  children,
  ...props
}) => {
  return (
    <styles.BaseText size={size} color={color} weight={weight} {...props}>
      {children}
    </styles.BaseText>
  );
};
