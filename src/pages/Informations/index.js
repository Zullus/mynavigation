import React from 'react';
import { View, Text } from 'react-native';

export default function Information({navigation}){

    return(
        
        <View style={{marginTop:60}}>
            <Text>Information</Text>
            <Text onPress={()=>navigation.navigate('Contacts')}>Voltar</Text>
        </View>
        
    )
}