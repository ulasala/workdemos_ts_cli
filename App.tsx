import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
