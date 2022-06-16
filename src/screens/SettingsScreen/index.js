import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


import user from '../../img/user-removebg.png'
import Header from '../../components/Header'
import { useAuth } from "../../contexts/Auth";
import Cadastro from "../../services/sqlite/Cadastro";

export default function SettingsScreen() {
  const {signOut} = useAuth();

  const printCadastro = (cadastro) => {
    console.log(`id:${cadastro.id}, email:${cadastro.email}, telefone:${cadastro.telefone}, password:${cadastro.password}`)
  }

  function calcula(){
    Cadastro.all()
    .then( 
      cadastros => cadastros.forEach( c => printCadastro(c) )
    )
  }

  return (
      <View style={styles.container}>

        <Header/>

        <View style={styles.container2}>
          
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
                onPress={signOut}
              >
              <Text style={styles.textobt}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
          
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
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