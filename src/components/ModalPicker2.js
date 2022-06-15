import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, props } from 'react-native';

const OPTIONS1 = ['9:00', '9:30', '10:00', '10:30', '11:00' , '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
const OPTIONS2 = ['9:00', '10:00', '11:00' , '14:00', '15:00',  '16:00', '17:00', '18:00', '19:00'];
const OPTIONS3 = ['9:00', '10:30', '14:00', '15:30', '17:00', '18:30'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




const ModalPicker2 = (props) => {
    const onPressItem = (option1, option2, option3) => {
        const chooseData = props.setchooseData;
        
        if(chooseData === 'Barba'){
            props.changeModalVisibility2(false);
            props.setHora(option1);
        }

        if(chooseData === 'Barba + Sobrancelha'){
            props.changeModalVisibility2(false);
            props.setHora(option1);
        }
    
        if(chooseData === 'Cabelo'){
            props.changeModalVisibility2(false);
            props.setHora(option1);
        }
    
        if(chooseData === 'Cabelo + Barba'){
            props.changeModalVisibility2(false);
            props.setHora(option2);
        }
    
        if(chooseData === 'Cabelo + Barba + Sobrancelha'){
            props.changeModalVisibility2(false);
            props.setHora(option3);
        }
    
        if(chooseData === 'Cabelo + Sobrancelha'){
            props.changeModalVisibility2(false);
            props.setHora(option1);
        }
    
        else{
            props.changeModalVisibility2(false);
            props.setHora(option1);
        }
    }
    
    const option2 = OPTIONS2.map((item, index) => {
            return(
                <TouchableOpacity
                    style={styles.option2}
                    key={index}
                    onPress={() => onPressItem(item)}
                >
                    <Text style={styles.text}>
                        {item}
        
                    </Text>
        
                </TouchableOpacity>
            )
    })

    const option1 = OPTIONS1.map((item, index) => {
            return(
                <TouchableOpacity
                    style={styles.option2}
                    key={index}
                    onPress={() => onPressItem(item)}
                >
                    <Text style={styles.text}>
                        {item}
        
                    </Text>
        
                </TouchableOpacity>
            )
    })

    const option3 = OPTIONS3.map((item, index) => {
            return(
                <TouchableOpacity
                    style={styles.option2}
                    key={index}
                    onPress={() => onPressItem(item)}
                >
                    <Text style={styles.text}>
                        {item}
        
                    </Text>
        
                </TouchableOpacity>
            )
    })

    const chooseData = props.setchooseData;

    if(chooseData === 'Barba'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option1}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    if(chooseData === 'Barba + Sobrancelha'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option1}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    if(chooseData === 'Cabelo'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option1}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    if(chooseData === 'Cabelo + Barba'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option2}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    if(chooseData === 'Cabelo + Barba + Sobrancelha'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option3}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    if(chooseData === 'Cabelo + Sobrancelha'){
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option1}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }

    else{
        console.log(chooseData);
        return(
            <TouchableOpacity
                onPress={() => props.changeModalVisibility2(false)}
                style={styles.container}
            >
                <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                    <ScrollView>
                        {option3}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 15,

    },
    option2: {
        alignItems: 'flex-start',
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default ModalPicker2;