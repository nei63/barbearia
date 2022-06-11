import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/'
import CreateAccountScreen from '../screens/CreateAccountScreen'


export default function AuthStack(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
            screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'black',
            headerStyle: { backgroundColor: 'white', borderRadius: 50, height: 92},
            headerTitleAlign: 'center',
            cardStyle: { marginTop: 20, flex: 1},
            headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Cadastro" component={CreateAccountScreen}/>
        </Stack.Navigator>
    )
}