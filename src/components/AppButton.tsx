import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
