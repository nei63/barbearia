import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../contexts/Auth';
import { View, Text } from 'react-native';


export default function Router() {
  const {AuthData, loading} = useAuth();

  if(loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Carregando App...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {AuthData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
