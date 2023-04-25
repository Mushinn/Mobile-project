import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen';
import ProductsScreen from '../Screens/ProductsScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FilterScreen from '../Screens/FliterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerTitleStyle: { alignSelf: 'center' },
        }}
      />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Favorite" component={FavStack} />
    </Drawer.Navigator>
  );
};

const HomeTab = () => {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'ios-star' : 'ios-star-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false }} />
    <Tab.Screen name="Favorite" component={FavStack} options={{ headerShown: false }} />
  </Tab.Navigator>
  )
}

const FilterStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='FilterScreen' component={FilterScreen} />
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeTab} options={{ headerShown: false }}/>
        <Drawer.Screen name='Filter' component={FilterStack} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
