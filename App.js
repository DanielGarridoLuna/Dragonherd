import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SRMain from './Pantallas/SRMain';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor:'crimson' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function NewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nueva Pantalla</Text>
    </View>
  );
}


function MainScreen() {
  return (
    <SRMain/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={HomeScreen} />
        <Tab.Screen name="Secundaria" component={SettingsScreen} />
        <Tab.Screen name="Opciones" component={NewScreen} />
        <Tab.Screen name="Main" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}