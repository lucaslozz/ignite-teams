import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, Content, UserIcon } from './styles';
import { useState } from 'react';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const { navigate } = useNavigation()

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UserIcon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma nova turma para adicionar alunos"
        />
        <Input
          placeholder='Nome da Turma'
          onChangeText={(text) => setGroup(text)} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={() => navigate("players", { group })} />
      </Content>
    </Container>
  );
}
