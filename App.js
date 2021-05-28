import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Informations';

//Com Stack Navigation
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >{/* DICA */}
       <Stack.Screen 
        name="Contacts" 
        component={Contacts}

      />
       <Stack.Screen 
        name="Information" 
        component={Information}

        />
     </Stack.Navigator>
   </NavigationContainer>
  );
}