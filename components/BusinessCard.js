import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const BusinessCard = ({ item }) => {

    const navigation = useNavigation()


    return (
        <View style={styles.root} >
            <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate('RestaurantDetailScreen', { 'restaurant': item })} >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.image_url }}
                    />
                </View>
                <TouchableOpacity style={styles.heartContainer} >
                    <Ionicons name="heart-outline" size={25} color='black' />
                </TouchableOpacity>
                <View style={styles.bodyContainer} >
                    <View style={styles.businessBody} >
                        <Text style={styles.titleText} >{item.name}</Text>
                        <Text style={styles.timeText} >30-45 min</Text>
                    </View>
                    <View style={styles.ratingContainer} >
                        <Text style={styles.ratingText} >{item.rating}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        marginTop: 10,
    },
    mainContainer: {
        padding: 10,
        flexDirection: 'column'
    },
    imageContainer: {
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ratingContainer: {
        backgroundColor: '#E3E3E3',
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 5,
        top: 5
    },
    ratingText: {

    },
    heartContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timeText: {
        fontSize: 11,
        color: '#C6C6C6'
    }
})

export default BusinessCard
