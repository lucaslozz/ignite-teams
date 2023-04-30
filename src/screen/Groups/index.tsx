import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import * as S from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate("new")
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Vocë ainda não possui nenhuma turma" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
