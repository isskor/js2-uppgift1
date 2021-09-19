import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Backdrop from '../../components/Backdrop/Backdrop';
import Box from '../../components/Box/Box';
import Card from '../../components/Card/Card';
import Collapsable from '../../components/Collapsable/Collapsable';
import Divider from '../../components/Divider/Divider';
import { FlexBox } from '../../components/FlexBox/FlexBox';
import ImageListItem from '../../components/ImageListItem/ImageListItem';
import InfoItem from '../../components/InfoItem/InfoItem';
import Spacer from '../../components/Spacer/Spacer';
import Star from '../../components/StarIcon/Star';
import { BaseText } from '../../components/Text/Text.styles';
import PageContainer from '../../Container/PageContainer';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getMovieDetail } from '../../services';

export default function Movie() {
  const { query } = useRouter();

  const { data, isLoading, isError } = useQuery(
    ['movie', query.id],
    () => query.id && getMovieDetail(query.id as string),
    { keepPreviousData: true }
  );
  const { setStorage } = useLocalStorage('lastVisit', []);
  useEffect(() => {
    if (data && data.data) {
      setStorage(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data && data.data) {
    const { data: results } = data;
    const {
      casts,
      genres,
      title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      similar,
      runtime,
      release_date,
    } = results;
    return (
      <>
        {backdrop_path && <Backdrop url={backdrop_path} />}
        <Spacer margin={250} />
        <PageContainer maxWidth={1200} paddingTop={10}>
          <FlexBox justify={'space-between'} align={'center'}>
            <BaseText weight={700} size={24}>
              {title}
            </BaseText>
            <InfoItem header={'Rating'}>
              <FlexBox align={'center'}>
                <BaseText weight={700} size={20}>
                  {vote_average}
                </BaseText>
                <Star />
              </FlexBox>
            </InfoItem>
          </FlexBox>
          <FlexBox gap={25} flexWrap>
            <InfoItem header={'Release Date'}>
              <BaseText>{release_date}</BaseText>
            </InfoItem>
            <InfoItem header={'Genres'}>
              <FlexBox gap={5} flexWrap>
                {genres.map((g, i) => (
                  <BaseText key={g.id}>
                    {' '}
                    {g.name}
                    {i + 1 === genres.length ? '' : ','}{' '}
                  </BaseText>
                ))}
              </FlexBox>
            </InfoItem>
            <InfoItem header={'Run Time'}>
              <BaseText>{runtime}Min</BaseText>
            </InfoItem>
          </FlexBox>
          <Divider margin={10} />
          <FlexBox gap={20} flexWrap>
            <Card src={poster_path} />
            <InfoItem header={'Description'} gap={10} flex={1}>
              <BaseText>{overview}</BaseText>
            </InfoItem>
            <Box>
              <InfoItem header={'Cast'} gap={10}>
                <FlexBox flexDirection={'column'} gap={10}>
                  {casts &&
                    casts.cast?.slice(0, 6).map((actor) => {
                      const { profile_path, name, character, id } = actor;
                      return (
                        <ImageListItem
                          key={actor.id}
                          href={`/actor/${id}`}
                          text={name}
                          secondaryText={character}
                          src={profile_path}
                        />
                      );
                    })}
                  <BaseText>scroll down for more</BaseText>
                </FlexBox>
              </InfoItem>
            </Box>
          </FlexBox>
          <Spacer margin={20} />
          <BaseText size={20}> Similar Movies</BaseText>

          <Spacer margin={10} />
          <FlexBox flexWrap gap={10}>
            {similar?.results?.slice(0, 6).map((s) => (
              <Card
                key={s.id}
                text={s.title}
                href={`/movie/${s.id}`}
                src={s.poster_path}
                small
              />
            ))}
          </FlexBox>

          <Spacer margin={50} />
          <Collapsable label={'Full Cast'}>
            <Spacer margin={10} />
            <FlexBox flexWrap gap={10}>
              {casts?.cast?.map((c) => (
                <Card
                  key={c.id}
                  text={c.name}
                  href={`/actor/${c.id}`}
                  src={c.profile_path}
                  small
                />
              ))}
            </FlexBox>
          </Collapsable>
        </PageContainer>
      </>
    );
  }
  return <div>loading</div>;
}
