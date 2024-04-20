import { Container, Logo, BackButton } from './style';

import {TouchableOpacity, Text } from 'react-native'

import { styles } from './style';

import logoImg from '@assets/logo.png'

import { useNavigation } from '@react-navigation/native';

type Props ={
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){
    const navigation = useNavigation();

   function handleGoback(){
       // navigation.goBack();
       navigation.navigate('groups')
   }

    return(
        <Container>
            {
                showBackButton &&
            <BackButton >
            <TouchableOpacity style={styles.buttonT} onPress={handleGoback}>
                <Text style={styles.textoT}>
                  Voltar
                </Text>
                
            </TouchableOpacity> 
            </BackButton>
            }
            <Logo  source={logoImg}/>
        </Container>
    )
}