import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../Screens/SearchScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import AccountScreen from '../Screens/AccountScreen';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantDetailScreen from '../Screens/RestaurantDetailScreen';
import { BusinessesProvider } from '../context/BusinessesContext';

const MainFlowStack = createNativeStackNavigator()


const MainFlow = () => {

    return (
        <BusinessesProvider>
            <MainFlowStack.Navigator initialRouteName='HomeScreen' >
                <MainFlowStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name='OrdersScreen' component={OrdersScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name='AccountScreen' component={AccountScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name='RestaurantDetailScreen' component={RestaurantDetailScreen} options={{ headerShown: false }} />
            </MainFlowStack.Navigator>
        </BusinessesProvider>
    )

}

export default MainFlow
