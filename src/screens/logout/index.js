import React from 'react'
import { 
    View,
    Text, 
    Image, 
    TextInput, 
    ScrollView, 
    Pressable, 
    TouchableOpacity, 
    ImageBackground, 
    ToastAndroid,
    RefreshControl
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';


import style from "./style"

const LogoutScreen = () => {
  return (
    <>
    <View style={{alignSelf: 'center', marginTop: 300}}>
        <Pressable onPress={()=> {
        AsyncStorage.removeItem('@userData')
        alert('logouted')
      }}  style={style.cardOption}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Log Out</Text>
            <Image />
        </Pressable>
    </View>

    </>
  )
}

export default LogoutScreen