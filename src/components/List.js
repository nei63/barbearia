import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const List = () => {


    return(
        <View style={styles.container}>
            <Text style={styles.text}>fuck</Text>
            <TouchableOpacity style={styles.button}>
                <SimpleLineIcons name="options" size={20}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: 300,
    },
    text:{
        maxWidth: '80%',

    },
    button:{
        backgroundColor: 'red',
        height: 30,
        width: 40,
        borderRadius: 15,
        alignItems: 'center',
        padding: 4,

    },
    titleButton:{

    },


})

export default List;