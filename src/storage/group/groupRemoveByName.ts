import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsGetAll } from './groupsGetAll';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../strorageConfig';

export async function groupRemoveByName(groupToRemove: string) {
  try {
    const groupsStoraged = await groupsGetAll();

    const groupsFiltered = groupsStoraged.filter(
      (group) => group !== groupToRemove,
    );

    const newGroups = JSON.stringify(groupsFiltered);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
  } catch (error) {
    throw error;
  }
}
