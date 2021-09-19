import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import Box from '../components/Box/Box';
import Card from '../components/Card/Card';
import { FlexBox } from '../components/FlexBox/FlexBox';
import PageContainer from '../Container/PageContainer';
import { getNowPlaying } from '../services';

const Home: NextPage = () => {
  const { data } = useQuery('data', () => getNowPlaying());

  return (
    <PageContainer>
      <h1>Now Playing in Theaters</h1>
      <FlexBox flexWrap={true} gap={20} justify={'center'}>
        {data?.data?.results?.map((item: any) => (
          <Card
            key={item.id}
            text={item.title}
            src={item.poster_path}
            href={`/movie/${item.id}`}
          />
        ))}
      </FlexBox>
    </PageContainer>
  );
};

export default Home;
