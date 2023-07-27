import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SRMain from './Pantallas/SRMain';
import SRAdd from './Pantallas/SRAdd';
import SRRead from './Pantallas/SRRead';
import SRUpdate from './Pantallas/SRUpdate';
import SRDelete from './Pantallas/SRDelete';

function MainScreen() {
  return (
    <SRMain/>
  );
}

function AddScreen() {
  return (
    <SRAdd/>
  );
}

function ReadScreen() {
  return (
    <SRRead/>
  );
}

function UpdateScreen() {
  return (
    <SRUpdate/>
  );
}


function DeleteScreen() {
  return (
    <SRDelete/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={MainScreen} />
        <Tab.Screen name="Agregar" component={AddScreen} />
        <Tab.Screen name="Ver" component={ReadScreen} />
        <Tab.Screen name="Actualizar" component={UpdateScreen} />
        <Tab.Screen name="Eliminar" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}