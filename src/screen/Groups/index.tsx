import { GroupCard } from '../../GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import * as S from './styles';

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do curso de React Native" />
    </S.Container>
  );
}
