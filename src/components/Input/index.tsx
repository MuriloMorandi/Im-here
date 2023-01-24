import { TextInputProps } from "react-native";
import { ContainerInput, InputStyles } from "./styles";

interface InputProps extends TextInputProps{

}


export function Input({...rest}:InputProps) {
    return (
        <ContainerInput>
            <InputStyles {...rest} />
        </ContainerInput>
    )
}