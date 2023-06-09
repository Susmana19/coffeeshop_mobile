import { FlatList, Pressable, Image, StyleSheet, Text, View } from 'react-native';

//styles
import style from './style'
import commonStyle from '../../src/styles/commonStyle';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Food = () => {

  const navigation = useNavigation()

  const [dataProduct, setDataProduct] = useState([])

  useEffect(()=> {
    axios.get('https://coffeeshopmobilebe.cyclic.app/api/v1/products?cat=food')
    .then((res)=> setDataProduct(res.data.data))
    .catch((err)=> console.log(err.message))
  }, [])
  

  return (
        <View>
          <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', width: '90%'}}>
              <Text style={[commonStyle.mlbase, style.sectionTitle]}>
                Food
              </Text>
              <Pressable onPress={()=> {navigation.navigate('Food')}}>
                <Text style={{color: '#6A4029'}}>
                  See more
                </Text>
              </Pressable>
          </View>
          <FlatList
          horizontal
          data={dataProduct}
          renderItem={({item})=> {
            return(
              <Pressable 
              style={style.cardWrap} onPress={()=> {
                navigation.navigate('DetailProduct', {
                  name: item.name,
                  price: item.price,
                  images: `https://coffeeshopmobilebe.cyclic.app/uploads/images/${item.images[0].filename}`
                })
              }} >
                <Image 
                source={{uri: `https://coffeeshopmobilebe.cyclic.app/uploads/images/${item.images[0].filename}`}}
                // source={require('../../src/images/hazelnut-latte.jpg')}
                style={{
                  width: '65%',
                  height: '55%',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: 70,
                  resizeMode: 'contain',
                  top: 25
                }}/>
                <View style={style.card}>
                  <Text style={style.productTitle}>{item.name}</Text>
                  <Text style={[style.productPrice]}>IDR {item.price}.000</Text>
              </View>                
              </Pressable>
            )


          }}
          >

          </FlatList>
        </View>
  )
}

export default Food