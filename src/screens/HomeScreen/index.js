import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>

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
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      position: 'relative',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 45,
      marginTop: 25,
    },
    titulo: {
        fontSize: 20,
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
  