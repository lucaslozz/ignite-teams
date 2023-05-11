import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { TextInput, TextInputProps } from 'react-native';
import { RefObject } from 'react';

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholder="Nome da Turma"
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
