import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  return(
    results.length > 0 ?
    <View style={style.containerStyle}>
      <Text style={style.titleStyle}>{title}</Text>
      <FlatList horizontal 
      showsHorizontalScrollIndicator={false}
      style={style.listStyle}
      data={results}
      keyExtractor={result => result.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id})}>
            <ResultDetail item={item} />
          </TouchableOpacity>
        )
      }}
      />
    </View> : null
  )
}

const style = StyleSheet.create({
  containerStyle: {
    marginLeft: 20,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#E0CCCC'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  resultStyle: {
    paddingBottom: 20
  },
  listStyle: {
    
  }
})

export default withNavigation(ResultsList);