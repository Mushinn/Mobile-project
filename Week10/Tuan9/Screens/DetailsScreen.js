import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Products from '../Data/Products';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

const DetailsScreen = (props) => {
  const { productId } = props.route.params;
  const product = Products.find((item) => item.id === productId);

  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity>
        <Entypo name="star" size={24} color="red" />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text>{product.name}</Text>
      <Text>Thông Tin chi tiết</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image:{
    width:200,
    height:200,
  }
    
});
