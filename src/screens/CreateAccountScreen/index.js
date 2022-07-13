import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';

import Header from '../../components/HeaderWithBack';
import Cadastro from '../../services/sqlite/Cadastro';
import db from "../../services/sqlite/SQLiteDatabase";

export default function CreateAccountScreen() {
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repetir, setRepetir] = useState(null);

  const navigation = useNavigation();

  const printCadastro = (cadastro) => {
    console.log(`id:${cadastro.id}, email:${cadastro.email}, telefone:${cadastro.telefone}, password:${cadastro.password}`)
  }

  function verificarCadastro() {
    var hasEmail = false;

    if(email === null && telefone === null && password === null && repetir === null){
      ToastAndroid.showWithGravity(
          "Complete todos os campos!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
      );
      return false;
    }

    if(email === null){
        ToastAndroid.showWithGravity(
            "Complete o campo Email!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }

    if(telefone === null){
        ToastAndroid.showWithGravity(
            "Complete o campo Telefone!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(password === null){
        ToastAndroid.showWithGravity(
            "Complete o campo Senha!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(repetir === null){
        ToastAndroid.showWithGravity(
            "Complete o campo Repetir Senha!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(repetir !== password){
        ToastAndroid.showWithGravity(
            "As senhas não batem!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }

    db.transaction((tx) =>{
      tx.executeSql(
        "SELECT * FROM cadastros WHERE email=? OR telefone=?",
        [email, telefone],
        (tx, results) => {
          var len = results.rows.length;
          if(len > 0) {
            hasEmail = true;
            ToastAndroid.showWithGravity(
              "Email ou telefone em uso!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            return false;
          }
          else{
            ToastAndroid.showWithGravity(
              "Cadastro feito com sucesso! Faça login para continuar!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
  
            Cadastro.create( {email: email, telefone: telefone, password: password} )
            .then( id => console.log('Cadastro created with id: '+ id) )
            .catch( err => console.log(err) )
    
            return navigation.goBack();
          }
        }
      );

    });
}

  return (
    
    <View style={styles.container}>

      <Header/>
      
      <ScrollView style={styles.containerScroll}>

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
          <Text style={styles.titulosinputs}>Telefone</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Telefone'}
            onChangeText={setTelefone}
            value={telefone}
          />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.titulosinputs}>Senha</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Senha'}
            onChangeText={setPassword}
            value={password}
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
          onPress={() => verificarCadastro()}
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
