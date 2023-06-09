import { FlatList, Pressable, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style'
import { useEffect, useState } from 'react';
import axios from 'axios';

const FavoriteScreen = () => {
    const navigation = useNavigation();

  const [dataProduct, setDataProduct] = useState([])

  useEffect(()=> {
    axios.get('https://coffeeshopmobilebe.cyclic.app/api/v1/products')
    .then((res)=> setDataProduct(res.data.data))
    .catch((err)=> console.log(err.message))
  }, [])
  


  return (
        <View>
              <Text style={style.sectionTitle}>
                Everyone’s Favorite
              </Text>
              <View style={{alignSelf: 'center'}}>
                <FlatList
                vertical
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
                        // source={require('../../../images/hazelnut-latte.jpg')}
                        style={{
                          width: '65%',
                          height: '37%',
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
        </View>
  )
}

export default FavoriteScreen