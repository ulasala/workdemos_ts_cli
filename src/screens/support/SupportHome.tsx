import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {Icon} from 'react-native-elements';
import ArticleList from './ArticleList';
import Search from './Search';
import CardPayment from './CardPayment';

const SupportHome = () => {
  const navigation = useNavigation();
  const supportHandler = () => {
    navigation.navigate('AppWebView', {
      url: 'https://help.coinbase.com/en/contact-us',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support title</Text>

        <View style={styles.icon}>
          <Icon name="chat" size={35} color="lightblue" />
        </View>
      </View>

      <ScrollView style={styles.body}>
        <Search />
        <CardPayment />
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footertext}>
          <Text>Can't find what you looking for?</Text>
          <Pressable onPress={supportHandler}>
            <Text style={styles.footertextbutton}>Go to Coinbase Help</Text>
          </Pressable>
        </View>
        <View style={styles.icon}>
          <Icon name="support-agent" size={35} color="blue" />
        </View>
      </View>
    </View>
  );
};

export default SupportHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    flex: 3,
    fontSize: 30,
    padding: 20,
    marginLeft: 30,
  },
  icon: {
    flex: 1,
    padding: 20,
    marginLeft: 30,
  },
  body: {
    flex: 1,
    width: '90%',
    margin: 10,
  },
  footer: {
    width: '90%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  footertext: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 30,
  },
  footertextbutton: {
    color: 'blue',
    marginTop: 5,
  },
});
