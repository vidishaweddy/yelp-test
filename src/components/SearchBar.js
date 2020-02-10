import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo//vector-icons';

const SearchScreen = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={style.background}>
            <Feather name="search" size={30} style={ style.iconStyle }/>
            <TextInput style={style.inputStyle} 
            placeholder="Search" 
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    )
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#F0CCDD',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 12,
        marginHorizontal: 20,
        height: 40,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 16,
        paddingHorizontal: 5,
        flex: 1,
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchScreen