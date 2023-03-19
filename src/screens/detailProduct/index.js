
import { useNavigation } from "@react-navigation/native"
import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from 'axios';

import style from "./style"

const DetailProductScreen = ({route}) => {

  const { name, price, images } = route.params;

  const navigation = useNavigation()

  return (
    <View>
      <Image 
      source={{uri: images}}
      // source={require('../../images/coldbrew.jpg')}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 10
      }}>

      </Image>

      <Text style={style.title} >
        {name}
      </Text>
      <Text style={style.price}>
        IDR {price}.000
      </Text>

      <View style={{width: '80%', alignSelf: 'center', marginVertical: 20}}>
          <Text style={style.sectionTitle}>
            Delivery Info
          </Text>
          <Text>
            Delivered only on monday until friday from 1 pm to 7 pm         
          </Text>
      </View>

      <View style={{width: '80%', alignSelf: 'center', marginBottom: 20}}>
          <Text style={style.sectionTitle}>
                Description
          </Text>
          <Text>
      {name} is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.         
              </Text>
      </View>



      
        <TouchableOpacity style={style.btnAddCart} onPress={()=> navigation.navigate('Cart', {
                      cart_name: name,
                      cart_price: price,
                      cart_images: images  
                    })} >
            <Text style={style.textAddCart} >
                Add to Cart
            </Text>
        </TouchableOpacity> 

    </View>
  )
}

export default DetailProductScreen