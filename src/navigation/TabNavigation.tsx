import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from './AppParamList';
import Home from '../screens/Home';

import Settings from './../screens/Settings';
import Portfolio from './../screens/Portfolio';
import Transfer from './../screens/Transfer';
import Prices from './../screens/Prices';

interface TabNavigationProps {}

const Tab = createBottomTabNavigator<AppParamList>();

export const TabNavigation: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/1x/home.png')}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
              <Text style={{color: focused ? 'blue' : 'gray', fontSize: 10}}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/1x/portfolio.png')}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
              <Text style={{color: focused ? 'blue' : 'gray', fontSize: 10}}>
                portfolio
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="transfer"
        component={Transfer}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/1x/transfer.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Prices"
        component={Prices}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/1x/prices.png')}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
              <Text style={{color: focused ? 'blue' : 'gray', fontSize: 10}}>
                Prices
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/1x/settings.png')}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
              <Text style={{color: focused ? 'blue' : 'gray', fontSize: 10}}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
