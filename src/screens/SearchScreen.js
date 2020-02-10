import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
import Header from '../components/Header';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
    <View style={{ paddingBottom: 120}}>
        <Header headerText={'Restaurant List'} />
        <SearchBar term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList title="Price $" results={filterResultsByPrice('$')}/>
            <ResultsList title="Price $$"results={filterResultsByPrice('$$')}/>
            <ResultsList title="Price $$$"results={filterResultsByPrice('$$$')}/>
            <ResultsList title="Price $$$$"results={filterResultsByPrice('$$$$')}/>
            <ResultsList title="Price $$$$$"results={filterResultsByPrice('$$$$$')}/>
        </ScrollView>
    </View>
    )
}

const style = StyleSheet.create({})

export default SearchScreen