import React from 'react';
import * as styles from './PageContainer.styles';

export type TPageContainer = styles.TContainer & {
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
};

const PageContainer: React.FC<TPageContainer> = ({
  paddingTop,
  maxWidth,
  isLoading,
  isError,
  children,
}) => {
  return (
    <styles.BaseContainer maxWidth={maxWidth} paddingTop={paddingTop}>
      {children}
    </styles.BaseContainer>
  );
};

export default PageContainer;
