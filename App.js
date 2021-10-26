import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Text } from 'react-native-elements'
import MainFlow from './flows/MainFlow';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const StackNavigator = createNativeStackNavigator()


const App = () => {


  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name='MainFlow' component={MainFlow} options={{ headerShown: false }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};


export default App;
