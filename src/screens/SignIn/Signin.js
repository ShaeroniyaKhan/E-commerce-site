import {View, Text, Image, StatusBar} from 'react-native'
import React from 'react'
import RoundButton from '../../components/RoundButton';
import FullRoundButton from '../../components/FullRoundButton';

export default function SignInScreen() {
    return(
        <View style={{flex:1}}>
            <StatusBar backgroundColor={'#f6f7f9'}/>
            <View style={{flex:0.5}}>
                <Image style={{
                    width:'100%',
                    height: '100%',
                }} 
                resizeMode={'cover'}
                source= {require('../../assets/Login.jpg')}/>
            </View>
            <View style ={{flec:0.5, backgroundColor:'#f6f7f9'}}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: 'black',
                    fontWeight: 'bold',
                }}>Hello</Text>
                <Text style={{
                    textAlign: 'center', 
                }}>
                    THE E-COMMERCE APP</Text>
                <View 
                style ={{flexDirection: 'row', 
                marginTop: 20, 
                justifyContent:'center',
                }}>
                <RoundButton label= {'login'}/>
                <RoundButton label= {'Sign Up'} border= {true}/>
                </View>
               
                <View 
                style ={{ 
                    marginTop: 20,
                    paddingBottom: 20,
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <Text style={{
                    textAlign: 'center',
                    marginTop:  20,
                }}>
                    Or via Social Mdeia Account</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems: 'center',
                        marginTop: 15,
                        fontSize: 30,
                    }}>
                    <FullRoundButton 
                    image= {require('../../assets/Google.jpg')} 
                    bg={'#e54545'}/>
                    <FullRoundButton 
                    image= {require('../../assets/facebook.png')} 
                    bg={'#2d75e8'}/>

                    </View>
                </View>
            </View>
        </View>
    );
}