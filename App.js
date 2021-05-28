import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Informations';

//Com Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Drawer.Navigator >{/* DICA */}
       <Drawer.Screen 
        name="Contacts" 
        component={Contacts}

      />
       <Drawer.Screen 
        name="Information" 
        component={Information}

        />
     </Drawer.Navigator>
   </NavigationContainer>
  );
}