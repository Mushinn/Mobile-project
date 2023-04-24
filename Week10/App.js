import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {legacy_createStore as createStore } from 'redux';
import React from 'react';
import Navigation from './Tuan9/Navigation/Navigation';


export default function App() {
  return (
  <Navigation></Navigation>
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
