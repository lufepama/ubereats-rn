import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantDetailScreen = ({ route }) => {

    const restaurant = route.params.restaurant

    return (
        <View>
            <Text>{restaurant.name}</Text>
        </View>
    )
}

export default RestaurantDetailScreen

const styles = StyleSheet.create({})
