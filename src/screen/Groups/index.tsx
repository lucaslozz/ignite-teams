import { useState } from 'react';
import { GroupCard } from '../../GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import * as S from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
    </S.Container>
  );
}
