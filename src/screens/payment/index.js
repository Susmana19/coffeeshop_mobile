import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';

import style from './style'

const PaymentScreen = ({route}) => {

  const {  name, qty, price_perItem, price, tax, total, images} = route.params;

const navigation = useNavigation();

  return (
    <View>
        <Text style={style.title}>
            Payment Methods
        </Text>

        <Image 
        source={require('../../images/card.jpg')}
        style={{
          width: '90%',
          height: '35%',
          alignSelf: 'center',
          resizeMode: 'contain',
          }} />

        <View style={style.sectionWrap}>
          <View style={style.textWrap}>
            <Text style={style.textItem} >
                {qty} 
            </Text>
            <Text style={style.textItem}>
            {name}
            </Text>
          </View>
          <View>
            <Text style={style.textPrice}>
              IDR {price_perItem}.000
            </Text>
          </View> 
        </View >

        <View style={{
          flexDirection: 'row', 
          marginTop: 20,
          borderTopWidth: 1,
          borderTopColor: '#9F9F9F',
          alignSelf: 'center',
          width: '90%',
          paddingTop: 20,
          marginBottom: 10
          }} >
            <Text style={{marginLeft: 10}}>
            Subtotal
            </Text>
            <Text style={{marginLeft: 142}} >
            IDR {price}.000
            </Text>
        </View>
        <View style={{flexDirection: 'row'}} >
            <Text style={{marginLeft: 28}}>
            Tax
            </Text>
            <Text style={{marginLeft: 172}} >
            IDR {tax}.000
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}} >
            <Text style={{marginLeft: 28, fontWeight: 'bold', fontSize: 25}}>
            Total
            </Text>
            <Text style={{marginLeft: 100, fontWeight: 'bold', fontSize: 25}} >
            IDR {total}.000
            </Text>
        </View>        
        <TouchableOpacity style={style.btnAddCart} onPress={()=> navigation.navigate('History', {
          name: name,
          total: total,
          images: images
        })} >
            <Text style={style.textAddCart} >
                Pay Now
            </Text>
        </TouchableOpacity> 
    </View>
  )
}

export default PaymentScreen