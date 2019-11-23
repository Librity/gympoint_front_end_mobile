import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Title, List } from './styles';
import Appointment from '~/components/Appointment';

function Checkins({ isFocused }) {
  return (
    <Background>
      <Container>
        <Title>Check-ins</Title>
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkins);
