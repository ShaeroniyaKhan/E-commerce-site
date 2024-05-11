import {View, Text, Stylesheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function RoundButton({label, border = false}) {
    return (
        <TouchableOpacity>
            <View style={{
                backgrounColor: border ? 'white' : '#034ef7',
                widht:120,
                paddingHorizontal: 10, 
                paddingVertical: 10,
                borderRadius: 20,
                marginLeft: 10,
                borderColor: 'black',
                borderWidth: border ? 1:0
                }}>
                    <Text style={{color: border ? 'black':'white',
                    fontWeight: 'bold', 
                    textAlign:'center'}}>{label}</Text>
                    </View>
                    </TouchableOpacity>
    );
}