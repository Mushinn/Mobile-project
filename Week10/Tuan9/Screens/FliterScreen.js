import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-web';

const FilterScreen = () => {

    const [isBrandNewOn, setIsBrandNewOn] = useState(false);
    const [isSaleOn, setIsSaleOn] = useState(false);

    useEffect(() =>props.navigation.setOptions({
        headerRight: () => 
        <TouchableOpacity>
            <Ionicons name='ios-save' size={32} />
        </TouchableOpacity>
    }), [props.navigation]);
    

    return (
        <View>
            <Text>Lọc sản phẩm</Text>
            <View>
            <Text>Hàng mới</Text>
            <Switch 
            value={isBrandNewOn}
            onValueChange={(newValue) => setIsBrandNewOn(newValue)}
            />
            </View>
            <View>
            <Text>Hàng khuyễn mãi</Text>
            <Switch 
            value={isSaleOn}
            onValueChange={(newValue) => setIsSaleOn(newValue)}
            />
            </View>
        </View>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    
});
