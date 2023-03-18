// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//screen
import HomeScreen from './src/screens/home';
import DetailProductScreen from './src/screens/detailProduct';
import RegisterScreen from './src/screens/register';
import LoginScreen from './src/screens/login';
import WelcomeScreen from './src/screens/welcome';
import AfterWelcomeScreen from './src/screens/afterWelcome';
import CartScreen from './src/screens/cart';
import DeliveryScreen from './src/screens/delivery';
import PaymentScreen from './src/screens/payment';
import HistoryScreen from './src/screens/history';
import EditProfileScreen from './src/screens/editProfile';
import ProfileScreen from './src/screens/profile';
import FavoriteScreen from './src/screens/products/Favorite';
import CoffeeScreen from './src/screens/products/Coffee';
import AddOnScreen from './src/screens/products/AddOn';
import NonCoffeeScreen from './src/screens/products/NonCoffee';
import FoodScreen from './src/screens/products/Food';


const Stack = createNativeStackNavigator();

function App() {
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

      {isLogin.value ? (<>
      
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Cart" component={CartScreen} options={{title: 'My Cart'}} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} options={{title: 'Checkout'}} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{title: 'Payment'}} />
      <Stack.Screen name="History" component={HistoryScreen} options={{title: 'Order History'}} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{title: 'Edit Profile'}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'My Profile'}} />

        {/* product screen */}
        <Stack.Screen name="DetailProduct" component={DetailProductScreen} options={{title: 'Detail Product'}} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{title: 'Favorite Products'}} />
        <Stack.Screen name="Coffee" component={CoffeeScreen} options={{title: 'Coffee'}} />
        <Stack.Screen name="NonCoffee" component={NonCoffeeScreen} options={{title: 'Non Coffee'}} />
        <Stack.Screen name="Food" component={FoodScreen} options={{title: 'Food'}} />
        <Stack.Screen name="AddOn" component={AddOnScreen} options={{title: 'Add On'}} />
      
      </>) : (<>
      
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="AfterWelcome" component={AfterWelcomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
         
      </>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;









// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>I will Develop Mobile App
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
