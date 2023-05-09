import { ButtonIcon } from '../../components/ButtonIcon';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Alert, FlatList } from 'react-native';

import { Container, Form, HeaderList, PlayersNumber } from './styles';
import { useEffect, useState } from 'react';
import { PlayerCard } from '../../components/PlayerCard';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import { useRoute } from '@react-navigation/native';
import { AppError } from '../../utils/AppError';
import { playerAddByGroup } from '../../storage/players/playerAddByGroup';
import { playersGetByGroup } from '../../storage/players/playersGetByGroup';
import { playersGetByGroupAndTeam } from '../../storage/players/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '../../storage/players/PlayerStorageDTO';

interface ParamsProps {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("")
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const { params } = useRoute()

  const { group } = params as ParamsProps

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova pessoa", "informe o nome da pessoa para adicionar.")
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      fetchPlayersByTeam()
      setNewPlayerName("")

    }
    catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message)
      } else {
        console.log(error)
        Alert.alert("Nova pessoa", "Não foi possível adicionar.")
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    }
    catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()

  }, [players])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />
        <ButtonIcon icon={'add'} onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (<PlayerCard name={item.name} onRemove={() => { }} />)}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title='Remover Turma' type='SECONDARY' />

    </Container>


  );
}

