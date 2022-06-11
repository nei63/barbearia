import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import NewAgendScreen from '../screens/NewAgendScreen';
import SettingsScreen from '../screens/SettingsScreen';

const homeName = "Agendamentos";
const detailsName = "Details";
const settingsName = "Configurações";

const Tab = createBottomTabNavigator();

function Tabs(){
    return(
      <Tab.Navigator
        initialRouteName={homeName}
        
        screenOptions={({ route }) => ({
          tabBarActiveTintColor:  '#3C67F5',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
          tabBarStyle: { padding: 10, height: 70, width: 350, borderRadius: 20, marginLeft: 23, marginBottom: 10, position: 'absolute', alignItems: 'center', justifyContent: 'center' },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
  
            if (rn === homeName) {
              iconName = focused ? 'list' : 'list-outline';
  
            }
            else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
          
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    )
}

export default function AppStack(){
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
            <Stack.Screen name={"hhhhhh"} component={Tabs}/>
            <Stack.Screen name="Novo Agendamento" component={NewAgendScreen}/>
        </Stack.Navigator>
    )
}