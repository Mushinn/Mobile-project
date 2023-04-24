import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='ScreenOne' component={ScreenOne}
            options={{
                headerStyle: {backgroundColor: 'red'},
                headerTintColor: {fontWeight: 'bold'},
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}></Stack.Screen>
            <Stack.Screen name='ScreenTwo' component={ScreenTwo}
            options={{
                headerStyle: {backgroundColor: 'organe'},
                headerTintColor: {fontWeight: 'bold'},
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
