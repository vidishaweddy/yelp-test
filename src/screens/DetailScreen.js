import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';
import Header from '../components/Header';

const DetailSreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam('id');


  const getResult = async (id) => {
    const response =  await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null
  } else {
    const { hours, name, location, rating, review_count, photos, price } = result;
    const open = hours[0].open;
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return(
      <View style={{flex:1}}>
        <Header headerText={name} />
        <FlatList horizontal 
          showsHorizontalScrollIndicator={false}
          data={photos}
          keyExtractor={result => result}
          renderItem={({item}) => {
          return (
            <Image source={{ uri: item }} style={style.thumbnailStyle}></Image>
          )
        }}
        />
        <FlatList
            showsVerticalScrollIndicator={false}
            style={style.descriptionContainerStyle}
            data={open}
            keyExtractor={open => open.day.toString() + open.start}
            renderItem={({item}) => {
              return(
                <View>
                  <Text style={style.dayStyle}>{weekday[item.day]}</Text>
                  <Text style={{ marginBottom: 5}}>Open from {item.start.substring(0,2)}:{item.start.substring(2)} until {item.end.substring(0,2)}:{item.end.substring(2)}</Text>
                </View>
              )
            }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            ListHeaderComponent={
              <View>
                <View flexDirection="row">
                  <Text style={style.nameStyle}>{name}</Text>
                  <Text style={style.priceStyle}>({price})</Text>
                </View>
                
                <Text style={style.addressStyle}>{location.address1}</Text>
                <Text style={style.descriptionStyle}>({rating} Stars, {review_count} Reviews)</Text>
                <Text style={style.textStyle}>Business Hours</Text>
              </View>
            }
            ListFooterComponent={<View style={{ height: 0, marginBottom: 20 }}></View>}
          />
      </View>
    )
  }
}

const style = StyleSheet.create({
  containerStyle: {
    width: 280,
    marginRight: 25
  },
  thumbnailStyle: {
    width: 280,
    height: 140,
    opacity: 0.85
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  dayStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  addressStyle: {
    fontWeight: 'bold',
    fontSize: 17
  },
  descriptionStyle: {
    fontSize: 16,
    color: '#999',
    justifyContent: 'center'
  },
  priceStyle: {
    fontSize: 14,
    color: '#999',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 6
  },
  descriptionContainerStyle: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    paddingTop: 10
  }
})

export default DetailSreen;