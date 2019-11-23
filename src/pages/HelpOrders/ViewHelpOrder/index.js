import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderTitle from '~/components/HeaderTitle';
import Background from '~/components/Background';
import {
  Container,
  Top,
  Left,
  Right,
  Content,
  Question,
  Answer,
} from './styles';

export default function ViewHelpOrder({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');
  const formattedDate = navigation.getParam('formattedDate');

  return (
    <Background>
      <Container>
        <Top>
          <Left>PERGUNTA</Left>

          <Right>{formattedDate}</Right>
        </Top>

        <Question>
          <Content>{helpOrder.question}</Content>
        </Question>

        <Top>
          <Left>RESPOSTA</Left>
        </Top>

        <Answer>
          <Content>{helpOrder.answer}</Content>
        </Answer>
      </Container>
    </Background>
  );
}

ViewHelpOrder.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <HeaderTitle />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
