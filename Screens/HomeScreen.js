import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import BusinessCard from '../components/BusinessCard'
import BottomTab from '../components/BottomTab'
import { useFocusEffect } from '@react-navigation/core'
import BusinessesList from '../components/BusinessesList'
import { useBusiness } from '../hooks/useBusiness'

const heigthMax = Dimensions.get('screen').height
const widthMax = Dimensions.get('screen').width

const HomeScreen = () => {

    const [searchInput, setSearchInput] = useState('')
    const { businesses, setBusinesses, isLoading, setIsLoading } = useBusiness()

    useFocusEffect(useCallback(() => {

    }, [])
    )

    return (
        <View style={styles.root} >
            <Header />
            <SearchBar value={searchInput} onChange={setSearchInput} />
            <Categories />
            <ScrollView>
                <BusinessesList businesses={businesses} />
            </ScrollView>
            <BottomTab />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#D5D5D5',
        height: heigthMax,
        width: widthMax,
        flex: 1
    }
})

export default HomeScreen
