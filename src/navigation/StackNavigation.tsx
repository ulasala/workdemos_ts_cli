import {createStackNavigator} from '@react-navigation/stack';
import ArticleScreen from './../screens/support/ArticleScreen';
import SupportHome from './../screens/support/SupportHome';
import React from 'react';
import AppWebView from './../screens/support/AppWebView';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SupportHome" component={SupportHome} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
      <Stack.Screen name="AppWebView" component={AppWebView} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
