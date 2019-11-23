import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import HeaderTitle from '~/components/HeaderTitle';
import Background from '~/components/Background';
import { Container, NewHelpOrderButton, List } from './styles';
import HelpOrder from '~/components/HelpOrder';
import SignOutButton from '~/components/SignOutButton';

function ListHelpOrders({ navigation, isFocused }) {
  const studentId = useSelector(state => state.student.studentId);

  const [helpOrders, setHelpOrders] = useState([]);

  const loadHelpOrders = useCallback(async () => {
    const response = await api.get(`/students/${studentId}/help_orders`, {
      params: { unanswered: false },
    });

    setHelpOrders(response.data);
  }, [studentId]);

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused, loadHelpOrders]);

  const handleNewCheckin = async () => {
    navigation.navigate('NewHelpOrder');
  };

  return (
    <Background>
      <Container>
        <NewHelpOrderButton onPress={handleNewCheckin}>
          Novo pedido de auxílio
        </NewHelpOrderButton>

        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: helpOrder }) => (
            <HelpOrder helpOrder={helpOrder} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}

ListHelpOrders.navigationOptions = {
  headerTitle: () => <HeaderTitle />,
  headerLeft: () => <SignOutButton />,
};

export default withNavigationFocus(ListHelpOrders);
