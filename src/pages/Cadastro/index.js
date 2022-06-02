import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import ModalPicker from '../../components/ModalPicker/'

export default function Cadastro() {
  const [chooseData,setchooseData] = useState('Selecione um Serviço');
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const setData = (option) => {
    setchooseData(option)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Text style={styles.titulosinputs}>Nome Completo</Text>
          <TextInput
            style={styles.inputs}
            placeholder={'Nome Completo'}
          />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.titulosinputs}>Serviço</Text>
        <TouchableOpacity
         style={styles.modalSelect}
         onPress={() => changeModalVisibility(true)}
        >
          <Text style={styles.textoSelect}>{chooseData}</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.textobt}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    
  );
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
  containerInputs: {
      marginBottom: 10,
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
  inputs: {
    padding: 10,
    width: 300,
    height: 50,
    borderColor: '#3C67F5',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: 'white',
  },

  titulosinputs: {
    color: 'black',
    fontSize: 15,
    marginBottom: 12,
  },

  modalSelect: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 14, 
    height: 50,
    width: 300,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#3C67F5',
  },
  textoSelect: {
    color: 'black',
  },
});
