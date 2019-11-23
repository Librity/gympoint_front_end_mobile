import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Right } from './styles';

export default function Checkin({ data }) {
  // const parsedDate = useMemo(() => {
  //   return formatRelative(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // }, [data.date]);

  return (
    <Container>
      <Left>{data.id}</Left>
      <Right>{data.createdAt}</Right>
    </Container>
  );
}
