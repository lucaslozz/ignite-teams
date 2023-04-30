import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.WHITE};
  font-size: 24px;
`;
