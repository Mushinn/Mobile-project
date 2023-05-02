import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Products from '../Data/Products';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
import { useSelector, useDispatch } from 'react-redux';

const DetailsScreen = (props) => {
  const { productId } = props.route.params;

  const availableProducts = useSelector(state => state.filteredProducts)

  const product = availableProducts.find(product => product.id === productId);

  const dispatch = useDispatch()
  

  const themvaoyeuthich = () => {

    dispatch({
      type: 'THEM_VAO_YEU_THICH',
      productId: productId
     
     })
  }


  useEffect(() =>props.navigation.setOptions({
    headerLeft: () => 
    <TouchableOpacity
    onPress={() => props.navigation.openDrawer()}
    >
         <Ionicons name='ios-menu' size={40} color='black' />
    </TouchableOpacity>
}), [props.navigation]);


  useEffect(() => props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
      onPress = {() => themvaoyeuthich()}
      >
        <Entypo name="star" size={24} color="red" />
      </TouchableOpacity>
    ),
  }),[props.navigation])

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
