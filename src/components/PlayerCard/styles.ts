import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background: ${(props) => props.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
