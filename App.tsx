import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

//import {TabNavigation} from './src/navigation/TabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';
//import {View, Text, StyleSheet} from 'react-native';
//import AppHeader from './src/components/Header';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     backgroundColor: 'white',
//     height: 50,
//   },
//   body: {
//     flex: 12,
//     backgroundColor: 'red',
//   },
//   footer: {
//     flex: 12,
//     backgroundColor: 'black',
//   },
// });
