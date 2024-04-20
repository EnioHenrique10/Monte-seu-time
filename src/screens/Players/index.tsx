import { Alert, FlatList, TextInput } from "react-native";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers  } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState, useEffect, useRef } from "react";
import { PlayerCard } from "@components/PlayerCard";
// import { ListViewComponent } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playrsGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/GroupRemoveByName";


type RouteParams = {
  group: string;
}

export function Players(){
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([ ]);
  
  const navigation = useNavigation();
  const route = useRoute();
  const {group} = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)


  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Nova Pessoa','Informe o nome da pessoa para adiconar. ')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try{
      await playerAddByGroup(newPlayer, group);

       newPlayerNameInputRef.current?.blur();
        // Keyboard.dismiss(); // uma opçõa de fechar o teclado

      setNewPlayerName('');
      fetchPlayersByteam();
    

    }catch(error){
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      }else{
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }

  }

   async function fetchPlayersByteam(){
    try{
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
     }catch(error){
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas')
     }
   }

  async function handlePlayerRemove(playerName: string){
       try {
           await playerRemoveByGroup(playerName, group);
           fetchPlayersByteam() 

       }catch(error){
        console.log(error)
        Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa')
       }
  } 
  
  async function groupRemove(){
     try{
       await groupRemoveByName(group)
       
       navigation.navigate('groups')
     }catch (error){
        console.log(error)
        Alert.alert('Remover grupo', 'Não foi possivel remover o grupo')
     }
  }


  async function handleGroupRemove(){
     Alert.alert(
      'Remover',
      'Deseja remover o Grupo ?',
      [
       {text: 'Não', style: 'cancel'},
       {text: 'Sim', onPress: () => groupRemove() }
      ]
     )
  }


  useEffect(() => {
    
      fetchPlayersByteam();
  }, [team]);

    return(
        <Container>
            <Header showBackButton />

            <Highlight 
              title={group}
              subtitle="adicione a galera e separe os times "
            />
            <Form>
             <Input 
               inputRef={newPlayerNameInputRef }
              onChangeText={setNewPlayerName}
              value={newPlayerName}
              placeholder="Nome da pessoa"
              autoCorrect={false}
              onSubmitEditing={handleAddPlayer}
              returnKeyType="done"
             />

            <ButtonIcon 
             icon="add"
             onPress={handleAddPlayer}
             />
            </Form>


            <HeaderList>
            <FlatList 
              data={['Time A', 'Time B']}
              keyExtractor={item => item}
              renderItem={({item}) =>(
                <Filter 
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
             
            />

             )}
             horizontal
             />
             <NumbersOfPlayers>
               {players.length}
             </NumbersOfPlayers>
          </HeaderList>

          <FlatList 
           data={players}
           keyExtractor={item => item.name}
           renderItem={({item}) => (
          <PlayerCard  
           name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
           />

           )}
           ListEmptyComponent={() => (<ListEmpty 
            message="Não há pessoas nesse time"/>)}
            showsVerticalScrollIndicator={false}
          />
            <Button
              title="Remover turma"
              type="SECONDARY"
              onPress={handleGroupRemove}
            />
        </Container>
    )
}
