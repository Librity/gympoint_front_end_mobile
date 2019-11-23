import React, { useMemo } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import { Container, Title, Avatar, Name, Time, SubmitButton } from './styles';

export default function ListHelpOrders({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>ListHelpOrders</Title>
      </Container>
    </Background>
  );
}

ListHelpOrders.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
