import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './src/screens/HomeScreen';
import Cadastro from './src/screens/Cadastro/';
import SettingsScreen from './src/screens/SettingsScreen';

const homeName = "Agendamentos";
const detailsName = "Details";
const settingsName = "Configurações";

const Stack = createStackNavigator();
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white', borderRadius: 20, height: 92},
          
          
        }}
      >
        <Stack.Screen name={homeName} component={Tabs}/>
        <Stack.Screen name="Novo Agendamento" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
