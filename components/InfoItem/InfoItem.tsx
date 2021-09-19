import React from 'react';
import { FlexBox } from '../FlexBox/FlexBox';
import Spacer from '../Spacer/Spacer';
import { BaseText } from '../Text/Text.styles';

export type TInfoItem = {
  children?: React.ReactNode;
  header?: string;
  headerSize?: number;
  flex?: number;
  gap?: number;
};
const InfoItem: React.FC<TInfoItem> = ({
  headerSize = 18,
  header,
  gap = 0,
  flex = 0,
  children,
}) => {
  return (
    <FlexBox flexDirection={'column'} flex={flex}>
      <BaseText size={headerSize} weight={600}>
        {header}
      </BaseText>
      <Spacer margin={gap} />
      {children}
    </FlexBox>
  );
};

export default InfoItem;
