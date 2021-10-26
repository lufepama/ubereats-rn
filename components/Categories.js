import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const Categories = () => {
    return (
        <View style={styles.root} >
            <View style={styles.mainContainer} >
                <TouchableOpacity style={styles.elementContainer}>
                    <Image style={styles.image} source={require('../assets/icons/takeaway.png')} />
                    <Text style={styles.text} >Recoger</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.elementContainer}>
                    <Image style={styles.image} source={require('../assets/icons/drinks.png')} />
                    <Text style={styles.text}>Bebidas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.elementContainer}>
                    <Image style={styles.image} source={require('../assets/icons/bakery.png')} />
                    <Text style={styles.text}>Panaderia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.elementContainer}>
                    <Image style={styles.image} source={require('../assets/icons/fastfood.png')} />
                    <Text style={styles.text}>Comida rapida</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        backgroundColor: 'white'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    elementContainer: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    },
    image: {
        width: 40,
        height: 40,
    }
})

export default Categories
