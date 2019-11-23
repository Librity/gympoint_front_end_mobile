import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 0 30px;
  flex: 1;
`;

export const NewCheckinButton = styled(Button)`
  align-self: stretch;
  margin-top: 70px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
