import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import BusinessCard from './BusinessCard'

const BusinessesList = ({ businesses }) => {
    return (
        <View style={styles.root}>
            <FlatList
                nestedScrollEnabled={true}
                data={businesses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <BusinessCard item={item} />
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    root: {

    }
})

export default BusinessesList
