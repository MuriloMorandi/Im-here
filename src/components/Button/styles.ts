import styled from "styled-components/native";

interface ButtonProps{
    type: 'add'|'remove'
}

export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
    width:56px
    height: 56px;
    border-radius: 5px;
    background: ${({ type })=> type === 'add' ? "#31CF67": "#E23C44"} ;
    align-items: center;
    justify-content: center;
`

export const TextButton = styled.Text`
    color:#FFF;
    font-size:24px;
`
