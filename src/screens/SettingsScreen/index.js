import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


import user from '../../img/user-removebg.png'
import Header from '../../components/Header'
import { useAuth } from "../../contexts/Auth";
import Cadastro from "../../services/sqlite/Cadastro";
import db from '../../services/sqlite/SQLiteDatabase'

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

  function delete1(){
    db.transaction((tx) =>{
      tx.executeSql(
        "DELETE FROM cadastros",
        [],
        (tx, results) => {
          var len = results.rows.length;
          if(len > 0) {
            ToastAndroid.showWithGravity(
              "erro",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            )
          }
          else{
            ToastAndroid.showWithGravity(
              "Tudo deletado",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            )
          }
        }
      );

  });
  }

  const auth = AsyncStorage.getItem('@AuthData');

  return (
      <View style={styles.container}>

        <Header/>

        <View style={styles.container2}>
          
          <View style={styles.containerImage}>
            <Image source={user} style={styles.image}/>
          </View>

          <View style={styles.containerButtons}>
            <Text>Bem vindo {}</Text>
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