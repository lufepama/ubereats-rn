import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';

const BottomElementTab = ({ text, icon = 'search', color = 'black', screenToNavigate }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenToNavigate)} >

            <View style={styles.root}>
                <Ionicons
                    name={icon}
                    size={25}
                    color={color}
                />
                <Text style={styles.text} >{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        color: 'grey'
    },
    superindexContainer: {
        position: 'absolute',
        right: 5,
        top: -8,
        backgroundColor: 'red',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90
    },
    numberText: {
        fontSize: 10
    }
})

export default BottomElementTab
