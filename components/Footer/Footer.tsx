import React, { useEffect, useState } from 'react';
import PageContainer from '../../Container/PageContainer';
import Card from '../Card/Card';
import { FlexBox } from '../FlexBox/FlexBox';
import Spacer from '../Spacer/Spacer';
import { Text } from '../Text/Text';

const Footer = () => {
  const [localList, setLocalList] = useState([]);

  let list;
  if (typeof window !== 'undefined') {
    list = localStorage?.getItem('lastVisit');
  }
  useEffect(() => {
    const list = localStorage.getItem('lastVisit');

    if (list) {
      setLocalList(JSON.parse(list));
    }
    function getStorage(e) {
      if (e.key === 'lastVisit') {
        const list = localStorage.getItem('lastVisit');

        if (list) {
          setLocalList(JSON.parse(list));
        }
      }
    }

    window.addEventListener('storage', getStorage);

    return () => {
      window.removeEventListener('storage', getStorage);
    };
  }, [list]);

  return localList && localList.length > 0 ? (
    <PageContainer>
      <Text size={20}>Last Movies Visited</Text>
      <Spacer margin={20} />
      <FlexBox flexWrap gap={10}>
        {localList.map((s) => (
          <Card
            key={s.id}
            text={s.title}
            href={`/movie/${s.id}`}
            src={s.poster_path}
            small
          />
        ))}
      </FlexBox>
    </PageContainer>
  ) : null;
};

export default Footer;
