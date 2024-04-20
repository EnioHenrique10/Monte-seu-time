import styled, {css}  from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';


export const Container = styled.View`
      width: 100%;
      height: 56px;

      background-color: #323238;
      border-radius: 6px;
      flex-direction: row;
      align-items: center;

      margin-bottom: 16px;
  
`;

export const Name = styled.Text`
  flex: 1;

  ${({theme}) => css`
     font-size: ${theme.FONT_SIZE.MD}px;
     color: #c4c4cc;
     font-family: ${theme.FONT_FAMILY.REGULAR};
  
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) =>({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;

`;
