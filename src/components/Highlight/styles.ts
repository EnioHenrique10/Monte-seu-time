import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  margin:  32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme })=> theme.FONT_SIZE.XL}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  color: #ffffff;
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  color: #7C7C8A;
`;