import React, { useMemo } from 'react';
import { TouchableOpacity, Alert, Image } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logoWhiteHorizontal.png';
import api from '~/services/api';

import HeaderTitle from '~/components/HeaderTitle';
import Background from '~/components/Background';
import { Container, Title, Avatar, Name, Time, SubmitButton } from './styles';
import SignOutButton from '~/components/SignOutButton';

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
  headerTitle: () => <HeaderTitle />,
  headerLeft: () => <SignOutButton />,
});
