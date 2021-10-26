import React from 'react'
import { View, StyleSheet, } from 'react-native'
import BottomElementTab from './BottomElementTab'

const BottomTab = () => {

    return (
        <View style={styles.root}>
            <View style={styles.mainContainer} >
                <BottomElementTab text='Home' icon='home' screenToNavigate='HomeScreen' />
                <BottomElementTab text='Buscar' icon='search' screenToNavigate='SearchScreen' />
                <BottomElementTab text='Pedidos' icon='newspaper' screenToNavigate='OrdersScreen' />
                <BottomElementTab text='Mi cuenta' icon='md-person' screenToNavigate='AccountScreen' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
})

export default BottomTab
