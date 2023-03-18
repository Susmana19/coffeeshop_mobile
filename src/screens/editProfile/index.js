import { View, Text, Image, TextInput, ScrollView, Pressable, TouchableOpacity, ImageBackground} from "react-native"
import { useState, useEffect } from "react"
import RadioGroup from 'react-native-radio-buttons-group';

import style from "./style"

const EditProfileScreen = () => {

    
    const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

     const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Female',
            value: 'female',
            borderColor: '#6A4029',
            color: '#6A4029'      
        },
        {
            id: '2',
            label: 'Male',
            value: 'male',
            borderColor: '#6A4029',
            color: '#6A4029'               
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
  


  return (
    <ScrollView>
        <Image source={require('../../images/profile.jpg')}
        style={{
            alignSelf: 'center',
            width: 150,
            height: 150,
            borderRadius: 75
        }}/>

        <View>
            <View>
                <Text style={style.label}>Name</Text>
                <TextInput 
                    style={style.textInput}
                    placeholder={'Enter your name'}
                    placeholderTextColor="#9F9F9F" 
                    value={registerForm.email}
                    onChange={(value)=> setRegisterForm({email: value})}  
                />
            </View>
            <View style={{alignSelf: 'flex-start', marginBottom: 15, marginLeft: 10}}>
            <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={onPressRadioButton}
                        layout= 'row'

                    />
            </View>




          <View>
                <Text style={style.label}>Email Address</Text>
                <TextInput 
                    style={style.textInput}
                    placeholder={'Enter your email address'}
                    placeholderTextColor="#9F9F9F" 
                    value={registerForm.email}
                    onChange={(value)=> setRegisterForm({email: value})}  
                />
            </View>
        <View>
                <Text style={style.label}>Phone Number</Text>
                <TextInput 
                    style={style.textInput}
                    placeholder={'Enter your email address'}
                    placeholderTextColor="#9F9F9F" 
                    value={registerForm.email}
                    onChange={(value)=> setRegisterForm({email: value})}  
                />
        </View>            
        <View>
                <Text style={style.label}>Date of Birth</Text>
                <TextInput 
                    style={style.textInput}
                    placeholder={'Enter your date of birth'}
                    placeholderTextColor="#9F9F9F" 
                    value={registerForm.email}
                    onChange={(value)=> setRegisterForm({email: value})}  
                />
        </View>  
        <View>
                <Text style={style.label}>Delivery Address</Text>
                <TextInput 
                    style={style.textInput}
                    placeholder={'Enter your delivery address'}
                    placeholderTextColor="#9F9F9F" 
                    value={registerForm.email}
                    onChange={(value)=> setRegisterForm({email: value})}  
                />
        </View> 

        <TouchableOpacity style={style.btnLogin} >
            <Text style={style.textBtnLogin} >
                Save and Update
            </Text>
        </TouchableOpacity>           
        </View>
    </ScrollView>
  )
}

export default EditProfileScreen