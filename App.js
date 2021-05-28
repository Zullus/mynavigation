import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppContacts from './src/pages/AppContacts';
import Contacts from './src/pages/Contacts';
import Information from './src/pages/Informations';

//Com Stack Navigation e BottomTabs
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function Tabs(){
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name="AppContacts" component="{AppContacts}"/>
//       <Tab.Screen name="Contacts" component="{Contacts}"/>
//     </Tab.Navigator>
//   )
// }

function Tabs() {
  return(
    <Tab.Navigator >
       <Tab.Screen name="Meus Contatos" component={AppContacts}/>
       <Tab.Screen name="Contacts" component={Contacts}/>
     </Tab.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >
       <Stack.Screen 
        name="Meus Contatos" 
        component={Tabs}

      />
       <Stack.Screen 
        name="Information" 
        component={Information}

        />
     </Stack.Navigator>
   </NavigationContainer>
  );
}