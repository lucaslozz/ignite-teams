import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from './playersGetByGroup';
import { PLAYER_COLLECTION } from '../strorageConfig';

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const playersFiltered = storage.filter(
      (player) => player.name !== playerName,
    );

    const players = JSON.stringify(playersFiltered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
