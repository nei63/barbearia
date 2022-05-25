import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [user, setUser] = useState(null);
  const [senha, setSenha] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [nome, setNome] = useState(null);
  const [rg, setRg] = useState(null);

  function calcula(){

  }

  return (
    
    <View style={styles.fundo}>
      <Image
        source={{ uri:'https://png.pngtree.com/png-clipart/20190516/original/pngtree-barber-badge-and-logogood-for-your-shop-png-image_3787117.jpg'}}
        style={styles.logo}
      />

      <TouchableOpacity
          style={styles.buttonVL}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulosinputs}>Nome Completo</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'Nome Completo'}
        onChangeText={setNome}
        value={nome}
      />

      <Text style={styles.titulosinputs}>Usuário</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'Usuário'}
        onChangeText={setUser}
        value={user}
      />

      <Text style={styles.titulosinputs}>Senha</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'Senha'}
        onChangeText={setSenha}
        value={senha}
      />

      <Text style={styles.titulosinputs}>E-mail</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'E-mail'}
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.titulosinputs}>CPF</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'CPF'}
        onChangeText={setCpf}
        value={cpf}
      />

      <Text style={styles.titulosinputs}>RG</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'RG'}
        onChangeText={setCpf}
        value={cpf}
      />

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Cadastrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },

  inputs: {
    padding: 10,
    width: 350,
    height: 45,
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: '#fff',
  },

  titulosinputs: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "red",
    color: "white",
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
  buttonVL: {
    backgroundColor: "red",
    color: "white",
    fontSize: 10,
    alignItems: 'center',
    padding: 11.5,
    height: 50,
    width: 100,
    borderRadius: 25,
    marginRight: 245,
    
  },
});
