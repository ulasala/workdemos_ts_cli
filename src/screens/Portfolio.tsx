import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Portfolio = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Portfolio Screen</Text>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
