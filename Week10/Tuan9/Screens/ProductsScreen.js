import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Products from '../Data/Products';
import { FlatList } from 'react-native';


const ProductsScreen = (props) => {
    const { categoryId } = props.route.params;
    console.log(categoryId);
    const products = Products.filter(item => item.categoryId === categoryId);
    console.log(products);
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
