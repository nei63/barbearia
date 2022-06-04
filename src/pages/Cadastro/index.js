import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

import ModalPicker from '../../components/ModalPicker/';

export default function Cadastro() {
  const [chooseData,setchooseData] = useState('Selecione um Serviço');
  const [isModalVisible, setisModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');
  const [calendario, setCalendario] = useState('Selecione uma Data');
  const [hour, setHour] = useState('Selecione um Horário');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);
    console.log(fDate + ' (' + fTime + ')');
    setCalendario(fDate);
    setHour(fTime);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

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

      <View style={styles.containerInputs}>
        <Text style={styles.titulosinputs}>Data</Text>
        <TouchableOpacity
          style={styles.modalSelect}
          onPress={() => showMode('date')}
        >
          <Text style={styles.textoSelect}>{calendario}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.titulosinputs}>Hora</Text>
        <TouchableOpacity
          style={styles.modalSelect}
          onPress={() => showMode('time')}
        >
          <Text style={styles.textoSelect}>{hour}</Text>
        </TouchableOpacity>
      </View>


        {show && (
          <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />)}

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
      marginTop: 20,
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
