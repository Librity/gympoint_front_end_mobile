import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';

import api from '~/services/api';

import HeaderTitle from '~/components/HeaderTitle';
import Background from '~/components/Background';
import { Container, NewCheckinButton, List } from './styles';
import Checkin from '~/components/Checkin';
import SignOutButton from '~/components/SignOutButton';

function Checkins({ isFocused }) {
  const studentId = useSelector(state => state.student.studentId);

  const [checkins, setCheckins] = useState([]);

  const loadCheckins = useCallback(async () => {
    const response = await api.get(`/students/${studentId}/checkins`);

    setCheckins(response.data);
  }, [studentId]);

  useEffect(() => {
    if (isFocused) {
      loadCheckins();
    }
  }, [isFocused, loadCheckins]);

  const handleNewCheckin = async () => {
    try {
      await api.post(`/students/${studentId}/checkins`);

      loadCheckins();
    } catch (err) {
      Alert.alert(
        'Limite de check-ins excedido!',
        'Alunos só podem fazer 5 check-ins a cada 7 dias.'
      );
    }
  };

  return (
    <Background>
      <Container>
        <NewCheckinButton onPress={handleNewCheckin}>
          Novo check-in
        </NewCheckinButton>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  headerTitle: () => <HeaderTitle />,
  headerLeft: () => <SignOutButton />,
};

export default withNavigationFocus(Checkins);
