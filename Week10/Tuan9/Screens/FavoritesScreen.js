import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PRODUCTS from '../Data/Products';
import { FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';

const FavoritesScreen = () => {

    //const favProducts = PRODUCTS.filter(product => product.isFav === true)
    const favProducts = useSelector(state => state.favProducts)
    console.log(favProducts)


    if(favProducts.length ==0){
      return(
        <Text>không có sản phẩm yêu thích</Text>
      )
    }
    else{


    return (
       <FlatList
       data={favProducts}
       renderItem = {({item}) => <View>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text>{item.name}</Text>
       </View>}
       keyExtractor ={item=>item.id}
     />
    );
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  image:{
    width:200,
    height:200,
  }
    
});
