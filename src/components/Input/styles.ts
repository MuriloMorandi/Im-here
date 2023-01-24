import styled from "styled-components/native";

export const ContainerInput = styled.View`
    flex:1;
    padding:16px
    background-color: #1F1E25;
    border-radius: 5px;
    height: 56px;
    margin-right:7px;
`

export const InputStyles = styled.TextInput.attrs(() => ({
        placeholderTextColor: "#6B6B6B"
    }
))`
    color: #FFF;
    font-size:16px;
`