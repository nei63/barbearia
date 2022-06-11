import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../../components/Header'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Header/>

            <View style={styles.container2}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>Agendamentos</Text>
                </View>

                <View style={styles.containerLista}>
                    <Text>LISTA</Text>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Novo Agendamento')}
                    >
                        <Text style={styles.textobt}>Novo Agendamento</Text>
                    </TouchableOpacity>
                </View>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },

    container2:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 25,
        marginLeft: 48,
    },

    containerTitulo:{
        marginLeft: 25,
        marginTop: 80,
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerLista: {
        margin: 40,
    },
    containerButton: {
        marginTop: 10,
    },
    button: {
        backgroundColor: "#3C67F5",
        fontSize: 10,
        alignItems: 'center',
        padding: 14,
        height: 50,
        width: 300,
        borderRadius: 15,
    },
    textobt:{
        color: 'white',
    },
  });
  