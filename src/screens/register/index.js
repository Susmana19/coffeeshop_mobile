import { View, Text, Image, TextInput, ScrollView, Pressable, TouchableOpacity, ToastAndroid, ImageBackground} from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"

import style from "./style"
import commonStyle from "../../styles/commonStyle"

const RegisterScreen = () => {

    const navigation = useNavigation();

    const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

  const handleRegister = () => {
    
    if (registerForm.email === '') {
      return alert("email is required")
    } else if (registerForm.password === '' ) {
      return alert("password is required") 
    } else if(registerForm.phone  === '') {
      return alert("phone is required")
    }

    axios({
      url: 'http://192.168.8.122:5000/api/v1/auth/register',
      method: 'POST',
      data: registerForm
    }).then((res)=> {
        ToastAndroid.show('Register Successfully', ToastAndroid.SHORT)
        navigation.navigate('Login')   
        // console.log(res.data.data) 
    }).catch((err) => {
    //   console.log(err.message);
      ToastAndroid.show('Register Failed', ToastAndroid.SHORT)
    })

    
  }

  return (
     
        <ImageBackground
        source={require('../../images/bg-signup.jpg')}
        style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }}>
        <ScrollView>

        <Text style={style.title}>
            Sign Up
        </Text>
        <TextInput 
            style={style.textInput}
            placeholder={'Enter your email address'}
            placeholderTextColor="#FFFFFF" 
            autoCapitalize={'none'}
            // value={registerForm.email}
            onChangeText={(value)=> setRegisterForm({...registerForm, email: value})}  
        />
        <TextInput
            style={style.textInput}
            placeholder={'Enter your password'}
            placeholderTextColor="#FFFFFF" 
            // value={registerForm.password}
            autoCapitalize={'none'}
            secureTextEntry={true}
            onChangeText={(value)=> setRegisterForm({...registerForm, password: value})}  
        />
        <TextInput 
            style={style.textInput}
            placeholder={'Enter your phone number'}
            placeholderTextColor="#FFFFFF" 
            autoCapitalize={'none'}
            // value={registerForm.phone}
            onChangeText={(value)=> setRegisterForm({...registerForm, phone: value})}  
        />
        <TouchableOpacity onPress={handleRegister}  style={style.btnLogin} >
            <Text style={style.textBtnLogin} >
                Create Account
            </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={style.btnLoginGoogle} >
            <Image source={require('../../images/google.jpg')}
                style={{
                    width: 30,
                    height: 30,
                    marginEnd: 20}} />
            <Text style={style.textBtnLoginGoogle} >
                Create with Google
            </Text>
        </TouchableOpacity>       

        </ScrollView>


        </ImageBackground>
     

  )
}

export default RegisterScreen