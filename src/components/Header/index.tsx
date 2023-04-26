import { Container, Logo } from './styles';
import { CaretLeft } from 'phosphor-react-native';
import logoImg from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <CaretLeft size={32} color="#FFF" />
      <Logo source={logoImg} />
    </Container>
  );
}
