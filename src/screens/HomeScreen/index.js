import { CardAnimationContext } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import Header from '../../components/Header'
import db from '../../services/sqlite/SQLiteDatabase';

export default function HomeScreen({navigation}){
    const [agendamentos, setAgendamentos] = useState([]);

    function getAgendamentos() {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM agendamentos ORDER BY id DESC`,
                [],
                (sqlTx, res) => {
                    console.log('get agends sucess');
                    let len = res.rows.length;
                    if (len > 0){
                        let results = [];
                        for(var i = 0; i < len; i++){
                            var item = res.rows.item(i);
                            results.push({id: item.id, data: item.data, horario: item.horario, servico: item.servico});
                            console.log(item)
                        }
                        

                        setAgendamentos(results);

                        

                    }
                },
                error => {
                    console.log('erro get agends'+error.message);
                },

            );
        })
    }

    const renderAgend = ({item}) => {
        return(
            <View style={styles.containerList}>
                <View>
                    <Text style={styles.textList}>{item.servico}</Text>
                </View>
                
                <View style={styles.containerDataHora}>
                    <Text style={styles.textList}>{item.data} - {item.horario}</Text>
                </View>

                <View >
                    <TouchableOpacity  style={styles.containerDeleteBtn}>
                        <SimpleLineIcons name='minus'size={15} style={styles.iconeDelete}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }

    useEffect(() => {
        getAgendamentos();
    }, []);

    return(
        <View style={styles.container}>
            <Header/>

            <View style={styles.container2}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>Agendamentos</Text>
                </View>

                <View style={styles.containerLista}>
                    <FlatList
                        data={agendamentos} 
                        renderItem={renderAgend}
                        key={cat => cat.id}
                    />
                </View>

                <View style={styles.containerRefreshButton}>
                    <TouchableOpacity
                        onPress={() => getAgendamentos()}
                        style={styles.buttonRefresh}
                    >
                        <SimpleLineIcons name='refresh' size={26}/>

                    </TouchableOpacity>
                </View>
                

                <View style={styles.containerAddButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Novo Agendamento')}
                        style={styles.button}
                    >
                        <Text style={styles.textobt}>+</Text>
        

                    </TouchableOpacity>
                </View>
            </View>

            

        </View>
    )
}

//#e5e1db//

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
        marginTop: 25,
        marginLeft: 48,
    },

    containerTitulo:{
        marginLeft: 25,
        marginTop: 80,
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerRefreshButton: {
        position: 'absolute',
        bottom: 498,
        marginLeft: 260,
        
    },
    containerAddButton: {
        position: 'absolute',
        top: 595,
        marginLeft: 260,
    },
    button: {
        backgroundColor: "#3C67F5",
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 60,
    },
    textobt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    containerList:{
        backgroundColor: '#c2ccc5',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 85,
        width: 300,
        marginTop: 10,
    },
    containerLista:{
        marginTop: 15,
        height: 480,
    },
    textList:{
        fontWeight: 'bold',
        
    },
    
    containerDataHora:{
        backgroundColor: "#3C67F5",
        borderRadius: 10,
        width: 120,
        padding: 5,
        alignItems: 'center',
    },
    containerDeleteBtn:{
        alignItems: 'center',
        height: 20,
        width: 42,
        backgroundColor: 'red',
        left: 129,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        bottom: 62,
        height: 85,
    },
    iconeDelete:{
        top: 35,
    }
  });
  