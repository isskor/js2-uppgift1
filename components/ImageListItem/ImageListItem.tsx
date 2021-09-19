import React from 'react';
import Link from 'next/link';
import { FlexBox } from '../FlexBox/FlexBox';
import { BaseText } from '../Text/Text.styles';
import fallback from '../../assets/fallback-person.png';
import * as styles from './ImageListItem.styles';

export type TImageListItem = {
  src?: string;
  text?: string;
  secondaryText?: string;
  href?: string;
};

const ImageListItem: React.FC<TImageListItem> = ({
  src,
  text,
  secondaryText,
  href,
}) => {
  return (
    <Link href={href || ''}>
      <a>
        <FlexBox gap={10}>
          <styles.ImgContainer>
            <styles.Img
              src={
                src
                  ? `https://image.tmdb.org/t/p/w500/${src}`
                  : '/fallback-person.png'
              }
              alt='something'
            />
          </styles.ImgContainer>
          <FlexBox flexDirection={'column'} gap={5}>
            <BaseText>{text}</BaseText>
            <BaseText>{secondaryText}</BaseText>
          </FlexBox>
        </FlexBox>
      </a>
    </Link>
  );
};

export default ImageListItem;
