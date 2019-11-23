import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import {
  Container,
  Title,
  ProviderList,
  Provider,
  Avatar,
  Name,
} from './styles';

export default function ViewHelpOrder({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>ViewHelpOrder</Title>
      </Container>
    </Background>
  );
}

ViewHelpOrder.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
