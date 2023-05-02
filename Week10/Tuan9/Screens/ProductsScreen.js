import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Products from '../Data/Products';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const ProductsScreen = (props) => {
    const { categoryId } = props.route.params


    const availableProducts = useSelector((state) => state.filteredProducts)
    console.log(availableProducts)
   
    const products = availableProducts.filter(product => product.categoryId === categoryId);
  

    return (
        <FlatList 
            data={products}
            renderItem={({item}) =>
                <TouchableOpacity onPress={()=>props.navigation.navigate('DetailsScreen',{productId: item.id})}>
                    <View>
                        <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id}
        />
    );
};

export default ProductsScreen;

const styles = StyleSheet.create({
    
});
