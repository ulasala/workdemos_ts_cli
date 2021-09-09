import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
const AppWebView = ({route}) => {
  const navigation = useNavigation();
  const {url} = route.params;
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default AppWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
