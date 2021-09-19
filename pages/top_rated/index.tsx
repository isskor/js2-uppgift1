import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { getTopRated } from '../../services';
import { useRouter } from 'next/router';
import MovieList from '../../components/MovieList/MovieList';

const TopRated: NextPage = () => {
  const Router = useRouter();

  const cachePageString = `${Router.query.page ? Router.query.page : 1}`;

  const { data, isLoading, isError } = useQuery(
    ['top_rated', cachePageString],
    () =>
      Router.query.page && parseInt(Router.query.page as string)
        ? getTopRated(+Router?.query?.page)
        : getTopRated(),
    { keepPreviousData: true }
  );
  return (
    <MovieList
      list={data?.data?.results}
      totalPages={data?.data?.total_pages}
      currentPage={
        Router?.query?.page ? parseInt(Router?.query?.page as string) : 1
      }
      title={'Top Rated'}
      isError={isError}
      isLoading={isLoading}
    />
  );
};

export default TopRated;
