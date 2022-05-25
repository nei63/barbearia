import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [user, setUser] = useState(null);
  const [senha, setSenha] = useState(null);

  function calcula(){

  }

  return (
    
    <View style={styles.fundo}>
      <Image
        source={{ uri:'https://thumbs.dreamstime.com/b/%C3%ADcone-da-pessoa-no-fundo-preto-vetor-do-esbo%C3%A7o-da-pessoa-90447210.jpg'}}
        style={styles.logo}
      />

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Agendar Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Alertas do App</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Histórico de Agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Informações Pessoais</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={() => calcula()}
        >
        <Text style={styles.textobt}>Sair</Text>
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
    alignItems: 'center',
    padding: 13,
    height: 50,
    width: 200,
    borderRadius: 25,
    marginTop: 15,
    
  },
  textobt: {
    color: '#FFF',
    fontSize: 14,
  },
  hyperLink:{
    fontSize: 12,
    color: 'white',
    marginTop: 25,
  },
});
