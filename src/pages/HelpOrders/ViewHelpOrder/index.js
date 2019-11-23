import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import HeaderTitle from '~/components/HeaderTitle';
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
