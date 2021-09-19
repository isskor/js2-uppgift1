import React, { useRef, useState } from 'react';
import { FlexBox } from '../FlexBox/FlexBox';
import Link from 'next/link';
import * as styles from './Header.styles';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import { useRouter } from 'next/router';
import { useAllGenres } from '../../hooks/useAllGenres';

const Header = () => {
  const router = useRouter();

  const [openGenres, setOpenGenres] = useState(false);
  const [search, setSearch] = useState('');
  const headerRef = useRef(null);

  const { data, isLoading } = useAllGenres();

  useOnOutSideClick(headerRef, () => setOpenGenres(false));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSearch(e.target.value);
    }
  };

  return (
    <styles.HeaderWrapper ref={headerRef}>
      <FlexBox padding={'20px 0'} gap={30} flexWrap>
        <Link href='/now_playing' passHref>
          <styles.HeaderItem>Now Playing</styles.HeaderItem>
        </Link>
        <Link href='/hot/week' passHref>
          <styles.HeaderItem>Trending Now</styles.HeaderItem>
        </Link>
        <Link href='/top_rated' passHref>
          <styles.HeaderItem>Top Rated</styles.HeaderItem>
        </Link>
        <styles.HeaderItem
          as={'div'}
          onClick={() => setOpenGenres(!openGenres)}
        >
          Genres
        </styles.HeaderItem>
        <styles.HeaderItem as={'div'}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push({
                pathname: '/search',
                query: { query: search, page: 1 },
              });
            }}
          >
            <styles.Input
              type={'text'}
              placeholder={'Search movie'}
              onChange={(e) => handleSearch(e)}
            />
            <styles.Button type='submit'>Go</styles.Button>
          </form>
        </styles.HeaderItem>
      </FlexBox>
      {openGenres && (
        <styles.HeaderGenres>
          <FlexBox flexWrap gap={20} onClick={() => setOpenGenres(false)}>
            {isLoading ? (
              <div>loading genres...</div>
            ) : (
              data?.data?.genres?.map((g) => (
                <Link key={g.id} href={`/genre/${g.id}`}>
                  <styles.HeaderItem>{g.name}</styles.HeaderItem>
                </Link>
              ))
            )}
          </FlexBox>
        </styles.HeaderGenres>
      )}
    </styles.HeaderWrapper>
  );
};

export default Header;
