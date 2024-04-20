import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/group/storageConfig";

import {PlayerStorageDTO} from './PlayerStorageDTO'
import { playGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){

 try{

    const storedPlayers = await playGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0){
        throw new AppError('Essa pessoa está adicionada em um time aqui.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

 } catch (error){
     throw (error)
 }

}
