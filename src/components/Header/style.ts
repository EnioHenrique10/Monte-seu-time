import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled.Image`
   width: 46px;
   height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
   flex: 1;
`;

export const styles = StyleSheet.create({
    textoT:{
        
        color: '#fff',
        fontSize: 9
    }, 
    buttonT:{
      
        width: 26,
        height: 26,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent:'center'
    }
});