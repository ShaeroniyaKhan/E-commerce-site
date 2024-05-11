import {View, Text,ImageBackground} from 'react-native';
import React from 'react'

export default function SplashScreen({navigation}){
    setTimeout(() => {
        navigation.navigate('SignIn');
    }, 2000);
    return(
        <ImageBackground source={require('../../assets/splash1.jpg')}
        resizeMode={'cover'}
        style={{flex:1, padding:15}}>
            <Text 
            style={{fontSize:30, color: 'white', fontWeight:'bold',}}
            >Ecommerce App</Text>
        </ImageBackground>
    );
}