import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { getPopular } from '../services';
import { useRouter } from 'next/router';
import MovieList from '../components/MovieList/MovieList';
import { FlexBox } from '../components/FlexBox/FlexBox';
import { Text } from '../components/Text/Text';
import Link from 'next/link';

export type TPopularPageContainer = {
  timeWindow: 'week' | 'day';
};

const PopularPageContainer: NextPage<TPopularPageContainer> = ({
  timeWindow,
}) => {
  const Router = useRouter();

  const cachePageString = `${timeWindow}${
    Router.query.page ? Router.query.page : 1
  }`;

  const { data } = useQuery(
    ['top_rated', cachePageString],
    () => {
      if (!timeWindow) return null;
      return Router.query.page && parseInt(Router.query.page as string)
        ? getPopular(timeWindow, +Router?.query?.page)
        : getPopular(timeWindow);
    },
    { keepPreviousData: true }
  );

  return (
    <div>
      <FlexBox gap={20} justify={'center'}>
        {timeWindow === 'day' ? (
          <Link href='/hot/week'>
            <a>
              <Text size={20} weight={600}>
                Weekly
              </Text>
            </a>
          </Link>
        ) : (
          <Text size={20} weight={600}>
            Weekly
          </Text>
        )}
        {timeWindow === 'week' ? (
          <Link href='/hot/day'>
            <a>
              <Text size={20} weight={600}>
                Today
              </Text>
            </a>
          </Link>
        ) : (
          <Text size={20} weight={600}>
            Today
          </Text>
        )}
      </FlexBox>
      <MovieList
        list={data?.data?.results}
        totalPages={data?.data?.total_pages}
        currentPage={
          Router?.query?.page ? parseInt(Router?.query?.page as string) : 1
        }
        title={`Trending ${timeWindow === 'week' ? 'this week' : 'today'}`}
        pathName={Router.pathname}
        querySlug={'time'}
        slug={timeWindow}
      />
    </div>
  );
};

export default PopularPageContainer;
