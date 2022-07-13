import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import logo from '../img/logo.png';


export default function Header(){
    const WIDTH = Dimensions.get('window').width;
    const navigation = useNavigation();

    const info = () => {
        ToastAndroid.showWithGravity(
            "Easter Egg!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    return(
        <View style={[styles.containerHeader, {width: WIDTH}]}>

            <View>
                <Image source={logo} style={styles.Image}/>
            </View>
            
            <StatusBar backgroundColor= '#3C67F5' />

        </View>
    )
}

//#2c2c2c//

const styles = StyleSheet.create({
    containerHeader:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3C67F5',
        position: 'absolute',
        height: 70,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: 'center',
    },
    backButton:{
        marginLeft: 10,
    },
    infoButton:{
        marginRight: 10,
    },
    Image:{
        height: 70,
        width: 70,
    },
})