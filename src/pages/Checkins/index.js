import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { signOut } from '~/store/modules/student/actions';

import HeaderTitle from '~/components/HeaderTitle';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/components/Appointment';
import SignOutButton from '~/components/SignOutButton';

// export default function useHandleSignOut() {
//   console.tron.log('useHandleSignOut');
//   const dispatch = useDispatch();
//   dispatch(signOut());
// }

function Checkins({ isFocused }) {
  return (
    <Background>
      <Container>{/* <Title>Check-ins</Title> */}</Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  headerTitle: () => <HeaderTitle />,
  headerLeft: () => <SignOutButton />,
};

export default withNavigationFocus(Checkins);
