import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, Content, UserIcon } from './styles';
import { useState } from 'react';
import { groupCreate } from '../../storage/group/groupCreate';
import { AppError } from '../../utils/AppError';
import { Alert } from "react-native"

export function NewGroup() {
  const [group, setGroup] = useState('')
  const { navigate } = useNavigation()

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        throw new AppError("Preencha o nome da turma")
      }

      await groupCreate(group)
      navigate("players", { group })
    }
    catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message)
      }
      else {
        Alert.alert("Novo Grupo", "Não foi possível criar o grupo")
        console.log("error")
      }

    }
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
