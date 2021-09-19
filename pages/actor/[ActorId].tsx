import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import Card from '../../components/Card/Card';
import Divider from '../../components/Divider/Divider';
import { FlexBox } from '../../components/FlexBox/FlexBox';
import InfoItem from '../../components/InfoItem/InfoItem';
import Spacer from '../../components/Spacer/Spacer';
import { BaseText } from '../../components/Text/Text.styles';
import PageContainer from '../../Container/PageContainer';
import { getActor } from '../../services';

const Actor: NextPage = () => {
  const { query } = useRouter();

  const { data, isLoading, isError } = useQuery(
    ['actor', query.ActorId],
    () => query.ActorId && getActor(query.ActorId as string),
    { keepPreviousData: true }
  );

  if (data && data.data) {
    const { data: results } = data;
    const { credits, biography, birthday, name, profile_path } = results;
    return (
      <>
        <PageContainer
          maxWidth={1200}
          paddingTop={10}
          isLoading={isLoading}
          isError={isError}
        >
          <BaseText weight={700} size={24}>
            {name}
          </BaseText>
          <Divider margin={10} />
          <FlexBox gap={20}>
            <Card src={profile_path} />
            <FlexBox flexDirection={'column'} gap={15}>
              <InfoItem header={'Biography'} gap={5}>
                <BaseText>{biography}</BaseText>
              </InfoItem>
              <InfoItem header={'Birthday'} gap={5}>
                <BaseText>{birthday}</BaseText>
              </InfoItem>
            </FlexBox>
          </FlexBox>
          <Spacer margin={20} />
          <BaseText weight={700} size={24}>
            Known for
          </BaseText>
          <FlexBox flexWrap gap={10}>
            {credits?.cast.map((c) => {
              return (
                <Card
                  key={c.id}
                  text={c.title}
                  href={`/movie/${c.id}`}
                  src={c.poster_path}
                  small
                />
              );
            })}
          </FlexBox>
        </PageContainer>
      </>
    );
  }
  return <div>loading</div>;
};
export default Actor;
