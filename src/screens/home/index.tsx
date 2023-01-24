import { useCallback, useState } from "react";
import { Alert, FlatList, Text } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ContainerForm, ContainerHome, ListEmpty, ListEmptyContainer, SubTitle, Title } from "./styles";
import { Participant } from "../../components/Participant";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br'


export function HomeScreen(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantsName, setParticipantsName] = useState('');
    
    const handleParticipantAdd = useCallback(() => {
        if (participantsName === '') return
        
        if (participants.includes(participantsName))
        {
            return Alert.alert('Participante Duplicado', 'Já existes um participante na lista com esse nome')   
        }    
        
        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName('')
    }, [participants, participantsName])

    const handleParticipantRemove = useCallback((nome:string) => {
        Alert.alert('Remover', `Remover o participante ${nome}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== nome))
            },
            {
                text: 'Não',
                style:'cancel'
            }
        ])   
    }, [participants])

    var now = dayjs(new Date()).locale('pt-br').format('dddd, DD [de] MMMM [de] YYYY')
    
    
    return (
        <ContainerHome>
            <Title>Nome do evento</Title>
            <SubTitle>{now}</SubTitle>
            
            <ContainerForm>
                <Input
                    placeholder="Nome do Participante"
                    value={participantsName}
                    onChangeText={setParticipantsName}
                    onEndEditing={handleParticipantAdd}
                />
                <Button
                    type="add"
                    onPress={handleParticipantAdd}>
                    +
                </Button>
            </ContainerForm>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({ item }) => (
                        <Participant
                            name={item}
                            onRemove={handleParticipantRemove}
                        />
                    )
                }
                ListEmptyComponent={() => (
                    <ListEmptyContainer>

                    <ListEmpty>A sua evento está vazia. Adicione participantes a sua lista de presença.</ListEmpty>
                    </ListEmptyContainer>
                )}
                
            />
        </ContainerHome>
    )
    
}