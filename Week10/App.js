import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {legacy_createStore as createStore } from 'redux';
import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './Tuan9/Navigation/Navigation';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './Tuan9/Store/Reducer';

const store = createStore(reducer)

export default function App() {
  return (
  <Provider store={store}>
    <Navigation></Navigation>
  </Provider>
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
