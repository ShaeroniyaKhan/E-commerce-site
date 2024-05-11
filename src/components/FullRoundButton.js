import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FullRoundButton({image,bg}) {
    return(
        <TouchableOpacity>
            <View style ={{backroundColor: bg, 
            width: 50, 
            height: 50, 
            justifyContent:'center', 
            alignItems: 'center',
            borderRadius : 25,
            marginLeft: 10,
            }}>
            <Image source={image} style={{width: 20, height:20}}/>
            </View>
        </TouchableOpacity>
    );
}