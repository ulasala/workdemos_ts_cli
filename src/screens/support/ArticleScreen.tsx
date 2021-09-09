import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import AppButton from './../../components/AppButton';

import AppWebView from './AppWebView';

const ArticleScreen = ({route}) => {
  const navigation = useNavigation();
  const {id, title, description} = route.params;

  const contactHandler = () => {
    navigation.navigate('AppWebView', {
      url: 'https://help.coinbase.com/en/contact-us',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}> {title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptiontext}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <AppButton title="Contact Us" onPress={contactHandler} />
      </View>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  titletext: {
    fontSize: 40,
    margin: 15,
  },
  description: {
    flex: 4,
  },
  descriptiontext: {
    fontSize: 20,
    margin: 15,
    alignSelf: 'baseline',
  },
  footer: {
    flex: 1,
    margin: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
