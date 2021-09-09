import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';

import Home from './../screens/Home';
import Settings from './../screens/Settings';
import {TabNavigation} from './TabNavigation';
import SupportHome from './../screens/support/SupportHome';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="left"
      drawerType="front"
      edgeWidth={100}
      hideStatusBar={false}
      overlayColor="#00000090"
      drawerStyle={{
        backgroundColor: '#e6e6e6',
        width: 250,
      }}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          title: 'Home Title',
          drawerIcon: ({focused}) => (
            <FontAwesome5
              name="autoprefixer"
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          title: 'Support',
          drawerIcon: ({focused}) => (
            <Icon
              name="support-agent"
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
