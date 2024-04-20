import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <Props>`
   flex: 1;

   min-height: 56px;
   max-height: 56px;

   background-color: ${({ theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
   
   border-radius: 6px;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
    
    font-size: 12px;
    color: #ffffff;
    font-family: sans-serif;

`;



