import { TouchableOpacityProps } from "react-native";
import { ContainerButton, TextButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    children: React.ReactNode;
    type: 'add' | 'remove'
}

export function Button({ children, type, ...rest }:ButtonProps) {
    return (
        <ContainerButton type={type}>
            <TextButton {...rest}>
                {children}
            </TextButton>
        </ContainerButton>
    )
}