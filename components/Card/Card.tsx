import React from 'react';
import { Text } from '../Text/Text';
import * as styles from './Card.styles';
import Link from 'next/link';

export type TCard = {
  src: string;
  text?: string;
  href?: string;
  small?: boolean;
};

export const Card: React.FC<TCard> = ({ small, href, src, text }) => {
  return href ? (
    <Link href={href}>
      <styles.BaseCard small={small}>
        <styles.CardImg
          src={
            src
              ? `https://image.tmdb.org/t/p/w500/${src}`
              : '/fallback-person.png'
          }
          alt='img'
        />
        <styles.CardText padding={'0px 20px'} background={'rgba(0, 0, 0, 0.3)'}>
          <Text center weight={600} size={small ? 14 : 20} color={'#fff'}>
            {text}
          </Text>
        </styles.CardText>
      </styles.BaseCard>
    </Link>
  ) : (
    <styles.BaseCard as={'div'}>
      <styles.CardImg
        src={
          src
            ? `https://image.tmdb.org/t/p/w500/${src}`
            : '/fallback-person.png'
        }
        alt='img'
      />
      <styles.CardText padding={'0px 20px'} background={'rgba(0, 0, 0, 0.3)'}>
        <Text center weight={600} size={20} color={'#fff'}>
          {text}
        </Text>
      </styles.CardText>
    </styles.BaseCard>
  );
};

export default Card;
