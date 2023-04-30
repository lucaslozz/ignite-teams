import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
`;

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
