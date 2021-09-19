import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import MovieList from '../../components/MovieList/MovieList';
import { getSearchedMovies } from '../../services';

const Search: NextPage = () => {
  const Router = useRouter();
  const { query } = Router;

  const string = `${query.query} + ${query.page}`;

  const { data, isLoading, isError } = useQuery(
    ['search', string],
    () =>
      query.query && query.page
        ? getSearchedMovies(
            query.query as string,
            parseInt(query?.page as string)
          )
        : getSearchedMovies(query.query as string),
    { keepPreviousData: true }
  );

  return (
    <MovieList
      list={data?.data?.results}
      totalPages={data?.data?.total_pages}
      currentPage={data?.data?.page}
      pathName={Router.pathname}
      querySlug={'query'}
      slug={query.query as string}
      title={`Search Results from ${query.query}`}
      isError={isError}
      isLoading={isLoading}
    />
  );
};

export default Search;
