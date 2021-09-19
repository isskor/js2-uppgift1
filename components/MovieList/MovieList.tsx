import React from 'react';
import Card from '../Card/Card';
import { FlexBox } from '../FlexBox/FlexBox';
import Pagination from '../Pagination/Pagination';
import PageContainer from '../../Container/PageContainer';
import { isError } from 'react-query';

export type TMovieList = {
  list?: any;
  totalPages?: number;
  currentPage?: number;
  title?: string;
  pathName?: string;
  querySlug?: string;
  slug?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const MovieList: React.FC<TMovieList> = ({
  list,
  totalPages,
  currentPage,
  title,
  slug,
  querySlug,
  isLoading,
  isError,
  pathName,
}) => {
  return (
    <PageContainer isError={isError} isLoading={isLoading}>
      <h1>{title}</h1>
      <FlexBox flexWrap={true} gap={20} justify={'center'}>
        {list?.map((item: any) => (
          <Card
            key={item.id}
            text={item.title}
            src={item.poster_path}
            href={`/movie/${item.id}`}
          />
        ))}
      </FlexBox>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        pathName={pathName && pathName}
        querySlug={querySlug && querySlug}
        slug={slug && slug}
      />
    </PageContainer>
  );
};

export default MovieList;
