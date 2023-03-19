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
import React from 'react';
import { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

import style from "./style"
import commonStyle from "../../styles/commonStyle"
import axios from "axios";

const LoginScreen = () => {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);


    const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

    const handleLogin = () => {

        if (loginForm.email === '') {
        return alert("email is required")
        } else if (loginForm.password === '' ) {
        return alert("password is required") 
        }

        axios({
            url: 'https://coffeeshopmobilebe.cyclic.app/api/v1/auth/login',
            method: 'POST',
            data: loginForm
        }).then((res)=> {
            AsyncStorage.setItem('@userData', JSON.stringify(res.data.data))
            ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
            // navigation.navigate("Tab")
        }).catch((err) => {
            ToastAndroid.show('Login Failed', ToastAndroid.SHORT)
            console.log(err.response);
        })
    }

  return (
        <ImageBackground
        source={require('../../images/bg-login.jpg')}
        style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }}>
        <ScrollView>

        <Text style={style.title}>
            Login
        </Text>
        <TextInput 
            style={style.textInput}
            keyboardType='email-address'
            placeholder={'Enter your email address'}
            placeholderTextColor="#FFFFFF" 
            autoCapitalize={'none'}
            // value={loginForm.email}
            onChangeText={(value)=> setLoginForm({...loginForm, email: value})}  
        />
        <TextInput
            style={style.textInput}
            placeholder={'Enter your password'}
            placeholderTextColor="#FFFFFF" 
            autoCapitalize={'none'}
            // value={loginForm.password}
            secureTextEntry={true}
            onChangeText={(value)=> setLoginForm({...loginForm, password: value})}  
        />
        <Text style={style.forgotpass} >
        Forgot password?
        </Text>
        <TouchableOpacity onPress={handleLogin} style={style.btnLogin}>
            <Text style={style.textBtnLogin} >
                Login
            </Text>
        </TouchableOpacity> 
           <Text style={style.textOtherLogin}>
                or login with
            </Text>
        <TouchableOpacity style={style.btnLoginGoogle} >
            <Image source={require('../../images/google.jpg')}
                style={{
                    width: 30,
                    height: 30,
                    marginEnd: 20}} />
            <Text style={style.textBtnLoginGoogle} >
                Login with Google
            </Text>
        </TouchableOpacity>       

        </ScrollView>


        </ImageBackground>
  )
}

export default LoginScreen