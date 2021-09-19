import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import MovieList from '../../components/MovieList/MovieList';
import { useAllGenres } from '../../hooks/useAllGenres';
import { getMoviesByGenre } from '../../services';

const Genre: NextPage = () => {
  const Router = useRouter();

  const { query } = Router;
  const cacheString = `${query.id}` + `${query.page ? query.page : 1}`;

  const { data, isLoading, isError } = useQuery(
    ['genre', cacheString],
    () =>
      query.id
        ? getMoviesByGenre(
            parseInt(query.id as string),
            query.page ? parseInt(query.page as string) : 1
          )
        : null,
    { keepPreviousData: true }
  );
  const genres = useAllGenres();

  const genreName =
    genres && genres?.data?.data?.genres?.find((e) => e.id == query.id);

  return !isLoading && data && genres ? (
    <MovieList
      list={data?.data?.results}
      totalPages={data?.data?.total_pages}
      currentPage={data?.data?.page}
      pathName={Router.pathname}
      querySlug={'id'}
      slug={Router.query.id as string}
      title={genreName.name}
      isError={isError}
      isLoading={isLoading}
    />
  ) : (
    <div>loading </div>
  );
};

export default Genre;
