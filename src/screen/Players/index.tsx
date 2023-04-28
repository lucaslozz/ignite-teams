import { ButtonIcon } from '../../components/ButtonIcon';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, PlayersNumber } from './styles';
import { useState } from 'react';
import { PlayerCard } from '../../components/PlayerCard';

export function Players() {
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState(["King", "Iron"])
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon icon={'add'} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C", "Time D"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <PlayersNumber>
          {players.length}
        </PlayersNumber>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (<PlayerCard name={item} onRemove={() => { }} />)}

      />

    </Container>


  );
}
