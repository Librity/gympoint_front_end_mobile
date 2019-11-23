import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Left, Answered, Right, Content } from './styles';

export default function HelpOrder({ data }) {
  const formattedDate = useMemo(() => {
    return formatRelative(parseISO(data.updatedAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.updatedAt]);

  return (
    <Container>
      <Top>
        <Left>
          {data.answer ? (
            <>
              <Icon name="check-circle" size={20} color="#42cb59" />
              <Answered answered>Respondido</Answered>
            </>
          ) : (
            <>
              <Icon name="check-circle" size={20} color="#999" />
              <Answered answered={false}>Sem resposta</Answered>
            </>
          )}
        </Left>

        <Right>{formattedDate}</Right>
      </Top>

      <Content>{data.question}</Content>
    </Container>
  );
}
