import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Prices = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Prices Screen</Text>
    </View>
  );
};

export default Prices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
