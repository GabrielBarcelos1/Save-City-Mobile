import React,{useState, useEffect} from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import DropDownPicker from 'react-native-dropdown-picker'
import api from "../../services/api";


import logoImg from '../../assets/logo.png'

import styles from './style'


export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        {label: 'Pendente', value: 'pendente'},
        {label: 'Em Andamento', value: 'andamento'},
        {label: 'Concluido', value: 'concluido'},
    ]);

    const incident = route.params.incident
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de saber mais informações sobre o caso "${incident.title}".
    
Você está disponivel para conversar?`


    function navigateBack() {
        if(incident.situation !== value){ navigation.replace('incidents', {id : incident.id, situation:value})}
        else navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Sugestão de melhoria: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }
    function changeSituation(situation) {
     situation && api.put(`incidentmobile/${incident.id}`, {situation})

    }
    useEffect(()=>{
        setValue(incident.situation)
    },[])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#58AF9C" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Autor:</Text>
    <Text style={styles.incidentValue}>{incident.name} ({incident.ong_city}/{incident.ong_district})</Text>

                <Text style={styles.incidentProperty}>Titulo:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                <View style={styles.incidentSubView}>
                    <View style={styles.incidentSubViewMinor}>
                        <Text style={styles.incidentProperty}>Cidade:</Text>
                        <Text style={styles.incidentValue}>{incident.city}</Text>
                    </View>
                    <View style={styles.incidentSubViewMinor}>
                        <Text style={styles.incidentProperty}>Bairro:</Text>
                        <Text style={styles.incidentValue}>{incident.district}</Text>
                    </View>
                    <View style={styles.incidentSubViewMinor}>
                        <Text style={styles.incidentProperty}>Numero:</Text>
                        <Text style={styles.incidentValue}>{incident.number}</Text>
                    </View>
                </View>
                <View style={styles.incidentSubView}>
                    <View style={styles.incidentSubViewMinor}>
                        <Text style={styles.incidentProperty}>CEP:</Text>
                        <Text style={styles.incidentValue}>{incident.cep}</Text>
                    </View>
                    <View style={styles.incidentSubViewMinor}>
                       
                    </View>
                </View>
            </View>
            <Text style={styles.dropDownText}>Situação da sugetão de melhoria: </Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
                borderWidth:0,
                marginBottom:20
            }}
            zIndex={999000}
            onChangeValue={changeSituation}
            />
            <View style={styles.contactBox}>
                <Text style={styles.herotitle}>Entre em contato</Text>
                <Text style={styles.herotitle}>Faça uma cidade melhor!</Text>


                <Text style={styles.heroDescription}>Formas de contato com {incident.name}:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    )
}