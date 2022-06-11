import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import logo from '../../img/logo.png';
import backButton from '../../img/back-button.png';

import Header from '../../components/HeaderWithBack'

export default function CreateAccountScreen() {
  const [user, setUser] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [repetir, setRepetir] = useState(null);

  const WIDTH = Dimensions.get('window').width;

  const navigation = useNavigation();

  function calcula(){

  }

  return (
    
    <View style={styles.container}>

      <Header/>
      
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>Nome de usuário</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Usuário'}
            onChangeText={setUser}
            value={user}
          />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>Telefone</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Telefone'}
            onChangeText={setTelefone}
            value={telefone}
          />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>E-mail</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'E-mail'}
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>Senha</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Senha'}
            onChangeText={setSenha}
            value={senha}
          />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>Repetir senha</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Repetir Senha'}
            onChangeText={setRepetir}
            value={repetir}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
          style={styles.button}
          
        >
        <Text style={styles.textobt}>Cadastrar</Text>
      </TouchableOpacity>

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

  inputs: {
    padding: 10,
    width: 330,
    height: 45,
    borderColor: "#3C67F5",
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#fff',
  },

  titulosinputs: {
    color: 'black',
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3C67F5",
    color: "#3C67F5",
    fontSize: 10,
    alignItems: 'center',
    padding: 11.5,
    height: 50,
    width: 360,
    borderRadius: 25,
    marginTop: 45,
    marginBottom: 45,
    
  },
  textobt: {
    color: '#FFF',
    fontSize: 18,
  },
  hyperLink:{
    fontSize: 12,
    color: 'white',
    marginTop: 25,
  },
  containerScroll:{
    width:350,
    marginTop: 80,
  },
});
