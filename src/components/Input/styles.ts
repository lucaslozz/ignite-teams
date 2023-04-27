import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 16px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
`;
