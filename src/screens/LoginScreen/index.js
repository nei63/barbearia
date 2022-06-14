import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import logo from '../../img/logo.png'
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/Auth";

export default function LoginScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {signIn} = useAuth();

  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode='contain'
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
          secureTextEntry
          placeholder={'Senha'}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.containerHyperLink}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.hyperLink}>Não tem conta? Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => signIn(email, password)}
          >
          <Text style={styles.textobt}>Login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor="white" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    marginTop: 50,
  },

  logo: {
    width: 200,
    height: 250,
  },

  inputs: {
    padding: 10,
    width: 350,
    height: 45,
    borderColor: "#3C67F5",
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#fff',
  },

  titulosinputs: {
    color: '#000',
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3C67F5",
    color: "white",
    fontSize: 10,
    alignItems: 'center',
    padding: 11.5,
    height: 50,
    width: 360,
    borderRadius: 15,
    marginTop: 25,
    
  },
  textobt: {
    color: '#FFF',
    fontSize: 18,
  },
  hyperLink:{
    fontSize: 14,
    color: 'black',
    marginTop: 25,
  },
});
