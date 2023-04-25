import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CATEGORIES from  '../Data/Categories'
import { FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const HomeScreen = (props) => {

    useEffect(() =>props.navigation.setOptions({
        headerLeft: () => 
        <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        >
             <Ionicons name='ios-menu' size={40} color='black' />
        </TouchableOpacity>
    }), [props.navigation]);

    

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({item}) => 
                <TouchableOpacity onPress={() => props.navigation.navigate('ProductsScreen', {categoryId: item.id})}>
                    <View style={[styles.categoryContainer, { backgroundColor: item.color }]}>
                        <Text style={styles.categoryTitle}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id}
        />
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        height: 150,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    categoryTitle: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
