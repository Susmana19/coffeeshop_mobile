import { View, Text, Image, TextInput, ScrollView, Pressable, TouchableOpacity, ImageBackground} from "react-native"
import { useState, useEffect } from "react"

import style from "./style"
import { useNavigation } from "@react-navigation/native"

const ProfileScreen = () => {

    const navigation = useNavigation()


  return (
    <ScrollView>
        <Text style={style.title}>
            My Profile
        </Text>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Information</Text>
                <Pressable onPress={()=> {navigation.navigate('EditProfile')}} >
                <Text>edit</Text>    
                </Pressable>
            </View>
            <View style={style.card}>
                <Image
                source={require('../../images/profile.jpg')}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginTop: 15
                }}
                />
                <View style={style.cardText}>
                    <Text style={style.cardName}>Zulaikha</Text>
                    <Text style={style.cardData}>zulaikha@gmail.com</Text>
                    <Text style={style.cardData}>0812345678</Text>
                    <Text style={{color:'#6A4029'}}>Iskandar Street Block A Number 102</Text>
                </View>
            </View>
        </View>

        <Pressable onPress={()=> {navigation.navigate('History')}} style={style.cardOption}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Order History</Text>
            <Image />
        </Pressable>
        <View style={style.cardOption}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Edit Password</Text>
            <Image />
        </View>     
       <View style={style.cardOption}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>FAQ</Text>
            <Image />
        </View> 
       <View style={style.cardOption}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Help</Text>
            <Image />
        </View> 

        <TouchableOpacity style={style.btnLogin} >
            <Text style={style.textBtnLogin} >
                Save Change
            </Text>
        </TouchableOpacity>        

    </ScrollView>
  )
}

export default ProfileScreen