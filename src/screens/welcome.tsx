import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import colors from './../resources/colors';
import Button from './../components/Button';
import Login from './auth/Login';
import Register from './auth/Register';

export default function Welcome(props) {
  const {navigation} = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.textStyle}>coinbase</Text>
        {visible && (
          <View style={styles.bottomView}>
            <Button
              text={'Get Started'}
              disabled={false}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
              onPress={() => navigation.navigate('Register')}
            />
            <Button
              text={'Sign in'}
              disabled={false}
              btnStyle={styles.btnStyle2}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: RFValue(35),
  },
  btnStyle: {
    backgroundColor: colors.white,
  },
  btnStyle2: {
    marginTop: 20,
  },
  btnTextStyle: {
    color: colors.primaryBlue,
  },
});
