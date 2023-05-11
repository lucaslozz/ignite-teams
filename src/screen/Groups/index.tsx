import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import * as S from './styles';
import { FlatList, Alert } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import { groupsGetAll } from '../../storage/group/groupsGetAll';
import { Loading } from '../../components/Loading';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation()

  function handleNewGroup() {

    navigate("new")
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)

    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas")
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigate("players", { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      {
        isLoading ? <Loading /> : <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
          contentContainerStyle={groups.length === 0 && { flex: 1, justifyContent: "center" }}
          ListEmptyComponent={() => (
            <ListEmpty message="Vocë ainda não possui nenhuma turma" />
          )}
        />}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
