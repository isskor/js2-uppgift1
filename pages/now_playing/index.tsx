import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Card from '../../components/Card/Card';
import { FlexBox } from '../../components/FlexBox/FlexBox';
import MovieList from '../../components/MovieList/MovieList';
import PageContainer from '../../Container/PageContainer';
import { getNowPlaying } from '../../services';

const NowPlaying: NextPage = () => {
  const Router = useRouter();
  const cacheString = `${Router.query.page ? Router.query.page : 1}`;

  const { data, isLoading, isError } = useQuery(
    ['now_playing', cacheString],
    () =>
      Router.query.page && parseInt(Router.query.page as string)
        ? getNowPlaying(+Router?.query?.page)
        : getNowPlaying(),
    { keepPreviousData: true }
  );

  return (
    <MovieList
      list={data?.data?.results}
      totalPages={data?.data?.total_pages}
      currentPage={data?.data?.page}
      pathName={Router.pathname}
      title={'Now Playing in Theaters'}
      isError={isError}
      isLoading={isLoading}
    />
  );
};

export default NowPlaying;
