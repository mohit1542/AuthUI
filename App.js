import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SplashScreen from './Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

const App= ()=> {
  return (
    <NavigationContainer>
      {/* <StatusBar style='dark'/> */}
    <Stack.Navigator initialRouteName='Splash'>

        <Stack.Screen
          name="Splash"
          component={SplashScreen} 
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="Register" 
          component={RegisterScreen} 
          options={{headerShown: false}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App