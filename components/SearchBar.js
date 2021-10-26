import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchBar = () => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 12, backgroundColor: 'white', paddingBottom: 14 }} >
            <GooglePlacesAutocomplete
                placeholder="Buscar"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View>
                        <Ionicons name="location-sharp" size={25} color='black' />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.mainSearchContainer}>
                        <TouchableOpacity style={styles.deleteContainer}>
                            <Icon
                                name='times'
                                size={13}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.searchContainer} >
                            <Icon
                                name='circle'
                                size={10}
                            />
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
            <TouchableOpacity style={styles.filterContainer} >
                <Icon
                    name='filter'
                    size={30}
                    color='black'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainSearchContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    deleteContainer: {
        justifyContent: 'center',
        marginRight: 5
    },
    searchContainer: {
        padding: 6,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filterContainer: {
        justifyContent: 'center'
    }
})

export default SearchBar
