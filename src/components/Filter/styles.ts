import styled, {css} from "styled-components";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
   isActive: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({theme, isActive}) => isActive && css`
       border: 1px solid ${theme.COLORS.GREEN_700};
    `};

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px; 

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
   ${({theme}) => css`
     font-family: ${theme.FONT_FAMILY.BOLD};
     font-size: ${theme.FONT_SIZE.SM}PX;
     color: ${theme.COLORS.WHITE};
   `}
`;

