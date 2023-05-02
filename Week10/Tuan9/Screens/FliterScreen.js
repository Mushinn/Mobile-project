import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-web';
import { useDispatch } from 'react-redux';

const FilterScreen = () => {

    const [isBrandNew, setIsBrandNew] = useState(false);
    const [isSale, setIsSale] = useState(false);

    const dispatch = useDispatch()

    const filters = {
        isBrandNew: isBrandNew,
        isSale: isSale
    }

    useEffect(() =>props.navigation.setOptions({
        headerRight: () => 
        <TouchableOpacity
        onPress = {() => dispatch({type: 'LOC_SAN_PHAM', filters: filters})}
        >
            <Ionicons name='ios-save' size={32} />
        </TouchableOpacity>
    }), [props.navigation, isBrandNew, isSale]);
    

    return (
        <View>
            <Text>Lọc sản phẩm</Text>
            <View>
            <Text>Hàng mới</Text>
            <Switch 
            value={isBrandNew}
            onValueChange={(newValue) => setIsBrandNew(newValue)}
            />
            </View>
            <View>
            <Text>Hàng khuyễn mãi</Text>
            <Switch 
            value={isSale}
            onValueChange={(newValue) => setIsSale(newValue)}
            />
            </View>
        </View>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    
});
