import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({ item }) => {
  const { name, image_url, rating, review_count, location } = item
  return(
    image_url ?
    <View style={style.containerStyle}>
      <Image source={{ uri: image_url }} style={style.thumbnailStyle}></Image>
      <Text style={style.textStyle}>{name}</Text>
      <Text style={style.addressStyle}>{location.address1}</Text>
      <Text style={style.descriptionStyle}>{rating} Stars, {review_count} Reviews</Text>
    </View> : null
  )
}

const style = StyleSheet.create({
  containerStyle: {
    width: 280,
    marginRight: 25
  },
  thumbnailStyle: {
    width: 280,
    height: 140,
    marginBottom: 5,
    opacity: 0.85
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressStyle: {
    fontSize: 12
  },
  descriptionStyle: {
    fontSize: 12,
    color: '#999'
  }
})

export default ResultDetail;