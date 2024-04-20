import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';


export type ButtonTypeProps = 'PRIMARY' | 'SECONDARY';


type Props = {
    type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;

`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) =>({
     size: 25,
     color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;