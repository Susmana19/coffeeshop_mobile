import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import style from './style'

const DeliveryScreen = ({route}) => {

const navigation = useNavigation();

const {  checkout_name, qty, price_perItem, price, tax, total, images } = route.params;

  return (
    <View>
        <Text style={style.title} >
            Delivery
        </Text>

        <View style={style.cardWrap}>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 25,
                width: '80%',
                marginBottom: 10}}>
                <Text style={style.sectionTitle}>
                    Address details
                </Text>
                <Text style={{color: '#6A4029', fontSize: 15, left: 10}}>
                    change
                </Text>
            </View>
            <View style={style.card}>
                <Text style={style.textCard}>
                    Iskandar Street
                </Text>
                <Text style={style.textCard}>
                    Km 5 refinery road oppsite re
                    public road, effurun, Jakarta                    
                </Text>
                <Text style={style.textCard}>
                    +62 81348287878        
                </Text>
            </View>
        </View>
        <View>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 25,
                width: '80%',
                marginBottom: 10}}>
                <Text style={style.sectionTitle}>
                    Delivery methods
                </Text>
            </View>
            <View style={[style.card]}>
                <Text style={style.textCard}>
                    Door Delivery
                </Text>
                <Text style={style.textCard}>
                    Pick up at store
                </Text>
                <Text style={style.textCard}>
                    Dine in      
                </Text>
            </View>
        </View>

       <View 
       style={{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 35
        }}>
        <Text style={{fontSize: 20}}> Total </Text>
        <Text style={{fontWeight: 'bold', fontSize: 25}} > IDR {total}.000 </Text>
       </View>

        <TouchableOpacity style={style.btnAddCart} onPress={()=> navigation.navigate('Payment', {
            name: checkout_name,
            images: images,
            qty: qty,
            price_perItem: price_perItem,
            price: price,
            tax: tax,
            total: total
        })} >
            <Text style={style.textAddCart} >
                Proceed to payment
            </Text>
        </TouchableOpacity> 

    </View>
)
}

export default DeliveryScreen