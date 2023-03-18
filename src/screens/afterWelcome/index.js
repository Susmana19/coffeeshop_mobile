import { View, Text, Image, TextInput, ScrollView, Pressable, TouchableOpacity, ImageBackground, useAnimatedValue} from "react-native"
import { useNavigation } from '@react-navigation/native';

import style from "./style"
const AfterWelcomeScreen = () => {

const navigation = useNavigation()

  return (
        <ImageBackground
        source={require('../../images/bg-afterwelcome.jpg')}
        style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }}>
        <View>

        <Pressable
        onPress={()=> {navigation.navigate('Register')}}
        style={style.btnCreateAccount} >
            <Text style={style.textBtnRegister} >
                Create Account
            </Text>
        </Pressable> 
        <Pressable
        onPress={()=> {navigation.navigate('Login')}}
        style={style.btnLogin} >
            <Text style={style.textBtnLogin} >
                Login
            </Text>
        </Pressable> 
        </View>


        </ImageBackground>
  )
}

export default AfterWelcomeScreen
