import React, { useState } from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function Detail(){
    const navigation = useNavigation();
    const [phone, setPhone] = useState();
    const message = 'Olá';

    function navigateBack(){
        navigation.goBack(); 
    }

    function sendMail(){
         MailComposer.composeAsync({
             subject: 'Herói do Caso: Cadelinha Atropelada',
             recipients: ['melissecabral@gmail.com'],
             body: message,
         })
    }

    function sendWhatsApp(){
         Linking.openURL(`whatsapp://send?phone=5585999616120}&text=Olá`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={()=> {}}>
                    <Feather name='arrow-left' size={28} color='#E82041'/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG: </Text>
                <Text style={styles.incidentValue}>APAD </Text>
                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>title: </Text>
                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>R$ 120,00: </Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato :</Text>
                <View style={styles.actions}>
                    <TouchableOpacity 
                        onPress={() => {sendWhatsApp()}}
                        style={styles.action}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {sendMail()}}
                        style={styles.action}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}