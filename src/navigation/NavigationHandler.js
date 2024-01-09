import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chat, Conversations, Splash} from '../screens/Index';
const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="conversation" component={Conversations} />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
