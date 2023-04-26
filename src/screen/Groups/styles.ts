import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
flex: 1;
background:${props => props.theme.COLORS.GRAY_600};
padding: 24px;
align-items: center;
justify-content:center;
`

export const Title = styled.Text`
color: ${props => props.theme.COLORS.WHITE};
font-size: 24px;
`