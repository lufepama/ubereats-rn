import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const Header = () => {

    return (
        <View style={styles.root}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.elementContainer}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.elementContainer}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >Pickup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    mainContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    elementContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
    }

})

export default Header
