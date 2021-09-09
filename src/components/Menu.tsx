import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Menu = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View style={{padding: 10}}>
        <Icon name="menu" />
      </View>
    </TouchableOpacity>
  );
};

export default Menu;

const styles = StyleSheet.create({});
