import { useState, useCallback } from "react";
import { FlatList } from "react-native";

import {useNavigation, useFocusEffect} from '@react-navigation/native'

import { Header } from "@components/Header";
import { Container } from "./styles";

import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";



export function Groups(props){
const [groups, setGroups] = useState<string[]>([])

const navigation = useNavigation()

function handleNewGroup(){
     props.navigation.navigate('new');
}

async function fetchGroups(){
    try{
     const data = await  groupsGetAll()
     setGroups(data);
    }catch(error){
      console.log(error)
    }
}


function handleOpenGroup(group: string){
   navigation.navigate('players', {group});
}


  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

    return(
        <Container>
            <Header />


            <Highlight 
             title="Turmas"
             subtitle="Jogue com sua turma"
            />

         <FlatList 
         data={groups}
         keyExtractor={item => item}
         renderItem={({item}) =>(
            <GroupCard 
             title={item}
             onPress={()=> handleOpenGroup(item)}
            />
         )}

         contentContainerStyle={groups.length === 0 && {flex: 1}}
         ListEmptyComponent={() => (<ListEmpty 
         message="Que tal cadastrar a primeira Turma "/>)}

         />

         <Button
          title="Criar nova turma "
           onPress={handleNewGroup}
         
         />
           

        </Container>
    );
}


