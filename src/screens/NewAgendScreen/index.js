import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Platform, props } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

import ModalPicker from '../../components/ModalPicker/';
import ModalPicker2 from '../../components/ModalPicker2/';
import HeaderWithBack from '../../components/HeaderWithBack'

export default function NewAgendScreen(props) {
  const [chooseData,setchooseData] = useState('Selecione um Serviço');
  const [chooseHora,setchooseHora] = useState('Selecione um Horário');
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isModalVisible2, setisModalVisible2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [calendario, setCalendario] = useState('Selecione uma Data');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
    console.log(fDate + ' (' + fTime + ')');
    setCalendario(fDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const changeModalVisibility2 = (bool) => {
    setisModalVisible2(bool)
  }

  const setData = (option) => {
    setchooseData(option)
  }

  const setHora = (option1, option2, option3) => {
    if(setchooseData === 'Barba'){
      setchooseHora(option1)
    }

    if(setchooseData === 'Barba + Sobrancelha'){
      setchooseHora(option1)
    }

    if(setchooseData === 'Cabelo'){
      setchooseHora(option1)
    }

    if(setchooseData === 'Cabelo + Barba'){
      setchooseHora(option2)
    }

    if(setchooseData === 'Cabelo + Barba + Sobrancelha'){
      setchooseHora(option3)
    }

    if(setchooseData === 'Cabelo + Sobrancelha'){
      setchooseHora(option1)
    }

    else{
      setchooseHora(option1)
    }
  }

  return (
    <View style={styles.container}>
      <HeaderWithBack/>

      <View style={styles.container2}>
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
          <Text style={styles.titulosinputs}>Horário</Text>
          <TouchableOpacity
          style={styles.modalSelect}
          onPress={() => changeModalVisibility2(true)}
          >
            <Text style={styles.textoSelect}>{chooseHora}</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible2}
            nRequestClose={() => changeModalVisibility2(false)}
          >
            <ModalPicker2
              changeModalVisibility2={changeModalVisibility2}
              setHora={setHora}
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

          {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            minimumDate={new Date(2022, 1, 0)}
            maximumDate={new Date(2030,0, 0)}
          />)}

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert(chooseHora)}
          >
            <Text style={styles.textobt}>Cadastrar</Text>
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
    alignItems: 'flex-start',
  },
  container2:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 100,
    marginLeft: 48,
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
