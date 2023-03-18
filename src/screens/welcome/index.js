import { View, Text, Image, TextInput, ScrollView, Pressable, TouchableOpacity, ImageBackground, useAnimatedValue} from "react-native"
import { useNavigation } from '@react-navigation/native';

import style from "./style"
const WelcomeScreen = () => {

const navigation = useNavigation()

  return (
        <ImageBackground
        source={require('../../images/bg-welcome.jpg')}
        style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }}>
        <ScrollView>

        <Pressable
        onPress={ ()=> {navigation.navigate('AfterWelcome')} }
        style={style.btnLogin} >
            <Text style={style.textBtnLogin} >
                Get Started
            </Text>
        </Pressable> 
        </ScrollView>


        </ImageBackground>
  )
}

export default WelcomeScreen
