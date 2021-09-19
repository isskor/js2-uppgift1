import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import PopularPageContainer from '../../Container/PopularPage.container';

const TrendingWeek: NextPage = () => {
  const Router = useRouter();
  return (
    <PopularPageContainer timeWindow={Router.query.time as 'day' | 'week'} />
  );
};

export default TrendingWeek;
