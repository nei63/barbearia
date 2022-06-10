import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import user from '../../img/user-removebg.png'

export default function SettingsScreen({navigation}) {


  return (
      <View style={styles.container}>

        <View style={styles.containerImage}>
          <Image source={user} style={styles.image}/>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => calcula()}
            >
            <Text style={styles.textobt}>Agendamentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => calcula()}
            >
            <Text style={styles.textobt}>Configurações do App</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => calcula()}
            >
            <Text style={styles.textobt}>Histórico de Agendamentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => calcula()}
            >
            <Text style={styles.textobt}>Informações Pessoais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => calcula()}
            >
            <Text style={styles.textobt}>Logout</Text>
          </TouchableOpacity>
        </View>
          
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
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
  containerButtons: {
    marginTop: 20,
  },
  containerImage:{
    marginTop: 50,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
  }
});