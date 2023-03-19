import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//styles
import style from './style'
import commonStyle from '../../styles/commonStyle';

//components
import Favorite from '../../components/Favorite';
import Coffee from '../../components/Coffee';
import NonCoffee from '../../components/NonCoffee';
import Food from '../../components/Food';
import AddOn from '../../components/AddOn';


const HomeScreen = () => {

  const [isLogin, setIsLogin] = React.useState({
    value: false, data: {}
  })

  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData')
      if(value !== null) {
        setIsLogin({
          value: true,
          data: JSON.parse(value)
        })
      }else {
        setIsLogin({
          value: false,
          data: {}
        })
      }
    } catch(e) {
      // error reading value
    }
  }
  React.useEffect(()=> {
    getDataAuth()
  },[])


  return (
    <ScrollView>
      <Text style={[commonStyle.mlbase, style.greeting]}>Halo, {isLogin.value ? isLogin.data.user.name : '' }</Text>
        <Text style={[commonStyle.mlbase, style.title]} >
            A good coffee is{'\n'}a good day
        </Text>

        <Favorite/>
        <Coffee/>
        <NonCoffee/>
        <Food/>
        <AddOn/>
    </ScrollView>
  )
}

export default HomeScreen