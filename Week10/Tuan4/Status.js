import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Status extends Component{
    render(){
        return(
            <View>
                <Image
              source={require('../assets/'+this.props.anh)}
                style={{width: 120, height: 100}}        
        />
                <Text>{this.props.ten}</Text>
                <Text>{this.props.like}</Text>
            </View>
        )
    }
}