import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const HomeScreen = (props) => (
    <View >
        
        <Button
        title="ScreenOne"
        onPress={() => props.navigation.navigate('ScreenOne')}
      />
      <Button
        title="ScreenTwo"
        onPress={() => props.navigation.navigate('ScreenTwo')}
      />
    </View>
);

const styles = StyleSheet.create({
 
  
});

export default HomeScreen;
