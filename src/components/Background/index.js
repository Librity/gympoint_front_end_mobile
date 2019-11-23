import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.5 },
  end: { x: 0.5, y: 1.0 },
  colors: ['#ff9538', '#fd0058'],
})`
  flex: 1;
`;
