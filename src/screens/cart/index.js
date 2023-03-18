import { 
    Dimensions, 
    FlatList, Image, 
    ScrollView, 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    View, 
    Pressable, 
    ToastAndroid 
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import style from './style'

const CartScreen = ({route}) => {
 const navigation = useNavigation();

 const { cart_name, cart_price, cart_images } = route.params;

  const [count, setCount] = useState(0);
  if(count <= 0) {
    return <ScrollView>
        <View style={style.cardWrap}>
            <View style={style.card}  >
                <Image 
                source={{uri: cart_images}}
                // source={require('../../images/beefspagetti.jpg')}
                style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: 'center',
                }}/> 
                <Text style={style.price}>
                    IDR {cart_price}.000
                </Text>             
            </View>
            <View>
                <Text style={style.titleProduct}>
                    {cart_name}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Pressable>
                        <Image 
                        source={require('../../images/min.jpg')}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15}} />
                    </Pressable>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}> {count} </Text>
                    <Pressable onPress={()=> {
                        setCount(count + 1)
                            }}>
                        <Image 
                        source={require('../../images/plus.jpg')}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15}} />
                    </Pressable>
                </View>
            </View>
        </View>       
        <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20,
        paddingTop: 20,
        borderTopWidth: 2,
        borderTopColor: '#E0E0E2',}}>
            <Text style={style.titleBill}>
                Item Total
            </Text>
            <Text style={{marginLeft: 95}} >
                IDR 0.000
            </Text>
        </View>
        <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={style.titleBill} >
                Delivery Charge
            </Text>
            <Text style={{marginLeft: 50}} >
                IDR 0.00
            </Text>
        </View>
       <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={style.titleBill} >
                Tax
            </Text>
            <Text style={{
                marginLeft: 149, 
                marginBottom: 50}}>
                IDR 0.000
            </Text>
        </View> 

       <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}} >
                Total :
            </Text>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 70, 
                marginBottom: 10}}>
                IDR 0.000
            </Text>
        </View> 
        <TouchableOpacity style={style.btnCheckout} 
        onPress={()=> 
        ToastAndroid.show('Silahkan Tambahkan Jumlah Pesanan '+ '\n' + cart_name + '-mu' + '\n' + 'dengan menekan tombol "+" ', ToastAndroid.LONG)} >
            <Text style={style.textCheckout} >
                Checkout
            </Text>
        </TouchableOpacity> 
    </ScrollView>

  }

  return (
    <ScrollView>
        <View style={style.cardWrap}>
            <View style={style.card}  >
                <Image 
                source={{uri: cart_images}}
                // source={require('../../images/beefspagetti.jpg')}
                style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: 'center',
                }}/> 
                <Text style={style.price}>
                    IDR {cart_price}.000
                </Text>             
            </View>
            <View>
                <Text style={style.titleProduct}>
                    {cart_name}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Pressable onPress={()=> {
                        setCount(count - 1)
                            }}>
                        <Image 
                        source={require('../../images/min.jpg')}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15}} />
                    </Pressable>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}> {count} </Text>
                    <Pressable onPress={()=> {
                        setCount(count + 1)
                            }}>
                        <Image 
                        source={require('../../images/plus.jpg')}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15}} />
                    </Pressable>
                </View>
            </View>
        </View>       
        <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20,
        paddingTop: 20,
        borderTopWidth: 2,
        borderTopColor: '#E0E0E2',}}>
            <Text style={style.titleBill}>
                Item Total
            </Text>
            <Text style={{marginLeft: 95}} >
                IDR {(`${cart_price}` * `${count}`)}.000
            </Text>
        </View>
        <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={style.titleBill} >
                Delivery Charge
            </Text>
            <Text style={{marginLeft: 50}} >
                IDR 0.00
            </Text>
        </View>
       <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={style.titleBill} >
                Tax
            </Text>
            <Text style={{
                marginLeft: 149, 
                marginBottom: 50}}>
                IDR 10.000
            </Text>
        </View> 

       <View 
        style={{flexDirection: 'row',
        width: '80%', 
        alignSelf: 'center',
        marginBottom: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}} >
                Total :
            </Text>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 70, 
                marginBottom: 10}}>
                IDR {(`${cart_price}` * `${count}`) + 10 }.000
            </Text>
        </View> 
        <TouchableOpacity style={style.btnCheckout} onPress={()=> navigation.navigate('Delivery', {
            checkout_name: cart_name,
            images: cart_images,
            qty: count,
            price_perItem: cart_price,
            price: (`${cart_price}` * `${count}`),
            tax: 10,
            total: ((`${cart_price}` * `${count}`) + 10 )
        })} >
            <Text style={style.textCheckout} >
                Checkout
            </Text>
        </TouchableOpacity> 
    </ScrollView>
  )
}

export default CartScreen