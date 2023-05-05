import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, Content, UserIcon } from './styles';
import { useState } from 'react';
import { groupCreate } from '../../storage/group/groupCreate';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const { navigate } = useNavigation()

  async function handleNew() {
    await groupCreate(group)
    navigate("players", { group })
  }

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
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
