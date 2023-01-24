import { Button } from "../Button";
import { ContainerParticipant, NameParticipant } from "./styles";

interface ParticipantProps {
    name: string;
    onRemove: (name:string)=>void
}

export function Participant({ name, onRemove }: ParticipantProps) {
    
    return (
        <ContainerParticipant>
            <NameParticipant>
                {name}
            </NameParticipant>
            <Button type="remove" onPress={()=>onRemove(name)}>
                -
            </Button>
        </ContainerParticipant>
    )
}