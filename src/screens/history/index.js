import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import style from './style'


const HistoryScreen = ({route}) => {

  const {name, total, images} = route.params;

  return (
    <ScrollView>
      <Text style={{alignSelf: 'center', marginVertical: 20}}>Select an item to delete</Text>
        <View style={style.cardWrap}>
              <Image 
              source={{uri: images}}
              // source={require('../../images/beefspagetti.jpg')}
                style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                alignSelf: 'center',
                marginRight: 20
              }}/>            
            <View>
                <Text style={style.titleProduct}>
                    {name}
                </Text>
                <Text style={style.price}>
                  IDR {total}.000
                </Text>
                <Text>
                  Delivery [Monday, 2PM]
                </Text>
            </View>
            <View>

            </View>
        </View>             
    </ScrollView>
  )
}

export default HistoryScreen