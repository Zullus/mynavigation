import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({navigation}){

    return(

            <View style={{marginTop:60}}>
            <Text>Nome do Contato</Text>
            <Text
                onPress={()=>navigation.navigate('Information')}
            >Information...</Text>
        </View>
        
    )
}