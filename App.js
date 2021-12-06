import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './src/views/Inicial/Inicial';
import Produtos from './src/views/Produtos/Produtos';
import Sobre from './src/views/Sobre/Sobre';

const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicial" component={Inicial}/>
          <Stack.Screen name="Produtos" component={Produtos}/>
          <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
